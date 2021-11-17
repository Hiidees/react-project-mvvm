import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import Cookies from "universal-cookie";
import ISessionEntity from "../@types/entities/ISessionEntity";
import IAuthPostRefreshTokenResponse from "../@types/http-services/responses/posts/IAuthPostRefreshTokenResponse";
import AuthHelper from "../helpers/AuthHelper";

//Interceptors è una funzionalità di Axios per interceptare le richieste in arrivo

const cookies = new Cookies();
const session = cookies.get("Session") as ISessionEntity; //prendo la sessione dei cookie

function onRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  if (session) {
    //se session esiste, prendo l'access token
    config.headers = {
      authorization: `bearer ${session.accessToken}`,
    };
  }
  return config;
}

function onRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

function onResponse(response: AxiosResponse): AxiosResponse {
  return response;
}

async function onResponseError(
  error: AxiosError
): Promise<AxiosError | AxiosRequestConfig> {
  if (session && error.code === "401") {
    try {
      const authHelper = new AuthHelper();

      const response = (await authHelper.refreshTokenAsync(
        session.accessToken,
        session.refreshToken
      )) as IAuthPostRefreshTokenResponse;

      session.accessToken = response.accessToken;
      session.refreshToken = response.refreshToken;

      cookies.set("session", session);

      error.config.headers = {
        authorization: `bearer ${session.accessToken}`,
      };

      return error.config;
    } catch (err: unknown) {}
  }

  return Promise.reject(error);
}

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

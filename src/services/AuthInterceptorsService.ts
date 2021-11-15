import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "universal-cookie";
import ISessionEntity from "../@types/entities/ISessionEntity";

//Interceptors è una funzionalità di Axios per interceptare le richieste in arrivo

const cookies = new Cookies();
const session = cookies.get("Session") as ISessionEntity; //prendo la sessione dei cookie

function onRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  if(session) //se session esiste, prendo l'access token
  {config.headers = {
    "authorization": `bearer ${session.accessToken}`
  };
}
console.log(config.headers)
  return config;
  
}

function onRequestError(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error);
}

function onResponse(response: AxiosResponse): AxiosResponse {
  return response;
}

function onResponseError(error: AxiosError): Promise<AxiosError> {


  return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
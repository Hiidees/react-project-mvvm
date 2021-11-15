import axios, { AxiosRequestConfig } from "axios";
import IErrorResponse from "../@types/http-services/IErrorResponse";
import ResponseError from "../utils/errors/ResponseError";
import { setupInterceptorsTo } from "../services/AuthInterceptorsService";

export default class HttpServicesAdapter {
  private readonly _baseUrl = "https://base-auth-services.herokuapp.com/api/v1";
  private readonly _specificAxios;

  public constructor(withAuthentication: boolean) {
    this._specificAxios = withAuthentication
      ? setupInterceptorsTo(axios)
      : axios;
  }

  public async getAsync(path: string, params: any = undefined): Promise<any> {
    const requestConfig: AxiosRequestConfig = {
      method: "get",
      baseURL: `${this._baseUrl}/${path}`,
      params: params
    };
    try {

      const response = await this._specificAxios.request(requestConfig);
      return response.data;

    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
        const response = error.response?.data as IErrorResponse;
        throw new ResponseError(
          error?.code,
          error.message,
          response);
      }

      throw error;
    }
  }

  public async postAsync(path: string, data: any): Promise<any> {
    const requestConfig: AxiosRequestConfig = {
      method: "post",
      baseURL: `${this._baseUrl}/${path}`,
      data: data
    };
    try {

      const response = await this._specificAxios.request(requestConfig);
      return response.data;

    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {

        const response = error.response?.data as IErrorResponse;
        throw new ResponseError(
          error?.code,
          error.message,
          response);

      }

      throw error;
    }
  }
}
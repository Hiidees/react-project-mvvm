import axios, {AxiosRequestConfig} from "axios";
import ISessionEntity from "../@types/entities/ISessionEntity";
import IAuthPostRequest from "../@types/requests/posts/IAuthPostRequest";
import IAuthPostResponse from "../@types/responses/posts/IAuthPostResponse";
import IErrorResponse from "../@types/responses/IErrorResponse";

const URL = "https://localhost:44360/api/auth";

  export default class AuthAdapter{

    public async fetchSession(email: string, password: string): Promise<ISessionEntity> {

      const data: IAuthPostRequest = {
        email,
        password
      };
      const requestConfig: AxiosRequestConfig = {
        method: "post",
        baseURL: URL,
        data: data
      };
  
      const res = await axios.request(requestConfig);
      if (res.status === 200) {
        console.log("Auth Adapter");
        const resData = res.data as IAuthPostResponse;
       
        console.log(resData);

        return {
          email: resData.email,
          token: resData.token,
          
        } as ISessionEntity;
      } else {
        const resData = res.data as IErrorResponse;
  
        throw Error(resData.error);
      }
    }
    
  }
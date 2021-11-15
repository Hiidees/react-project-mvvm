import axios, {AxiosRequestConfig} from "axios";
import ISessionEntity from "../@types/entities/ISessionEntity";
import IAuthPostRequest from "../@types/requests/posts/IAuthPostRequest";
import IAuthPostResponse from "../@types/responses/posts/IAuthPostResponse";
import IErrorResponse from "../@types/responses/IErrorResponse";
import { promises } from "dns";

const URL = "https://base-auth-services.herokuapp.com/api/v1/auth";

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
     
      await new Promise(resolve => setTimeout(resolve, 5000))
      if (res.status === 200) {
        const resData = res.data as IAuthPostResponse;
       
        return {
          email: resData.data.user.email,
          accessToken: resData.data.accessToken,
          refreshToken: resData.data.refreshToken
          
        } as ISessionEntity;
      } else {
        console.log("Qui")
        const resData = res.data as IErrorResponse;
  
        throw Error(resData.error);
      }
    }
    
  }
import ISignupPostRequest from "../@types/http-services/requests/posts/ISignupPostRequest";
import IUserGetResponse from "../@types/http-services/responses/gets/IUserGetResponse"
import ISignupPostResponse from "../@types/http-services/responses/posts/ISignupPostResponse";
import HttpServicesAdapter from "../adapters/HttpServicesAdapter";
import AuthenticationError from "../utils/errors/AuthenticationError";
import ResponseError from "../utils/errors/ResponseError";
import SignupError from "../utils/errors/SignupError";

//classe Helper per la registrazione e per gli utenti
export default class UserHelper {
  private readonly _adapter = new HttpServicesAdapter(true);

  public async getUserAsync(id: number): Promise<IUserGetResponse> { //metodo per prendere i dati di un determinato user
    try {

      const response = await this._adapter.getAsync(`users/${id}`);
      return response as IUserGetResponse;

    } catch (err: unknown) {

      if (err instanceof ResponseError) {
        throw new AuthenticationError(err.code, err.message, err.errorResponse);
      } else {
        throw err;
      }

    }
  }


  public async signupAsync(email: string, password: string): Promise<ISignupPostResponse>{
    const reqBody = {  //body della richiesta
      data: {
        email,
        password
      }
      
    } as ISignupPostRequest;
    
    try{
     
      const response = await this._adapter.postAsync("users",reqBody);
    
      return response as ISignupPostResponse;

    }catch (err: unknown){
      if (err instanceof ResponseError) { //se l'errore trovato è un'instanza di ResponseError
        
        //rilascia un errore della classe AuthenticationError che estende la classe ResponseError
        throw new SignupError(err.code, err.message, err.errorResponse);  
      } else {
        throw err;
      }

    }
  }
}
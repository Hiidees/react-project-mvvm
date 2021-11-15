import IAuthPostRequest from "../@types/http-services/requests/posts/IAuthPostRequest";
import IAuthPostResponse from "../@types/http-services/responses/posts/IAuthPostResponse";
import HttpServicesAdapter from "../adapters/HttpServicesAdapter";
import AuthenticationError from "../utils/errors/AuthenticationError";
import ResponseError from "../utils/errors/ResponseError";

//Gli Helper gestiscono la comunicazione con il backend facendo delle richieste ad un determinato path
//In AuthHelper si gestisce l'autenticazione nel path "auth", mandando email e password come richiesta.

export default class AuthHelper {
  //HttpServicesAdapter è l'adapter che gestisce le richieste get, post ecc...
  private readonly _adapter = new HttpServicesAdapter(true);

  public async authAsync(email: string, password: string): Promise<IAuthPostResponse> {

    const reqBody = {  //body della richiesta
      email,
      password
    } as IAuthPostRequest;

    try {

      const response = await this._adapter.postAsync("auth", reqBody);   //richiamo metodo post di adapter passando path e body
      return response as IAuthPostResponse; //la risposta è di tipo IAuthPostResponse(basato sull'api)

    } catch (err: unknown) { //catch per qualsiasi tipo di errore

      if (err instanceof ResponseError) { //se l'errore trovato è un'instanza di ResponseError
        
        //rilascia un errore della classe AuthenticationError che estende la classe ResponseError
        throw new AuthenticationError(err.code, err.message, err.errorResponse);  
      } else {
        throw err;
      }

    }
  }
}


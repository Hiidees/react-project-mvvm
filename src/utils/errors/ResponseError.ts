import IErrorResponse from "../../@types/http-services/IErrorResponse";

export default class ResponseError extends Error {
  private _responseError;
  private _code;

  //la classe Error ha un codice(opzionale), un message(string) e poi dal backend abbiamo dei messaggi di errore personalizzati tipo(UserNotFound)
  public constructor(code: string | undefined, message: string, errorResponse: IErrorResponse) { 
    super(message); 
    this._code = code;
    this._responseError = errorResponse;
  }


  //semplici get 
  public get code() {
    return this._code;
  }
  public get errorResponse() {
    return this._responseError;
  }
}

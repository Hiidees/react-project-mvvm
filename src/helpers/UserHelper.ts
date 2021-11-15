import IAuthPostRequest from "../@types/http-services/requests/posts/IAuthPostRequest";
import IUserGetResponse from "../@types/http-services/responses/gets/IUserGetResponse"
import HttpServicesAdapter from "../adapters/HttpServicesAdapter";
import AuthenticationError from "../utils/errors/AuthenticationError";
import ResponseError from "../utils/errors/ResponseError";

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
}
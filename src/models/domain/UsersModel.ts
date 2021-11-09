import { makeAutoObservable } from "mobx";
//mobx is a library that contain methods like makeAutoObservable and Observer. 
//Those methods are used to notify and keep always updated stuff like in each element

import { IUserEntity } from "../../@types/entities/IUserEntity";
//In @types we have the interfaces that we use.

import { default as UsersAdapter } from "../../adapters/UsersAdapter"; 
//Adapter in this case contain the data, but with a real DB Adapter will be like a middleware

export default class UsersModel {
  private static instance: UsersModel;
  private adapter = new UsersAdapter();

  private isFetchingData = false; //Per capire se i dati stanno venendo presi dal db
  private users: IUserEntity[] = [];

  private constructor() {
    makeAutoObservable(this);
    this.fetchDataAsync(); 
  }

  //this is a singleton, is used for create only one time an instance of a class.
  //it check if the instance exist and then return it
  public static getInstance(): UsersModel { 
    if (!UsersModel.instance) {
      UsersModel.instance = new UsersModel();
    }

    return UsersModel.instance;
  }
  
  //return the data of users saved in the model
  public get _users() {
    return this.users;
  }
  public get _isFetchingData(): boolean {
    return this.isFetchingData;
  }

  //the fetch operation is used to take data from the db, 
  //is an async function that "await" the data from the db before keep going

  public async fetchDataAsync(): Promise<void> {
    this.isFetchingData = true;
    this.users = await this.adapter.fetchUsersAsync();
    this.isFetchingData = false;
  }

  
}
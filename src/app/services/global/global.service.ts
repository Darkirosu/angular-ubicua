import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  

})
export class GlobalService {
  private _user: number;
  private _admin: boolean;

  constructor() { }

  getUser(){
    return this._user;
  }

  getAdmin(){
    return this._admin;
  }

  setUser(newuser: number,newadmin: boolean){
    this._user=newuser;
    this._admin=newadmin;
  }
}

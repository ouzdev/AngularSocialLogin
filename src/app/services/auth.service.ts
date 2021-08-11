import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string ="https://localhost:44345/api/auth";
  constructor(private httpClient:HttpClient) {
  }

    loginWebService(IdToken:any):Observable<UserResponseModel>{
     return  this.httpClient.post<UserResponseModel>(this.apiUrl+"/authenticate",IdToken);
    }

    registerSocialUser(data:any):Observable<UserResponseModel>{
      console.log(data);
      return this.httpClient.post<UserResponseModel>(this.apiUrl+"/register",data);
    }

    loginService(data:any):Observable<UserResponseModel>{
      return this.httpClient.post<UserResponseModel>(this.apiUrl+"/login",data);
    }
}

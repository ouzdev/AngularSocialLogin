import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenResponseModel } from '../models/tokenResponseModel';
import { User } from '../models/user';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string ="https://localhost:44345/api/auth";
  constructor(private httpClient:HttpClient) {
  }
    register(data:any):Observable<UserResponseModel>{
      return this.httpClient.post<UserResponseModel>(this.apiUrl+"/register",data);
    }

    login(data:any):Observable<SingleResponseModel<User>>{
      return this.httpClient.post<SingleResponseModel<User>>(this.apiUrl+"/login",data);
    }

    registerSocial(data:any):Observable<TokenResponseModel>{
      return this.httpClient.post<TokenResponseModel>(this.apiUrl+"/provider-signin",data);
    }

    isAuthenticated() {
      if (localStorage.getItem('token')) {
        return true;
      } else {
        return false;
      }
    }

    checkIfUserMailExists(data:any): Observable<ResponseModel> {
      return this.httpClient.get<ResponseModel>(this.apiUrl+"/check-user?data="+data);
    }

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('fullName');
    }
  
}

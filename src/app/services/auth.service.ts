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
    register(data:any):Observable<UserResponseModel>{
      console.log(data);
      return this.httpClient.post<UserResponseModel>(this.apiUrl+"/register",data);
    }

    login(data:any):Observable<UserResponseModel>{
      return this.httpClient.post<UserResponseModel>(this.apiUrl+"/login",data);
    }

    isAuthenticated() {
      if (localStorage.getItem('token')) {
        return true;
      } else {
        return false;
      }
    }
    
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('fullName');
    }
  
}

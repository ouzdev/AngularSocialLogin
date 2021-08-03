import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:string ="https://localhost:44345/api/auth/authenticate";
  constructor(private httpClient:HttpClient) {
  }

    loginWebService(IdToken:any):Observable<UserResponseModel>{
     return  this.httpClient.post<UserResponseModel>(this.apiUrl,IdToken);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl:string ="https://localhost:44345/api/auth";
  constructor(private httpClient:HttpClient) {
  }

  getAll():Observable<ListResponseModel<User>>{
     return this.httpClient.get<ListResponseModel<User>>(this.apiUrl+"/users")
  }

}

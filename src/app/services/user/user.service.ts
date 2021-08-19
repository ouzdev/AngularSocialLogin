import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { User } from 'src/app/models/user/user';

import { UserResponseModel } from '../../models/user/userResponseModel';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl:string ="https://localhost:44345/api/users";
  constructor(private httpClient:HttpClient) {
  }

  getUser(email:any):Observable<SingleResponseModel<User>>{
     return this.httpClient.post<SingleResponseModel<User>>(this.apiUrl+"/get-user",email)
  }
}

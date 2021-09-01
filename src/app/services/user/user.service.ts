import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { User } from 'src/app/models/user/user';
import { UserDetailDto } from 'src/app/models/user/userDetailDto';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl:string ="https://localhost:44345/api/users";
  constructor(private httpClient:HttpClient) {
  }

  getUser(email:string):Observable<UserDetailDto>{
     return this.httpClient.post<UserDetailDto>(this.apiUrl+"/get-user",email)
  }
  setUser(data:any):Observable<SingleResponseModel<User>>{
    return this.httpClient.post<SingleResponseModel<User>>(this.apiUrl+"/set-user",data);
  }
}

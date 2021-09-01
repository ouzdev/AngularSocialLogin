import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { Skill } from 'src/app/models/skill/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl:string ="https://localhost:44345/api/skills";
  constructor(private httpClient:HttpClient) {
  }

  addSkill(data:any):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add-skill",data);
  }

  getUserSkills(id:number):Observable<ListResponseModel<Skill>>{
    return this.httpClient.post<ListResponseModel<Skill>>(this.apiUrl+"/get-skills",{userId:id});
  }

  deleteUserSkill(id:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/delete-skill",{id:id});
  }
  
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl:string ="https://localhost:44345/api/users";
  constructor(private httpClient:HttpClient) {
  }
  
}


import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  jwtDecode(token:string):Observable<string>{
    return jwt_decode(token)
  }
}

import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private authService: AuthService) { }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authService.checkIfUserMailExists(control.value).pipe(
        map(res => {
          return !res.success ? { usernameExists: true } : null;
        })
      )
    };

  }
}
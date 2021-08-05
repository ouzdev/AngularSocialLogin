import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { AuthenticateRequest } from 'src/app/models/authenticateRequest';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user: SocialUser | null;

idToken:AuthenticateRequest |null;
  constructor(private authService: SocialAuthService, private formBuilder: FormBuilder, private router: Router, private authWebService:AuthService,private userService:UserService) {
    this.user = null;
    
    this.idToken = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      localStorage.setItem('user',JSON.stringify(user));
      console.log(user); 
      ​this.user = user;
    });
  }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  signInWithGoogle(): void {
   
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: AuthenticateRequest) => 
    this.authWebService.loginWebService(x).subscribe((response)=>{
    if(!response.success){
      sessionStorage.setItem('registerUser',JSON.stringify(this.user));
      this.router.navigate(['/register'])
    }
    })
      );  }
  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((x: any) => 
    this.router.navigate(['/user'])
    );
  }
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit(): void {
    sessionStorage.clear();
  }
  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['/user']);

    }
  }
  register(){
    this.router.navigate(['/register'])
  }

}


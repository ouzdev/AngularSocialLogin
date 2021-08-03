import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() responseData: EventEmitter<any> = new EventEmitter();

  user: SocialUser | null;
  constructor(private authService: SocialAuthService, private formBuilder: FormBuilder, private router: Router) {
    this.user = null;
    router.getCurrentNavigation()?.extras.state
    console.log(history.state)
  }

  loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]] 
    });
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) =>
      this.router.navigate(['/user'])

    );
  }
  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((x: any) =>
      this.router.navigate(['/user'])

    );
  }
  register() {

  }
  login(){
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
  }

}

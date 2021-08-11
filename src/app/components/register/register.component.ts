import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { RegisterUser } from 'src/app/models/registerUser';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser = new RegisterUser();
  user: SocialUser;
  constructor(private authService: SocialAuthService, private formBuilder: FormBuilder, private router: Router, private apiAuthService: AuthService) {
  }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
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
  login() {
    this.router.navigate(['/'])
  }
  registerSocial() {
    if (this.registerForm.controls["password"].value != this.registerForm.controls["confirmPassword"].value) {
      Swal.fire("Hata","Şifreler Uyuşmuyor...","error")
      this.registerForm.controls["password"].setValue("");
      this.registerForm.controls["confirmPassword"].setValue("");
    } else {
      console.log(this.registerUser)
    
      this.registerUser.email = this.user.email;
      this.registerUser.firstName = this.user.firstName;
      this.registerUser.lastName = this.user.lastName;
      this.registerUser.providerId = this.user.id;
      this.registerUser.providerName = this.user.provider;
      this.registerUser.password = this.registerForm.controls['password'].value;

      this.apiAuthService.registerSocialUser(this.registerUser).subscribe((response) => {
        console.log(response);
      })
    }


  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('registerUser') || '{}');

    if (this.user?.response != undefined) {
      this.registerForm.patchValue({ name: this.user?.firstName })
      this.registerForm.controls['name'].disable();
      this.registerForm.patchValue({ surname: this.user?.lastName })
      this.registerForm.controls['surname'].disable();
      this.registerForm.patchValue({ email: this.user?.email })
      this.registerForm.controls['email'].disable();
    }


  };



}

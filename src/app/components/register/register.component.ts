import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';
import { ConfirmedValidator } from 'src/app/utilities/match-password.validator';
import { UserExistsService } from 'src/app/services/user/user-exists.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: SocialAuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private apiAuthService: AuthService,
    private toastr: ToastrService,
    private userexistsService:UserExistsService
    ) {
  }

  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: ConfirmedValidator('password', 'confirmPassword')
  });

  //Getters
  get f() {
    return this.registerForm.controls;
  }

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

      if(this.registerForm.valid){
        Swal.fire("Kayıt Yapılıyor");
        Swal.showLoading();
        let formData = Object.assign({}, this.registerForm.value);
        this.apiAuthService.register(formData).subscribe((response) => {
          Swal.close();
          this.toastr.success("Başarıyla Kayıt Olundu");
          this.router.navigate([''])

        },
          (err) => {
            Swal.close();

            this.toastr.error("Web Service Error");
          })
      }


  }
  login() {
    this.router.navigate(['/'])
  }
  registerSocial() {


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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateRequest } from 'src/app/models/authenticateRequest';
import { AuthService } from 'src/app/services/auth.service';
import { UserExistsService } from 'src/app/services/user-exists.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: SocialUser | null;
  loading = false;

  idToken: AuthenticateRequest | null;
  constructor(
    private authSocialService: SocialAuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
    ) {
    this.user = null;
    this.idToken = null;
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.email,Validators.required]],
    password: ['', Validators.required]
  });

  //   //Google İle Giriş Metodu
  signInWithGoogle(): void {
    Swal.fire('Giriş Yapılıyor...')
    Swal.showLoading()
    this.authSocialService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data: AuthenticateRequest) => {
        this.authService.registerSocial(data).subscribe((response)=>{
          Swal.close();
            if(response.success){
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('refreshToken', response.data.refreshToken);
              this.toastr.success("Giriş Başarıyla Yapıldı");
              this.router.navigate(['/user']);
            }else{
              this.router.navigate(['/register']);

            }
        })
    });
  }

  signOut(): void {
    this.authSocialService.signOut();
  }
  ngOnInit(): void {
    sessionStorage.clear();
  }

  login() {
    if (this.loginForm.valid) {
      Swal.fire("Giriş Yapılıyor");
      Swal.showLoading();
      let formData = Object.assign({}, this.loginForm.value);
      this.authService.login(formData).subscribe((response: any) => {
        Swal.close();
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.toastr.success("Giriş Başarıyla Yapıldı");
        this.router.navigate(['/user']);

      },
        (err) => {
          Swal.fire(err.error, undefined, "error")
        })
    }
  }
  register() {
    this.router.navigate(['/register'])
  }
}


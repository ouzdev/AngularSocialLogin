import { Component } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: SocialUser | null; 

  title = 'AngularSocialLoginExample';
  constructor(private authService: SocialAuthService) 
  { 
	this.user = null;
	this.authService.authState.subscribe((user: SocialUser) => {
	  console.log(user);
	  this.user = user;
	});
  }
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }
  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }
  signOut(): void {
    this.authService.signOut();
  }  
}

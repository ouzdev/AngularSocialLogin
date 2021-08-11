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

	}
  
}

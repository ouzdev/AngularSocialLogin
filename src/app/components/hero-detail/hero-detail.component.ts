import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  user: SocialUser | null;
  constructor(private authService:SocialAuthService,private router:Router,private webApiAuthService:AuthService,private userService:UserService) { 
    this.user=null;
    var result =localStorage.getItem('user');
   this.user = JSON.parse(result || '{}');

  }
  signOut(): void {
    localStorage.removeItem('user');
    this.authService.signOut();
    this.webApiAuthService.logout();
    this.router.navigate([''])

  }
  ngOnInit(): void {
    this.userService.getAll().subscribe(response => {
      console.log(response.data);
    })
  }

}

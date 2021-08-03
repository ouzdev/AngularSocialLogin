import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  user: SocialUser | null;
  constructor(private authService:SocialAuthService,private router:Router) { 
    this.user=null;
    var result =localStorage.getItem('user');
   this.user = JSON.parse(result || '{}');

  }
  signOut(): void {
    localStorage.removeItem('user');
    this.authService.signOut();
    this.router.navigate([''])

  }
  ngOnInit(): void {
  }

}

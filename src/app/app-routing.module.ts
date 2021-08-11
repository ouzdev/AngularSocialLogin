import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/authorize-guard.service';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'user',
    component:HeroDetailComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

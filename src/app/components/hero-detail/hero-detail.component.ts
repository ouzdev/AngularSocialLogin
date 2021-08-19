import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { JwtService } from 'src/app/services/auth/jwt.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  profileForm: FormGroup;
  user: User;


  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private getUser: JwtService) {
    const token = localStorage.getItem('token')
    const userEmail = JSON.stringify(this.getUser.jwtDecode(token || ""), ["email"]);
    this.userService.getUser(JSON.parse(userEmail)).subscribe(res => {
      this.user = res.data;
      this.profileForm.patchValue(this.user);
    });
  }

  //Getters
  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }
  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      tel: [''],
      profileAvatarUrl:[''],
      city: [''],
      county: [''],
      address: [''],
      educationInfo: [''],
      skills: this.formBuilder.array([])
    });
  }
  addSkill() {
    this.skills.push(
      this.formBuilder.group({
        skillName: [''],
        skillDescription: ['']
      })
    )
  }
  saveProfile() {
    console.log(this.profileForm.value);

  }
  deleteSkill(index: number) {
    this.skills.removeAt(index);

  }


  signOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    this.router.navigate([''])

  }

}

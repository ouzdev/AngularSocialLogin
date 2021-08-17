import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder) { 
    var result =localStorage.getItem('user');
  }

  //Getters
  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }
  ngOnInit(): void {
   
 
  this.profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    email:[''],
    tel:[''],
    city:[''],
    county:[''],
    address:[''],
    educationInfo:[''],
    skills:this.formBuilder.array([])
  });
}
  addSkill(){
    this.skills.push(
      this.formBuilder.group({
        skillName:[''],
        skillDescription:['']
      })
    )
  }
  saveProfile(){
    console.log(this.profileForm.value);

  }
  deleteSkill(index:number){
      this.skills.removeAt(index);
  }


  signOut(): void {
    localStorage.removeItem('user');
    this.router.navigate([''])

  }

}

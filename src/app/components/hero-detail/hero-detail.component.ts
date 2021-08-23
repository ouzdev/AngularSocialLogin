import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserDetailDto } from 'src/app/models/user/userDetailDto';
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
  userDetail:UserDetailDto;
  
  dataimage:any;

  @ViewChild('fileInput') fileInput: ElementRef;
 fileAttr = 'Choose File';


  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private getUser: JwtService) {
    const token = localStorage.getItem('token')
    const userEmail = JSON.stringify(this.getUser.jwtDecode(token || ""), ["email"]);
    this.userService.getUser(JSON.parse(userEmail)).subscribe(res => {
      this.user = res.data;
      this.profileForm.patchValue(this.user);
      this.dataimage = this.user.profileAvatarUrl ==null ? "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" : this.user.profileAvatarUrl; 
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
      profileAvatar:[''],
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
    this.userDetail = Object.assign({}, this.profileForm.value);
    this.userDetail.id = this.user.id;
    this.userService.setUser(this.userDetail).subscribe(res => {
      console.log(res);
    })

  }
  deleteSkill(index: number) {
    this.skills.removeAt(index);

  }


  signOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    this.router.navigate([''])

  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          this.dataimage = imgBase64Path;
          this.profileForm.patchValue({profileAvatar:this.dataimage})
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddSkill } from 'src/app/models/skill/addSkill';
import { Skill } from 'src/app/models/skill/skill';
import { User } from 'src/app/models/user/user';
import { UserDetailDto } from 'src/app/models/user/userDetailDto';
import { JwtService } from 'src/app/services/auth/jwt.service';
import { SkillService } from 'src/app/services/skill/skill.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  profileForm: FormGroup;
  user: User;
  userId: number;
  userDetail: UserDetailDto;
  dataimage: any;

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private skillService: SkillService,
    private toastr: ToastrService,
    private getUser: JwtService) {
    const token = localStorage.getItem('token')
    const userEmail = JSON.stringify(this.getUser.jwtDecode(token || ""), ["email"]);
    this.userService.getUser(JSON.parse(userEmail)).subscribe(res => {
      console.log(res.user);
      this.user = res.user;
      this.userId = res.user.id;
      this.profileForm.patchValue(this.user);
      this.dataimage = this.user.profileAvatarUrl == null ? "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" : this.user.profileAvatarUrl;
      for (let index = 0; index < res.skill.length; index++) {
        this.skills.push(
          this.formBuilder.group({
            skillId: [res.skill[index].id],
            skillName: [res.skill[index].skillName],
            skillDescription: [res.skill[index].skillDescription]
          })
        )

      }
    });
  }

  //Getters
  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }
  saveSkill(i: number) {
    const add = new AddSkill();
    add.UserId = this.user.id;
    add.SkillName = this.skills.value[i].skillName;
    add.SkillDescription = this.skills.value[i].skillDescription;

    this.skillService.addSkill(add).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
      }
    });

  }
  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      tel: [''],
      profileAvatarUrl: [''],
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
    this.user = Object.assign({ }, this.profileForm.value);
    this.user.id = this.userId;
    console.log(this.user);
    this.userService.setUser(this.user).subscribe(res => {
      this.toastr.success(res.message);
    })

  }
  deleteSkill(index: number) {
    const deleteSkill = new Skill();
    deleteSkill.id = this.skills.value[index].skillId;
    this.skillService.deleteUserSkill(deleteSkill.id).subscribe(res => {
      if (res.success) {
        this.skills.removeAt(index);
        this.toastr.success(res.message);
      } else {
        this.skills.removeAt(index);
      }
    });
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
          this.profileForm.patchValue({ profileAvatarUrl: this.dataimage })
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

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Profile } from './profile';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser:Profile = new Profile();
  editing:boolean = false;
  constructor(private commonService:CommonService) { 
    var grid = {};
    this.commonService.post("Profile/GetUserProfile",grid,(data)=> {
      this.currentUser = data.DATA.Rows[0];
    })
  }
  saveProfile() {
    console.log(this.currentUser);
    this.commonService.post("Profile/ChangeProfile",this.currentUser,(data)=> {
      console.log(data);
    });
  }
  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { LoginCredentials, Registration } from 'src/app/models/user.model';

@Component({
  selector:"app-login",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private acRoute:ActivatedRoute, private commonService:CommonService) { 
    this.acRoute.params.subscribe((params:any) => {
      if (params["tab"] != null) {
        if (params["tab"] > 0) this.tab = 1;
        else this.tab = 0;
      }
      if (params["tab"] != null && params["tab"] > 0 && params["regtype"] != null) {
        this.registrationType = params["regtype"];
      }
      

    })
  }
  @Input() tab:number = 0; // 0 შესვლა, 1 რეგისტრაცია
  @Input() registrationType:number = 0; //0 ფრილანსერი, 1 კომპანია, თუ არც 0 არც 1 მაშინ აირჩიოს რეგისტრაციის ტიპი
  
  userRegistration:Registration = new Registration();
  userLogin:LoginCredentials = new LoginCredentials();
  ngOnInit(): void {
  }
  login() {
    this.commonService.authenticate("Users/Authenticate",this.userLogin)    
  }
  register() {
    if (!this.userRegistration.acceptTermsCondition) {
      alert("გთხოვთ დაეთანხმეთ წესებს და პირობებს");
      return;
    }
    this.commonService.register("Users/Register",this.userRegistration);
  }

}


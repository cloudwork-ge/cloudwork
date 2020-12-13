import { Component, HostListener, Injectable, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getuid } from 'process';
import { Authuser } from 'src/app/common/authuser';
import { CommonService } from 'src/app/common/common.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @HostListener("window:scroll") onScroll(e:Event): void {
  //   // if (!this.transparentWhenTop) {
  //   //   return;
  //   // }

  //   // if (window.scrollY > 10) this.headerClass = "navbar-scrolled"
  //   // else this.headerClass = "";
  // }
  headerClass:string = "navbar-scrolled";
  private _showLogin: boolean = false;
  public get showLogin(): boolean {
    return this._showLogin;
  }
  public set showLogin(value: boolean) {
    if (value == false) this.regType = -1;
    this._showLogin = value;
  }
  loginTab:number = 0;
  regType:number = 0;
  authUser = Authuser;
  fullName:string = "";

  @Input() showSearchBar:boolean = true;

  showUserSection:boolean = false;
  showFooter:boolean = false;
  constructor(private router:Router, private commonService:CommonService) { 
    this.showSearchBar = false;
  }


  ngOnInit(): void {
    
    // console.log(Authuser.token);
    // console.log(Authuser.fullName);
    this.getUserInitials();
  }
  async getUserInitials() {
    if (Authuser.userLoggedIn()) {
      await Authuser.getUserData(); 
      this.fullName = Authuser.fullName.toString();
      // var split = fullname.split(" ");
      // this.fullNameInitials = split[0][0] + "." + split[1][0];
    }
  }
  logout() {
    Authuser.logout();
  }
  openDialog() {
    
  }
  clickOutside(elem) {
    // console.log(elem);
    if (this.showUserSection == true) this.showUserSection = false
  }
  GoHome() {
    location.href = "/";
  }
  navigate(url) {
    this.router.navigateByUrl(url);
  }
  showUserPanel() {
    setTimeout(() => {
      this.showUserSection = true;
    }, 50);
  }
}


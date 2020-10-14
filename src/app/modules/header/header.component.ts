import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @HostListener("window:scroll") onScroll(e:Event): void {
    if (window.scrollY > 10) this.headerClass = "navbar-scrolled"
    else this.headerClass = "";
  }
  headerClass:string = "";
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
  
  constructor(private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    
  }
  GoHome() {
    location.href = "/";
  }
  navigate(url) {
    this.router.navigateByUrl(url);
  }
  showLoginDialog() {

  }
}


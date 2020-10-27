import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router:Router) { 
    
  }
  showLogin:boolean = false;
  loginTab:number = 0;
  regType:number = 0;
  ngOnInit(): void {

  }
  navigate(url:string) {
    this.router.navigate([url]);
  }
}

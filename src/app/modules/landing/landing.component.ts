import { Component, ElementRef, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { 
    
  }
  showLogin:boolean = false;
  loginTab:number = 0;
  regType:number = 0;
  ngOnInit(): void {

  }
}

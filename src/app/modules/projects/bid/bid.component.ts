import { Component, OnInit } from '@angular/core';
import { Authuser } from 'src/app/common/authuser';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    if (!Authuser.userLoggedIn()) location.href = "/Login"
  }

}

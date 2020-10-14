import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector:"app-login",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private acRoute:ActivatedRoute) { 
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

  ngOnInit(): void {
  }

}


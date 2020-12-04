import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getuid } from 'process';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  templateUrl: './auth-test1.component.html',
  styleUrls: ['./auth-test1.component.scss']
})
export class AuthTest1Component implements OnInit {

  users = new Observable(observer => {
    var i = 0;
      for(var x = 0; x<10; x++) {
        i++;
        observer.next(i);
      }
  })
  subj = new BehaviorSubject("");
  constructor(private http:HttpClient) { 
    
  }
  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  ngOnInit(): void {
    // this.getUsers().subscribe(x=> {
    //   console.log(x);
    // });
    // this.getUsers().subscribe(x=> {
    //   console.log(x);
    // });
    this.subj.next("Aaa")
    this.subj.subscribe(x=> {
      console.log(x);
    })
    this.subj.next("Users Subscribe is starting...");
    this.users.subscribe(user => {
      console.log(user);
      this.subj.next("Users subscribe is in progress :)")
    });
    this.subj.next("Done1");
    this.subj.next("Done2");
    this.subj.next("Done3");

  }

}

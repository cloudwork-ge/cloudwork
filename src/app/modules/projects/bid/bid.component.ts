import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Authuser } from 'src/app/common/authuser';
import { CommonService } from 'src/app/common/common.service';
import { Bid } from './bid';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  constructor(private commonService:CommonService) { 

  }
  @Input() projectID:number;
  @Input() startDate:Date;
  @Input() endDate:Date;
  @Input() budget:number;
  bid:Bid = new Bid();
  @Output() onSuccess:EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    if (!Authuser.userLoggedIn()) location.href = "/Login"
    this.bid.projectID = this.projectID;
    this.bid.budget = this.budget;
    this.bid.deadlineDays = this.SubtractDates(new Date(this.endDate),new Date(this.startDate));
  }
  SubtractDates(date1:Date, date2:Date) {
    return (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
  }
  saveBid() {
    if (!this.bid.acceptTermsCondition) {
      alert("გთხოვთ დაეთანხმოთ კონტრაქტს");
      return;
    }
    this.commonService.post("Project/BidProject",this.bid,(data) => {
      console.log(data);
      this.onSuccess.emit();
      alert(data.STATUS.TEXT);
    })
  }

}

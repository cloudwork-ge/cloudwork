import { TemplateParseResult } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(x=> {
      if (x["id"] != null && x["id"] >= 0) {
        if (termsType[x["id"]] != null)
        this.termsType = x["id"];
      }
    })
   }
  @Input() termsType: termsType = termsType.Freelancer;
  ngOnInit(): void {
  }

}
export enum termsType {
  Freelancer,
  Business,
  Nardoba
}

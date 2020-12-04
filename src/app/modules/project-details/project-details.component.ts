import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { url } from 'inspector';
import { Authuser } from 'src/app/common/authuser';
import { CommonService } from 'src/app/common/common.service';
import { Project } from '../add-project/project.model';
import { Bid } from '../projects/bid/bid';

@Component({
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId:number = 0;
  project:Project = new Project();
  bids:Bid[] = [];
  
  constructor(private commonService:CommonService, private route:ActivatedRoute) {
    
    this.route.params.subscribe(p=> {
      this.projectId = p["id"] || 0;
    });
    
    if (this.projectId <= 0) return;
    var proj = new Project();
    proj.ID = Number(this.projectId);
    this.commonService.post("Project/GetProjectDetails",proj, data => {
      this.project = <Project>data.DATA;
      if (this.project == null || this.project.ID == null) {
        alert("პროექტი ვერ მოიძებნა");
        location.href = "/";
      }
    },null,true);
    this.commonService.post("Project/GetProjectBids",{projectId:this.projectId}, data => {
      this.bids = <Bid[]>data.DATA.Rows;
    })
   }
  
  ngOnInit(): void {
    console.log(Authuser.ID);
    Authuser.getUserData((data) => {
      console.log(data);
    })
  }
  acceptBid(ID:number, userID:number) {
    if (!confirm("გსურთ დაეთანხმოთ ამ შეთავაზებას?")) return;
    var bid = new Bid();
    bid.ID = ID;
    this.commonService.post("Project/AcceptBid",bid, data => {
      alert(data.STATUS.TEXT);
      location.href = "/Profile/" + userID;
    })
  }
  ProjectDone() {
    if (!confirm("ნამდვილად გსურთ პროექტის დასრულება?")) return;
    var method = this.projectMine() ? "ProjectDoneOwner" : "ProjectDoneFreelancer"
    this.commonService.post("Project/" + method,this.project, data => {
      alert(data.STATUS.TEXT);
      location.reload();
    })
  }
  projectMine() {
    if (Authuser.ID == this.project.userId) return true;
    return false;
  }
  canDone() {
    if (this.project.status != 1) return false;

    if (this.projectMine()) {
      if (this.project.doneRequested == 1) return true;
    }
    else return true;
  }

}

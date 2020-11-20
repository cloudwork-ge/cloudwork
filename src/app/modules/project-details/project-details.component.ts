import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      this.project = <Project>data.DATA.Rows[0];
      console.log(this.project);
    })
    this.commonService.post("Project/GetProjectBids",{projectId:this.projectId}, data => {
      this.bids = <Bid[]>data.DATA.Rows;
      console.log(this.bids);
    })
   }
   
  ngOnInit(): void {
    console.log(Authuser.ID);
    Authuser.getUserData((data) => {
      console.log(data);
    })
  }
  acceptBid(ID:number) {  

  }

}

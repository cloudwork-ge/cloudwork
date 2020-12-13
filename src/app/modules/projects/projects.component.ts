import { Component, OnInit, ViewChild } from '@angular/core';
import { Authuser } from 'src/app/common/authuser';
import { CommonService } from 'src/app/common/common.service';
import { GridService } from 'src/app/services/grid.service';
import { Project } from '../add-project/project.model';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private commonService:CommonService, private gridService:GridService) { 

  }

  projects:Project[] = [];
  showBidPopup:boolean = false;
  @ViewChild("header", {static:true}) header:HeaderComponent;
  ngOnInit(): void {
    // this.commonService.post("Project/GetProjects", {},(data)=> {
    //   console.log(data);
    // })
    if (Authuser.token.length == 0)
    this.header.showFooter = true;

    this.gridService.webMethod = "Project/GetProjects";
    this.commonService.requestLoader(true);
    this.gridService.GetData().subscribe(data => {
      this.commonService.requestLoader(false);
      console.log(data);
      this.projects = data["rootElement"].DATA.Rows;
    },() => {this.commonService.requestLoader(false)})
  }
  expanded:boolean = false;
  selectedProject:Project = new Project();
  trackByFn(index, item) {
    return index;
  }
  showBid(project:Project) {
    if (project != null && project.ID > 0) {
      this.selectedProject = project;
      this.showBidPopup = true;
    }
    else {
      this.selectedProject = new Project();
      this.showBidPopup = false;
    }
  }
  onSuccessBid() {
    this.selectedProject = new Project();
    this.showBidPopup = false;
  }
}

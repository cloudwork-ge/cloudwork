import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { CommonService } from 'src/app/common/common.service';
import { GridService } from 'src/app/services/grid.service';
import { Project } from '../add-project/project.model';
import { Profile } from './profile';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser:Profile = new Profile();
  editing:boolean = false;
  myProjects:Project[] = [];
  constructor(private commonService:CommonService, private gridService:GridService, private router:Router) { 
    var grid = {};
    this.commonService.post("Profile/GetUserProfile",grid,(data)=> {
      this.currentUser = data.DATA.Rows[0];
    })
  }
  saveProfile() {
    console.log(this.currentUser);
    this.commonService.post("Profile/ChangeProfile",this.currentUser,(data)=> {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.gridService.webMethod = "Project/GetMyProjects";
    this.gridService.setMaximumRows(3);
    this.commonService.requestLoader(true);
    this.gridService.GetData().subscribe(data => {
      this.commonService.requestLoader(false);
      this.myProjects = data["rootElement"].DATA.Rows;
    },() => {this.commonService.requestLoader(false)})
  }
  trackByFn(index,item) {
    return index;
  }
  currentPage:number = 1;
  showLoadMore:boolean = true;
  loadMore() {
    this.gridService.changePage(this.currentPage + 1);
    this.commonService.requestLoader(true);
    this.gridService.GetData().subscribe(data => {
      this.commonService.requestLoader(false);
      var newData = <Project[]>data["rootElement"].DATA.Rows;
      if (newData.length == 0) 
      {
       this.showLoadMore = false;
       return; 
      }
      newData.forEach(element => {
        this.myProjects.push(element);
      })
      this.currentPage += 1;
    })
  }
  openProjectDetails(project:Project) {
   this.router.navigate(["/ProjectDetails",project.ID])
  }
}

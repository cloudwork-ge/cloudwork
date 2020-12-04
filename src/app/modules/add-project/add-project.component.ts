import { Component, OnInit } from '@angular/core';
import { Authuser } from 'src/app/common/authuser';
import { CommonService } from 'src/app/common/common.service';
import { UserTypes } from 'src/app/models/user.model';
import { Project } from './project.model';

@Component({
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  categories:ICategories[] = []; //[{label:"პროგრამირება", value:1}, {label:"ბუღალტერია", value:2}, {label:"ელექტროობა", value:3}, {label:"ინჟინერია", value:4}];
  newProject:Project = new Project();
  minDate:Date = new Date();
  
  public get selectedCategory(): string {
    var x = this.categories.filter(x=>x.value == this.newProject.projectCategory)[0];
    if (x)
    return x.label;
    else "";
  }
  public get selectedType():string {
    if (this.newProject.projectType == 1) return "ერთჯერადი";
    else if (this.newProject.projectType == 2) return "ყოველთვიური";
    else return "";
  }

  showCommonInfo:boolean = true;
  showProjectInfo:boolean = false;
  ngOnInit(): void {
    if (Authuser.userType != UserTypes.Organization) {
      location.href = "/";
      return;
    } // მხოლოდ ბიზნესს შეუძლია ამ გვერდზე შემოსვლა

    this.commonService.post("Project/GetCategories",{},(data) => {
      console.log(data);
      this.categories = <ICategories[]>data.DATA["Rows"];
      // this.newProject.category = -1;
    })
    // setInterval(() => {
    //   console.log(this.selectedCategory)
    // }, 2000);
  }
  tryShowingProjectDetails() {
    if (this.newProject.projectCategory > 0 && this.newProject.projectType > 0)
    {
      this.showCommonInfo = false;
      this.showProjectInfo = true;
    }
  }
  getMonths() {
    var months = this.newProject.endDate.getMonth() - this.newProject.startDate.getMonth();
    if (months > 0) 
    return months + " თვე";

    return "";
  }
  saveProject() {
    console.log(this.newProject);

    this.commonService.post("Project/AddProject",this.newProject,(data) => {
      alert(data.STATUS.TEXT);
      location.href = "/";
      // this.newProject.category = -1;
    },(err)=> {
      var error = err.error;
      if (error.status == 400) {
        let validationErrorDictionary = error.errors;
        for (var fieldName in validationErrorDictionary) {
          if (validationErrorDictionary.hasOwnProperty(fieldName)) {
            alert(validationErrorDictionary[fieldName]);
            break;
          }
        }
      }
    })
  }
}
interface ICategories {
  label:string,
  value:number
}

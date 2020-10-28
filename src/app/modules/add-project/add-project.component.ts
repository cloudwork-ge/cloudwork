import { Component, OnInit } from '@angular/core';
import { Authuser } from 'src/app/common/authuser';
import { UserTypes } from 'src/app/models/user.model';
import { Project } from './project.model';

@Component({
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor() { }
  categories:ICategories[] = [{label:"პროგრამირება", value:1}, {label:"ბუღალტერია", value:2}, {label:"ელექტროობა", value:3}, {label:"ინჟინერია", value:4}];
  newProject:Project = new Project();
  minDate:Date = new Date();
  
  public get selectedCategory(): string {
    var x = this.categories.filter(x=>x.value == this.newProject.category)[0];
    if (x)
    return x.label;
    else "";
  }

  showCommonInfo:boolean = true;
  showProjectInfo:boolean = false;
  ngOnInit(): void {
    if (Authuser.userType != UserTypes.Organization) // მხოლოდ ბიზნესს შეუძლია ამ გვერდზე შემოსვლა
    location.href = "/";
    setInterval(() => {
      console.log(this.selectedCategory)
    }, 2000);
  }
  tryShowingProjectDetails() {
    if (this.newProject.category > 0 && this.newProject.type)
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

}
interface ICategories {
  label:string,
  value:number
}

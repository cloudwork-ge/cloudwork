import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule
  ]
})
export class ProjectsModule { }

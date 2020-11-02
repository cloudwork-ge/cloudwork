import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ClickStopPropagationDirective } from 'src/app/directives/click-stop-propagation.directive';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProjectsModule { }

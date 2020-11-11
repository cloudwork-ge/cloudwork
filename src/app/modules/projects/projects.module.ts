import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { HeaderModule } from '../header/header.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ClickStopPropagationDirective } from 'src/app/directives/click-stop-propagation.directive';
import { GeoDatePipe } from 'src/app/pipes/geodate.pipe';
import { PopupModule } from 'src/app/components/popup/popup.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BidComponent } from './bid/bid.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [ProjectsComponent, GeoDatePipe, BidComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    MatButtonModule,
    PopupModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class ProjectsModule { }

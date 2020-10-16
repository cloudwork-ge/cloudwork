import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    HeaderModule
  ]
})
export class LandingModule { }

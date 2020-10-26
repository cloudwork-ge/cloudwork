import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PLabelComponent } from 'src/app/components/p-label/p-label.component';
import { PLabelModule } from 'src/app/components/p-label/p-label.module';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    PLabelModule,
    HeaderModule,
    FormsModule
  ]
})
export class ProfileModule { }

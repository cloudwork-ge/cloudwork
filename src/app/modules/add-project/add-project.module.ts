import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AddProjectModule { }

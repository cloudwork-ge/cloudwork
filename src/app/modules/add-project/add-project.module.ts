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
import { MatSelectModule } from '@angular/material/select';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { UserDateAdapter } from 'src/app/common/user-date-adapter/user-date-adapter.component';

import {MatExpansionModule} from '@angular/material/expansion';


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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [{ provide: DateAdapter, useClass: UserDateAdapter },]
})
export class AddProjectModule { }

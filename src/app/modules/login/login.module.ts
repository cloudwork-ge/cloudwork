import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonService } from 'src/app/common/common.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { PopupModule } from 'src/app/components/popup/popup.module';
import { TermsConditionModule } from '../terms-condition/terms-condition.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    PopupModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }

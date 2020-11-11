import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionComponent } from './terms-condition.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [TermsConditionComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [TermsConditionComponent]
})
export class TermsConditionModule { }

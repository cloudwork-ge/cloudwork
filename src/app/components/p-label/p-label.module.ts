import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLabelComponent } from './p-label.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PLabelComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PLabelComponent
  ]
})
export class PLabelModule { }

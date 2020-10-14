import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent, PopupContentComponent, PopupHeaderComponent } from './popup.component';
import { ClickStopPropagationDirective } from 'src/app/directives/click-stop-propagation.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PopupComponent,PopupHeaderComponent,PopupContentComponent, ClickStopPropagationDirective],
  imports: [
    CommonModule
  ],
  exports: [
    PopupComponent,
    FormsModule,
    PopupHeaderComponent,
    PopupContentComponent
  ]
})
export class PopupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModule } from '../login/login.module';
import { LoginComponent } from '../login/login.component';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { PopupModule } from 'src/app/components/popup/popup.module';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { ClickOutsideDirective } from 'src/app/directives/click-outside-element.directive';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [HeaderComponent,SearchbarComponent, ClickOutsideDirective],
  imports: [
    CommonModule,
    MatDialogModule,
    PopupModule,
    LoginModule,
    MatIconModule
  ],
  exports: [HeaderComponent, MatIconModule]
})
export class HeaderModule { }

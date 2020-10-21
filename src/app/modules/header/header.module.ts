import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModule } from '../login/login.module';
import { LoginComponent } from '../login/login.component';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { PopupModule } from 'src/app/components/popup/popup.module';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';



@NgModule({
  declarations: [HeaderComponent,SearchbarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    PopupModule,
    LoginModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthTest1Component } from './modules/auth-test1/auth-test1.component';
import { LoginComponent } from './modules/login/login.component';
import { AccessGuard } from './AccessGuard/access.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './modules/landing/landing.component';
import { HeaderComponent } from './modules/header/header.component';
import { LoginModule } from './modules/login/login.module';
import {MatCardModule} from '@angular/material/card';
import { HeaderModule } from './modules/header/header.module';
import { PopupModule } from './components/popup/popup.module';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';


@NgModule({
  declarations: [
    AppComponent,
    AuthTest1Component,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HeaderModule,
    PopupModule
  ],
  providers: [AccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

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
import { LandingModule } from './modules/landing/landing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { setAppInjector } from './common/appinjector';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileModule } from './modules/profile/profile.module';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { AddProjectModule } from './modules/add-project/add-project.module';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ProjectsModule } from './modules/projects/projects.module';
import { GeoDatePipe } from './pipes/geodate.pipe';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { ProjectDetailsModule } from './modules/project-details/project-details.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MessagesComponent } from './modules/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthTest1Component,
    LoaderComponent,
    ModalComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HeaderModule,
    PopupModule,
    LandingModule,
    FormsModule,
    HttpClientModule,
    ProfileModule,
    AddProjectModule,
    ProjectsModule,
    ProjectDetailsModule
  ],
  providers: [{provide:AccessGuard}, {provide:ClickStopPropagationDirective},{provide:MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector:Injector) {
    setAppInjector(injector);
  }
}

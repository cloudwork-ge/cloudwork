import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesComponent } from "./messages.component";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "../header/header.module";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { LoaderComponent } from "src/app/components/loader/loader.component";

@NgModule({
  declarations: [MessagesComponent, LoaderComponent],
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
  ],
})
export class MessagesModule {}

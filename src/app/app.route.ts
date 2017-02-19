import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {ShowTaskComponent} from "./Show Task/show.component";
import {RouterModule} from "@angular/router";
import {routes} from "./route";
import {CreateTaskComponent} from "./Create Task/create.component";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(routes),FormsModule,HttpModule],
  declarations: [ AppComponent , ShowTaskComponent,CreateTaskComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

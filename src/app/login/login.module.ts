import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {routes} from './login.routes';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes), ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }

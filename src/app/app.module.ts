import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {HomeComponent} from './home/home.component';
import {YoutubeComponent} from './youtube/youtube.component';
import {RouterModule} from '@angular/router';
import {HomeService} from './home/home.service';
import {route} from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule, ReactiveFormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})


export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { CrewComponent } from './crew/crew.component';
import { TalkComponent } from './talk/talk.component';
import { TeamsComponent } from './teams/teams.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistComponent,
    HomeComponent,
    GamesComponent,
    CrewComponent,
    TalkComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule, PaginationModule } from 'ngx-bootstrap';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { AuthService } from './_services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesComponent } from './games/games.component';
import { MessageComponent } from './message/message.component';
import { TeamsComponent } from './teams/teams.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { MystatsComponent } from './mystats/mystats.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailComponent } from './locations/location-detail/location-detail.component';
import { LocationListResolver } from './_resolvers/location-list.resolver';
import { LocationDetailResolver } from './_resolvers/location-detail.resolver';
import { LocationService } from './_services/location.service';
import { LocationCardComponent } from './locations/location-card/location-card.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserService } from './_services/user.service';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';


export function tokenGetter() {
   return localStorage.getItem('token');
}


// we convert a plain typescript class to module from angular point of view
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegistComponent,
      NavbarComponent,
      GamesComponent,
      MessageComponent,
      TeamsComponent,
      LocationListComponent,
      LocationDetailComponent,
      LocationCardComponent,
      MystatsComponent,
      HomeComponent,
      UserListComponent,
      UserDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      ShowHidePasswordModule,
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      LocationListResolver,
      LocationDetailResolver,
      LocationService,
      UserListResolver,
      UserService,
      UserDetailResolver,
      MessagesResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

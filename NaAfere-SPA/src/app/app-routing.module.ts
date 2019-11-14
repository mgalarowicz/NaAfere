import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { MessageComponent } from './message/message.component';
import { GamesComponent } from './games/games.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { MystatsComponent } from './mystats/mystats.component';
import { HomeComponent } from './home/home.component';
import { LocationDetailComponent } from './locations/location-detail/location-detail.component';
import { LocationDetailResolver } from './_resolvers/location-detail.resolver';
import { LocationListResolver } from './_resolvers/location-list.resolver';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'games', component: GamesComponent},
      {path: 'message', component: MessageComponent},
      {path: 'teams', component: TeamsComponent},
      {path: 'locations', component: LocationListComponent, resolve: {locations: LocationListResolver}},
      {path: 'locations/:id', component: LocationDetailComponent, resolve: {location: LocationDetailResolver}},
      {path: 'users', component: UserListComponent, resolve: {users: UserListResolver}},
      {path: 'users/:id', component: UserDetailComponent, resolve: {user: UserDetailResolver}},
      {path: 'mystats', component: MystatsComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

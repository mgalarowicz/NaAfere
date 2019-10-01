import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { MessageComponent } from './message/message.component';
import { GamesComponent } from './games/games.component';
import { LocationComponent } from './location/location.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { MystatsComponent } from './mystats/mystats.component';
import { HomeComponent } from './home/home.component';

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
      {path: 'location', component: LocationComponent},
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

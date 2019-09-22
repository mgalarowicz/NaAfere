import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { MessageComponent } from './message/message.component';
import { GamesComponent } from './games/games.component';
import { LocationComponent } from './location/location.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'games', component: GamesComponent},
      {path: 'message', component: MessageComponent},
      {path: 'teams', component: TeamsComponent},
      {path: 'location', component: LocationComponent}
    ]
  },
  {path: 'register', component: RegistComponent},
  {path: '**', redirectTo: 'games', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

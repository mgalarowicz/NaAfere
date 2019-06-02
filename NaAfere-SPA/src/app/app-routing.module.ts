import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TalkComponent } from './talk/talk.component';
import { CrewComponent } from './crew/crew.component';
import { GamesComponent } from './games/games.component';
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
      {path: 'home', component: HomeComponent},
      {path: 'games', component: GamesComponent},
      {path: 'crew', component: CrewComponent},
      {path: 'talk', component: TalkComponent},
      {path: 'teams', component: TeamsComponent}
    ]
  },
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'games', component: GamesComponent, canActivate: [AuthGuard]},
  // {path: 'crew', component: CrewComponent, canActivate: [AuthGuard]},
  // {path: 'talk', component: TalkComponent, canActivate: [AuthGuard]},
  // {path: 'teams', component: TeamsComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegistComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

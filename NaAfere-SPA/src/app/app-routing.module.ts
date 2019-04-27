import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TalkComponent } from './talk/talk.component';
import { CrewComponent } from './crew/crew.component';
import { GamesComponent } from './games/games.component';
import { RegistComponent } from './regist/regist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'crew', component: CrewComponent},
  {path: 'talk', component: TalkComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'register', component: RegistComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

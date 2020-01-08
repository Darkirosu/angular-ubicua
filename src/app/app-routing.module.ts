import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { LoginView } from './views/login/login.view';
import { SeatuserView } from './views/seatuser/seatuser.view';
import { InformationView } from './views/information/information.view';
import { StatisticsView } from './views/statistics/statistics.view';

const routes: Routes = [
  { path : '' , redirectTo : 'home', pathMatch : 'full'},
  {path: 'home', component:HomeView},
  {path: 'login', component:LoginView},
  {path: 'users', component:SeatuserView},
  {path: 'course/:id', component:InformationView},
  {path: 'information/:id', component:InformationView},
  {path: 'stadistics/:id', component:StatisticsView},
];

@NgModule({
  imports: [
    RouterModule.
    forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

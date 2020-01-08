import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeView } from './views/home/home.view';
import { LoginView } from './views/login/login.view';
import { HomeContainer } from './containers/home/home.container';
import { MenuContainer } from './containers/menu/menu.container';
import { LoginContainer } from './containers/login/login.container';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { MenulogueView } from './views/menulogue/menulogue.view';
import { GlobalService } from './services/global/global.service';
import { ControlView as ControlView } from './views/control/control.view';
import { SeatContainer } from './containers/seat/seat.container';
import { SeatListComponent } from './components/seat-list/seat-list.component';
import { SeatCardComponent } from './components/seat-card/seat-card.component';
import { SeatuserView } from './views/seatuser/seatuser.view';
import { InformationView } from './views/information/information.view';
import { InformationContainer } from './containers/information/information.container';
import { InformationComponent } from './components/information/information.component';
import { StatisticsView } from './views/statistics/statistics.view';
import { StatisticsContainer } from './containers/statistics/statistics.container';
import { StatisticsComponent } from './components/statistics/statistics.component';


 

@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    LoginView,
    HomeContainer,
    MenuContainer,
    LoginContainer,
    LoginComponent,
    MenulogueView,
    ControlView,
    SeatContainer,
    SeatListComponent,
    SeatCardComponent,
    SeatuserView,
    InformationView,
    InformationContainer,
    InformationComponent,
    StatisticsView,
    StatisticsContainer,
    StatisticsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GlobalService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

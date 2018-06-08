import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule ,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { SlaserviceService } from 'src/app/slaservice.service';
import { LayerserviceService } from 'src/app/layerservice.service';
import { appRoutes } from 'src/app/router';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from 'src/app/Shared/userservice.service';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

// const routers:Routes =[
//   {path:"",component:LoginComponent},
//   {path:"Dashboard/Tickets",component:TicketsComponent},
//   {path:"Dashboard",component:DashboardComponent},
//   {path:"Dashboard/profile",component:ProfileComponent},


// ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    TicketsComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,HttpClientModule,ReactiveFormsModule
  ],
  entryComponents: [AppComponent],
  providers: [SlaserviceService,LayerserviceService,UserserviceService,TechnitianserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

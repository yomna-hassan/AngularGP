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

<<<<<<< HEAD

=======
<<<<<<< HEAD
 //const routers:Routes =[
  // {path:"",component:LoginComponent},
  // {path:"Tickets",component:TicketsComponent},
  // {path:"Dashboard",component:DashboardComponent},
 // {path:"profile",component:ProfileComponent},
=======
<<<<<<< HEAD
>>>>>>> 11a5767f50746f952e8c8d1bb3fd65d17764bf77
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ProfileComponent } from 'src/app/profile/profile.component';

// const routers:Routes =[
//   {path:"",component:LoginComponent},
//   {path:"Dashboard/Tickets",component:TicketsComponent},
//   {path:"Dashboard",component:DashboardComponent},
//   {path:"Dashboard/profile",component:ProfileComponent},
<<<<<<< HEAD

=======
>>>>>>> 74012ea1271827118c5bb43cca8e404956dd260a
>>>>>>> db56d6fd617e2ae019b313872d935f0313b884eb
>>>>>>> 11a5767f50746f952e8c8d1bb3fd65d17764bf77

//import { ProfileComponent } from './profile/profile.component';

<<<<<<< HEAD
 //]
=======


 //const routers:Routes =[
//   {path:"",component:SidebarComponent},
 // {path:"Tickets",component:TicketsComponent}
//   {path:"Dashboard",component:DashboardComponent},
//   {path:"login",component:LoginComponent},

 //]
// const routers:Routes =[
//   {path:"",component:LoginComponent},
//   {path:"Tickets",component:TicketsComponent},
//   {path:"Dashboard",component:DashboardComponent},
//   {path:"profile",component:ProfileComponent},


// ]

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// ]
>>>>>>> 74012ea1271827118c5bb43cca8e404956dd260a
>>>>>>> db56d6fd617e2ae019b313872d935f0313b884eb
>>>>>>> 11a5767f50746f952e8c8d1bb3fd65d17764bf77

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
  providers: [SlaserviceService,LayerserviceService,UserserviceService,TechnitianserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

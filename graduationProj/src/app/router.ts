
import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
import { RegisterComponent } from './register/register.component';
import { SlaComponent } from './sla/sla.component';
import { Register2Component } from './register2/register2.component';
import { ProfileComponent } from "src/app/profile/profile.component";
import { AuthGuard } from "src/app/auth/auth.guard";
import { ProfilDataComponent } from './profil-data/profil-data.component';


export const appRoutes:Routes=[
    {path:"",component:LoginComponent},
    {path:"Dashboard/profile",component:ProfileComponent},
   // {
     {path:"Tickets",component:TicketsComponent},
     {path:"dashboard",component:DashboardComponent},
     {path:"login",component:LoginComponent},
     {path:"",component:LoginComponent},
     {path:"profile",component:ProfileComponent},
     {path:"sla",component:SlaComponent},
     {path:"register",component:RegisterComponent},
     {path:"register2",component:Register2Component},
     {path:"profiledata",component:ProfilDataComponent}
];
    
     //   path:'', redirectTo:'/login',pathMatch:'full'





// export const appRoutes:Routes=[
//    {path:"",component:LoginComponent},
//     {path:"Tickets",component:TicketsComponent},
//     {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
//     {path:"login",component:LoginComponent},
//     {path:"profile",component:ProfileComponent}
   // {path:'',component:TicketsComponent},
   // {
    //   path:'', redirectTo:'/login',pathMatch:'full'

    //}
//];

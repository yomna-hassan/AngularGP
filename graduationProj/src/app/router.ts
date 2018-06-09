
import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { ProfileComponent } from "src/app/profile/profile.component";

export const appRoutes:Routes=[
    {path:"",component:LoginComponent},
     {path:"Tickets",component:TicketsComponent},
     {path:"dashboard",component:DashboardComponent},
     {path:"login",component:LoginComponent},
     {path:"",component:LoginComponent},
     {path:"profile",component:ProfileComponent}
    
     //   path:'', redirectTo:'/login',pathMatch:'full'
=======
<<<<<<< HEAD
>>>>>>> 11a5767f50746f952e8c8d1bb3fd65d17764bf77
import { AuthGuard } from "src/app/auth/auth.guard";
import { ProfileComponent } from "src/app/profile/profile.component";



export const appRoutes:Routes=[
   {path:"",component:LoginComponent},
    {path:"Tickets",component:TicketsComponent},
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent},
    {path:"profile",component:ProfileComponent}
   // {path:'',component:TicketsComponent},
   // {
    //   path:'', redirectTo:'/login',pathMatch:'full'
>>>>>>> db56d6fd617e2ae019b313872d935f0313b884eb
    //}
];

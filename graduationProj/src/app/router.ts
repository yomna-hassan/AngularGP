
import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
<<<<<<< HEAD
=======

>>>>>>> c776d8c7c0c6d278d61a9e82ce0eabcaa56807ca
import { ProfileComponent } from "src/app/profile/profile.component";
import { AuthGuard } from "src/app/auth/auth.guard";

export const appRoutes:Routes=[
    {path:"",component:LoginComponent},
    {path:"Dashboard/profile",component:ProfileComponent},
   // {
     {path:"Tickets",component:TicketsComponent},
     {path:"dashboard",component:DashboardComponent},
     {path:"login",component:LoginComponent},
     {path:"",component:LoginComponent},
     {path:"profile",component:ProfileComponent}
];
    
     //   path:'', redirectTo:'/login',pathMatch:'full'





<<<<<<< HEAD
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
=======
   // {path:'',component:TicketsComponent},
   // {
    //   path:'', redirectTo:'/login',pathMatch:'full'
    //}

>>>>>>> c776d8c7c0c6d278d61a9e82ce0eabcaa56807ca


import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
<<<<<<< HEAD
import { ProfileComponent } from "src/app/profile/profile.component";
import { AuthGuard } from "src/app/auth/auth.guard";
=======

import { ProfileComponent } from "src/app/profile/profile.component";
import { AuthGuard } from "src/app/auth/auth.guard";

>>>>>>> 4e4548aba5136026c87ab88737339666d25b34b0
export const appRoutes:Routes=[
    {path:"",component:LoginComponent},
     {path:"Tickets",component:TicketsComponent},
     {path:"dashboard",component:DashboardComponent},
     {path:"login",component:LoginComponent},
     {path:"",component:LoginComponent},
<<<<<<< HEAD
     {path:"profile",component:ProfileComponent}]
    
     //   path:'', redirectTo:'/login',pathMatch:'full'
=======
     {path:"profile",component:ProfileComponent}
];
    
     //   path:'', redirectTo:'/login',pathMatch:'full'





>>>>>>> 4e4548aba5136026c87ab88737339666d25b34b0
   // {path:'',component:TicketsComponent},
   // {
    //   path:'', redirectTo:'/login',pathMatch:'full'
    //}
<<<<<<< HEAD
=======

>>>>>>> 4e4548aba5136026c87ab88737339666d25b34b0

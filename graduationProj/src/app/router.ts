
import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
<<<<<<< HEAD
import { AuthGuard } from "src/app/auth/auth.guard";
import { ProfileComponent } from "src/app/profile/profile.component";
=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> 74012ea1271827118c5bb43cca8e404956dd260a

export const appRoutes:Routes=[
   {path:"",component:LoginComponent},
    {path:"Tickets",component:TicketsComponent},
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent},
    {path:"profile",component:ProfileComponent}
   // {path:'',component:TicketsComponent},
   // {
    //   path:'', redirectTo:'/login',pathMatch:'full'
    //}
];

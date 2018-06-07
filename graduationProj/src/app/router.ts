
import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
import { AuthGuard } from "src/app/auth/auth.guard";

export const appRoutes:Routes=[
   // {path:"",component:LoginComponent},
    {path:"Tickets",component:TicketsComponent},
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent},
    {path:'',component:TicketsComponent},
   // {
    //   path:'', redirectTo:'/login',pathMatch:'full'
    //}
];

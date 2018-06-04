
import { Routes } from "@angular/router/src/config";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";
import { TicketsComponent } from "src/app/tickets/tickets.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";

export const appRoutes:Routes=[
   // {path:"",component:LoginComponent},
    {path:"Tickets",component:TicketsComponent},
    {path:"Dashboard",component:DashboardComponent},
    {path:"login",component:LoginComponent},
    {path:"",component:LoginComponent},
   // {
     //   path:'', redirectTo:'/login',pathMatch:'full'
    //}
];

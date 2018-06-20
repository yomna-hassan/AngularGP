import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
import { TicketsComponent } from 'src/app/tickets/tickets.component';
import { Ticket } from '../ticket';
import { TransporterService } from 'src/app/transporter.service';
import { TicketserviceService } from 'src/app/ticketservice.service';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { user } from 'src/app/Shared/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  techHoldTickets:Ticket[]=[];
  techOpenedTickets:Ticket[]=[];
  userId:string="f30dd8fa-84f9-41c2-a213-2b0f47014bb3";

  constructor(private ticketservice:TicketserviceService,private technicianservice:TechnitianserviceService) { }
  
  getHoldTicketsById(Id:string){
    this.ticketservice.getHoldTicketsById(Id).subscribe(
      d=>{
        this.techHoldTickets=d.json();
      }
    )

  }

  getOpenedTicketsById(Id:string){
    this.ticketservice.getOpenedTicketsById(Id).subscribe(
      d=>{
        this.techOpenedTickets=d.json();
      }
    )

  }
oldTicket:Ticket;
doneTicket:Ticket;
undoneTicket:Ticket;
technician:user;
flag:number=0;
  acceptTicket(tick:Ticket){
    this.flag=0;
    this.oldTicket=tick;
    alert(JSON.stringify(this.oldTicket));
    //alert(JSON.stringify(oldTicket));
    this.ticketservice.PutHoldTicket(this.userId,this.oldTicket).subscribe(
      d=>{
        alert(JSON.stringify(d));
        this.getHoldTicketsById(this.userId);
        this.getOpenedTicketsById(this.userId);
        //location.reload();
        setTimeout (() => {
          //check for not done
          if(this.flag==0){
            console.log("not Done");
            this.UnDoneTicket(this.oldTicket);
          }
        }, d*1000);
      }
    ),err=>{console.log(err)};
    
  }

  DoneTicket(tick:Ticket){
    this.doneTicket=tick;
    this.ticketservice.PutOpenedTicket(this.userId,this.doneTicket).subscribe(
      d=>{
        this.getOpenedTicketsById(this.userId);
        this.flag=1;
      }
    ),err=>{console.log(err)};
  }

  UnDoneTicket(tick:Ticket){
    this.undoneTicket=tick;
    this.ticketservice.PutUndoneTicket(this.userId,this.undoneTicket).subscribe(
      d=>{
        this.getOpenedTicketsById(this.userId);
        alert(JSON.stringify(d));
    }),err=>{console.log(err)};

  }

  GetTechnitianData(){
    this.technicianservice.getTechById(this.userId).subscribe(
      d=>{
        //alert(JSON.stringify(d));
        this.technician=d.json();
      }
    )
  }


  


  ngOnInit() {
    this.GetTechnitianData();
    this.getHoldTicketsById(this.userId);
    this.getOpenedTicketsById(this.userId);

  //   $(document).ready(function() {
  //     $('#myModal').modal('show');
  // });
  }

}

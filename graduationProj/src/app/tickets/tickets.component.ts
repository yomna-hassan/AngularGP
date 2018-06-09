import { Component, OnInit } from '@angular/core';
import { SlaserviceService } from 'src/app/slaservice.service';
import{Sla} from 'src/app/sla';
import { LayerserviceService } from 'src/app/layerservice.service';
import { Layer } from 'src/app/layer';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { Technician } from 'src/app/technician';
import { TicketserviceService } from 'src/app/ticketservice.service';
import { Ticket } from 'src/app/ticket';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';



@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(
    private slaservice:SlaserviceService,
    private layerservice:LayerserviceService,
    private technitianservice:TechnitianserviceService,
    private ticketservice:TicketserviceService,
    private router:Router) { }

  slas:Sla[]=[];
  layers:Layer[]=[];
  technicians:Technician[]=[];
  tickets:Ticket[]=[];
  loadSla(){
    this.slaservice.get().subscribe(
      d=>{
        this.slas=d.json();
   }
    );
}

  slaid:number=0;
  layer_Id:number=0;
  UserId:string="";
 
  slaChanged(value){
    this.slaid=value;
    this.layerservice.get(value).subscribe(
      d=>{
        this.layers=d.json();
      }
    )
    //alert(JSON.stringify(value))
  }

  layerChanged(value){
    this.layer_Id=value;
    this.technitianservice.get(value).subscribe(
      d=>{
        this.technicians=d.json();
      }
    )
  }

  technicianChanged(value){
    this.UserId=value;
  }


  //newTicket:Ticket=new Ticket("first","helllo","ahmed",4);
  create(form:NgForm){
    //alert(JSON.stringify(this.newTicket));
    //this.technicianid,
    this.ticketservice.postTicket(form.value,this.UserId).subscribe(
      d=>{
        alert(JSON.stringify(d));
        console.log(d); 
        this.tickets.push(d.json());
        this.router.navigate(['./Tickets']);

      }
      
    )

  }

  loadTickets(){
    this.ticketservice.get().subscribe(
      d=>{
        this.tickets=d.json();
      }
    )
  }


  

  ngOnInit() {
    
  }


}

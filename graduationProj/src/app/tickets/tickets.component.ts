import { Component, OnInit } from '@angular/core';
import { SlaserviceService } from 'src/app/slaservice.service';
import{Sla} from 'src/app/sla';
import { LayerserviceService } from 'src/app/layerservice.service';
import { Layer } from 'src/app/layer';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { Technician } from 'src/app/technician';

import { Http } from '@angular/http';

//import * as $ from 'jquery' ;
import { TicketserviceService } from 'src/app/ticketservice.service';
import { Router } from '@angular/router';
import { Ticket } from '../ticket';
import { NgForm } from '@angular/forms';
import { TicketTechnician } from 'src/app/ticket-technician';
import { MessageServiceService } from 'src/app/message-service.service';
import { TransporterService } from 'src/app/transporter.service';


var prox;

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
    private router:Router,
    private messageservice:MessageServiceService,
    private transporterservice:TransporterService) {}

  slas:Sla[]=[];
  layers:Layer[]=[];
  technicians:Technician[]=[];
  tickets:Ticket[]=[];
  ticketTechniciansOnhold:TicketTechnician[]=[];
  ticketTechniciansOpened:TicketTechnician[]=[];
  ticketTechniciansOverdue:TicketTechnician[]=[];
  ticketTechniciansDone:TicketTechnician[]=[];
  mssgText:string="";
  techTicket:Ticket;



  //Display tickets
  loadOnHold(){
    this.ticketservice.getOnHold().subscribe(d=>{
      this.ticketTechniciansOnhold=d.json();
    })
  }

  loadOpened(){
    this.ticketservice.getOpened().subscribe(d=>{
      this.ticketTechniciansOpened=d.json();
    })
  }

  loadOverdue(){
    this.ticketservice.getOvedue().subscribe(
      d=>{
        this.ticketTechniciansOverdue=d.json();
      }
    )
  }

  loadDone(){
    this.ticketservice.getDone().subscribe(
      d=>{
        this.ticketTechniciansDone=d.json();
      }
    )
  }


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
        //alert(JSON.stringify(d));
        console.log(d);
        this.transporterservice.set(d);
         this.techTicket=d;
        //this.tickets.push(d.JSON());
        //this.router.navigate(['/profile']);

      });
  }

  crreate(){
    this.messageservice.startConnection();
  }

  loadTickets(){
    this.ticketservice.get().subscribe(
      d=>{
        this.tickets=d.json();
      }
    )
  }

  

 
  

  ngOnInit() {
    this.loadOnHold();
    this.loadOpened();
    this.loadOverdue();
    this.loadDone();
     /* $(function(){
      var con=$.hubConnection();
      con.url="http://localhost:50941";
      prox=con.createHubProxy("notificationHub");
      con.start();
      //subscribe
      prox.on("newMessage",function(m){
        $("ul").append("<li>"+m+"</li>");
        //
      })
      $("#btn").on("click",send);
    }) 
    function send(){
      prox.invoke("sendMessage",$("#test").val());
    } */

    
 

  //   $(document).ready(function(){
  //     $(".open-border-color").hover(function() {
  //       console.log ($(this).find('.ticket_img'))
  //       $(this).find('.ticket_img').attr("src","/../../assets/imgs/ticketopened.png");
  //     }, 
  //     function() {
  //       $(".ticket_img").attr("src","/../../assets/imgs/ticketopened2.png");
  //           });


  //   $(".onhold-border-color").hover(function() {
  //       console.log ($(this).find('.ticket_img'))
  //       $(this).find('.ticket_img').attr("src","/../../assets/imgs/ticketopened.png");
  //     }, 
  //     function() {
  //       $(".ticket_img").attr("src","/../../assets/imgs/ticketopened3.png");
  //           });



  //   $(".onverdue-border-color").hover(function() {
  //       console.log ($(this).find('.ticket_img'));
  //       $(this).find('.ticket_img').attr("src","/../../assets/imgs/ticketopened.png");
  //     }, 
  //     function() {
  //       $(".ticket_img").attr("src","/../../assets/imgs/ticketopened4.png");
  //           });

    
  }


}

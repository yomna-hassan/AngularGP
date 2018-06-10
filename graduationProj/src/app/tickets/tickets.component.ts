import { Component, OnInit } from '@angular/core';
import { SlaserviceService } from 'src/app/slaservice.service';
import{Sla} from 'src/app/sla';
import { LayerserviceService } from 'src/app/layerservice.service';
import { Layer } from 'src/app/layer';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { Technician } from 'src/app/technician';
<<<<<<< HEAD
import { TicketserviceService } from 'src/app/ticketservice.service';
import { Ticket } from 'src/app/ticket';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import * as $ from 'jquery' ;

=======
import{Ticket} from 'src/app/ticket';
//import * as $ from 'jquery' ;
//signalR
//import 'Scripts/jquery-1.6.4.in.js';
//import 'Scripts/jquery.signalR-2.2.2.min.js';
//import 'signalr/hubs';
import { Http } from '@angular/http';
declare var $: any; //jQuery
>>>>>>> 4e4548aba5136026c87ab88737339666d25b34b0

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
    private http:Http) {
      this.connectToSignalRHub();
     }

     

  slas:Sla[]=[];
  layers:Layer[]=[];
  technicians:Technician[]=[];
  loadSla(){
      this.slaservice.get().subscribe(
        d=>{
          this.slas=d.json();

     }
      );
  }
  slaChanged(value){
    this.layerservice.get(value).subscribe(
      d=>{
        this.layers=d.json();
      }
    )
    //alert(JSON.stringify(value))
  }

  layerChanged(value){
    this.technitianservice.get(value).subscribe(
      d=>{
        this.technicians=d.json();
      }
    )
  }

  loadLayer(){ 
    
  }

<<<<<<< HEAD
    //Signal R
    private sever:any;
    private client:any;
    private hub:any;
    commonTicket:Ticket={Ticket_Id:1,Ticket_Name:"test",Description:"descr",ClientName:"ahmed",SLA_Id:1};
  
    connectToSignalRHub(){
      this.hub=$.connection.notificationHub;
      this.sever=this.hub.server;
      this.client=this.hub.client;
      let self=this;
  
      this.client.broadcastCommonData=(ticket:Ticket)=>{
        self.commonTicket=ticket;
      };
  
      //connect to the hub
      $.connection.hub.start().done((data:any)=>{
        console.log("hub connection started" + data);
      }).fail((error:any)=>{
        console.log("couldn't connect to hub "+error);
      })
  
      }


  ngOnInit() {
    
=======
  //Signal R
  private sever:any;
  private client:any;
  private hub:any;
  commonTicket:Ticket={Ticket_Id:1,Ticket_Name:"test",Description:"descr",ClientName:"ahmed",SLA_Id:1};

  connectToSignalRHub(){
    this.hub=$.connection.notificationHub;
    this.sever=this.hub.server;
    this.client=this.hub.client;
    let self=this;

    this.client.broadcastCommonData=(ticket:Ticket)=>{
      self.commonTicket=ticket;
    };

    //connect to the hub
    $.connection.hub.start().done((data:any)=>{
      console.log("hub connection started" + data);
    }).fail((error:any)=>{
      console.log("couldn't connect to hub "+error);
    })

    }
  
  ngOnInit() {
>>>>>>> 4e4548aba5136026c87ab88737339666d25b34b0

    $(document).ready(function(){
      $(".open-border-color").hover(
        function() {
        console.log ($(this).find('.ticket_img'))
        $(this).find('.ticket_img').attr("src","/../../assets/imgs/ticketopened.png");
      }, 
      function() {
        $(".ticket_img").attr("src","/../../assets/imgs/ticketopened2.png");
            });


    $(".onhold-border-color").hover(
      function() {
        console.log ($(this).find('.ticket_img'))
        $(this).find('.ticket_img').attr("src","/../../assets/imgs/ticketopened.png");
      }, 
      function() {
        $(".ticket_img").attr("src","/../../assets/imgs/ticketopened3.png");
            });



    $(".onverdue-border-color").hover(
      function() {
        console.log ($(this).find('.ticket_img'));
        $(this).find('.ticket_img').attr("src","/../../assets/imgs/ticketopened.png");
      }, 
      function() {
        $(".ticket_img").attr("src","/../../assets/imgs/ticketopened4.png");
            });
<<<<<<< HEAD

            

          }) 
  }


 }


=======
      });
    } 
  }
>>>>>>> 4e4548aba5136026c87ab88737339666d25b34b0

import { Component, OnInit } from '@angular/core';
import { SlaserviceService } from 'src/app/slaservice.service';
import{Sla} from 'src/app/sla';
import { LayerserviceService } from 'src/app/layerservice.service';
import { Layer } from 'src/app/layer';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { Technician } from 'src/app/technician';
//import * as $ from 'jquery' ;
//signalR
//import 'Scripts/jquery-1.6.4.in.js';
//import 'Scripts/jquery.signalR-2.2.2.min.js';
//import 'signalr/hubs';
import { Http } from '@angular/http';
declare var $: any; //jQuery

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
      this
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

  ngOnInit() {
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
      });
    }
}
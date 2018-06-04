import { Component, OnInit } from '@angular/core';
import { SlaserviceService } from 'src/app/slaservice.service';
import{Sla} from 'src/app/sla';
import { LayerserviceService } from 'src/app/layerservice.service';
import { Layer } from 'src/app/layer';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { Technician } from 'src/app/technician';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private slaservice:SlaserviceService,private layerservice:LayerserviceService,private technitianservice:TechnitianserviceService) { }

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
  }

}

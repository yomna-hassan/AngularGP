import { Component, OnInit } from '@angular/core';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { user } from 'src/app/Shared/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private Tecservice:TechnitianserviceService) { }

   Layer1Tec:user[]=[];
   Layer2Tec:user[]=[];
   Layer3Tec:user[]=[];

  loadFirst(){
    this.Tecservice.getFirst().subscribe(
      d=>{
       this.Layer1Tec= d.json();
       
      
      }
    )
  }


  loadSecond(){
    this.Tecservice.getSecond().subscribe(
      d=>{
        this.Layer2Tec=d.json();
      }
    )
  }


  loadThird(){
    this.Tecservice.getThird().subscribe(
      d=>{
        this.Layer3Tec=d.json();
        alert(JSON.stringify(this.Layer3Tec));
      }
    )
  }


  ngOnInit() {

     this.loadFirst();
     this.loadSecond();
     this.loadThird();
  }

}

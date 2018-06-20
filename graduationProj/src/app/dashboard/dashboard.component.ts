import { Component, OnInit } from '@angular/core';
import { TechnitianserviceService } from 'src/app/technitianservice.service';
import { user } from 'src/app/Shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private Tecservice:TechnitianserviceService,private router:Router) {
    if(localStorage.getItem('userRoles')){
      console.log(localStorage.getItem('userRoles'))
    if(!localStorage.getItem('userRoles').includes('Dispature')){
      router.navigate(['login'])
    }
  }
  else{
    router.navigate(['login'])
  }
   }

   Layer1Tec:user[]=[];
   Layer2Tec:user[]=[];
   Layer3Tec:user[]=[];

  loadFirst(){
    this.Tecservice.get(1).subscribe(
      d=>{
       this.Layer1Tec= d.json();
       alert(JSON.stringify(this.Layer1Tec));
       
      
      }
    )
  }


  loadSecond(){
    this.Tecservice.get(2).subscribe(
      d=>{
        this.Layer2Tec=d.json();
      }
    )
  }


  loadThird(){
    this.Tecservice.get(3).subscribe(
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

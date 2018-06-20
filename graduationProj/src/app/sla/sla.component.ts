import { Component, OnInit } from '@angular/core';
import { Sla } from 'src/app/sla';
import { SlaserviceService } from 'src/app/slaservice.service';
import { LayerserviceService } from 'src/app/layerservice.service';
import { Layer } from 'src/app/layer';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { LayerSla } from 'src/app/layer-sla';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {

 
  constructor(private slaservice:SlaserviceService,private layerservice:LayerserviceService,private router:Router) { }
  slas:Sla[]=[];
  deleteId:number;
  updateId:number;
  getSla(){
    this.slaservice.get().subscribe(
      d=>{
        this.slas=d.json();
        console.log(JSON.stringify(this.slas))
   }
    );
}

 layers:Layer[]=[];
 layersla:LayerSla[]=[];

 getlayer(){
   this.layerservice.get().subscribe(
     d=>{
      this.layers=d.json();
     }
  //  (data:any)=>{

  //  data.forEach(obj =>obj.selected==false);
  //        this.layers=data;
      
     )
 }

 create(form:NgForm){
  this.slaservice.postsla(form.value).subscribe(
    d=>{
      alert(JSON.stringify(d));
      console.log(d); 
      //this.layersla.push(d.json());
      this.getSla();
      this.router.navigate(['./sla']);

    })}

    del(value:number){
      this.deleteId=value;
     // alert(this.deleteId);
    }

    deleteSla(){
      this.slaservice.delete(this.deleteId).subscribe(
        d=>{
          alert(JSON.stringify(d));
          this.getSla();
        }) }


        layerChanged(value){
          this.slaservice.selectedSla.Layer_id=value;
        }



update(value:number){
  this.updateId=value;
  alert(this.updateId);


}
        

  updateSla(form:NgForm){
    this.slaservice.update(this.updateId,form.value).subscribe(
      d=>{
        alert(JSON.stringify(d));
      console.log(d); 
      this.layersla.push(d.json());
      this.getSla();
      this.router.navigate(['./sla']);
      })}


      Logout(){
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
      }

     
  // d=>{

  //   alert(JSON.stringify(d));
  //   console.log(d); 
  //   this.layersla.push(d.json());
  //   this.router.navigate(['./sla']);

  // }


  //  var x=this.layers.filter(x=>x.Layer_id).map(y=>y.Layer_name)
  //    this.slaService.postsla(form.value).subscribe((data:any)=>{
  //      if(data.succeeded==true){
  //      this.layersla.push(data.json());
      
  //       this.router.navigate(['./sla']);
  //      }
     //})
 

//  UpdatedSelectedLayers(index){
//    this.layers[index]=!this.layers[index];
//  }



 


  ngOnInit() {
        this.getSla();
        this.getlayer();
        
  }

}

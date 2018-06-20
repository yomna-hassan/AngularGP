import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/Shared/userservice.service';
import { Layer } from 'src/app/layer';
import { LayerserviceService } from 'src/app/layerservice.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {

  imgUrl:string;
  imageToUplode:File;
  roles:any[];
  layers:Layer[]=[];
  user:any;
  SelectedFile:File=null;
  layerid:any;

  constructor(private userservice:UserserviceService,private layerservice:LayerserviceService) { }


  // onFileSelected(event){
  //  this.SelectedFile=<File>event.target.files[0];
   
  // }

  


  resetform(form?:NgForm){
       if(form!=null)
           form.reset();
           this.user={
            Name:'',
            UserName:'',
            Email:'',
            Password:'',
            ConfirmPassword:'',
            Layer_Id:''
            
           }
           if(this.roles)
           this.roles.map(x=>x.selected=false);
}

  loadRoles(){
    this.userservice.getAllRoles().subscribe(
      (data:any)=>{
        data.forEach(obj =>obj.selected =false);
          this.roles=data;
  })}
  


  loadLayers(){
    this.layerservice.get().subscribe(
      d=>{
        this.layers=d.json();
      })}


      updateSelectedRoles(index){
        this.roles[index].selected=!this.roles[index].selected; 
    
      }

      layerChanged(value){
        this.userservice.user.Layer_Id=value;
        this.layerid=value;
     }
      
      Create(form:NgForm){
       // alert(JSON.stringify(form.value));
        var x=this.roles.filter(x=>x.selected).map(y=>y.Name)
       
       // form.value['image']=this.SelectedFile;
       // console.log(form.value);
        this.userservice.registerUser(form.value,x).subscribe((data:any)=>{

         // alert(data);
          if(data.Succeeded==true){
            this.resetform(form);

           // alert("success");
          
          }
        })


      }

  ngOnInit() {
     this.loadRoles();
     this.loadLayers();

  }

  


  
}

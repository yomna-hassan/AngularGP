import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LayerserviceService {

  constructor(private http:Http) { }

 

  getbysla(SLA_id){
    return this.http.get("http://localhost:50941/api/layer/"+SLA_id);
  }

  get(){
    return this.http.get("http://localhost:50941/api/layer");
    
  }
}

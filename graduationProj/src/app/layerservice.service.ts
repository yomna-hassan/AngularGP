import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LayerserviceService {

  constructor(private http:Http) { }

 

  get(slaid){
    return this.http.get("http://localhost:50941/api/layer/"+slaid);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { retry } from 'rxjs/internal/operators/retry';

@Injectable({
  providedIn: 'root'
})
export class TechnitianserviceService {

  constructor(private http:Http) { }

  get(Layer_Id){
    return this.http.get("http://localhost:50941/api/Technician/"+Layer_Id);
  }

  getFirst(){
    return this.http.get("http://localhost:50941/api/Technician/1");

  }

  getSecond(){
    return this.http.get("http://localhost:50941/api/Technician/2");
  }

  getThird(){
    return this.http.get("http://localhost:50941/api/Technician/3");
  }

  getTechById(Id:string){
    return this.http.get("http://localhost:50941/api/Technician/data/"+Id);
  }

  
}

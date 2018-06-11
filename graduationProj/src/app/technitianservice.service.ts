import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TechnitianserviceService {

  constructor(private http:Http) { }

  get(Layer_Id){
    return this.http.get("http://localhost:50941/api/Technician/"+Layer_Id);
  }
}

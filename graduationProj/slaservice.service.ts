import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class SlaserviceService {

  constructor(private http:Http) { }

  get(){
    return this.http.get("http://localhost:50941/api/sla");
  }

}

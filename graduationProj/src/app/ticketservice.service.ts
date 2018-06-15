import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/ticket';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import  'rxjs';

//import './rxjs-operators';
// Statics
//import 'rxjs/add/observable/throw';

// Operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/map';
//import  'rxjs/add/operator/toPromise';




@Injectable({
  providedIn: 'root'
})
export class TicketserviceService {

  constructor(private http:Http) { }

  getOnHold(){
    return this.http.get("http://localhost:50941/api/Tick/OnHold")
  }

  getOpened(){
    return this.http.get("http://localhost:50941/api/Tick/Opened")
  }

  getOvedue(){
    return this.http.get("http://localhost:50941/api/Tick/Overdue")
  }
  getDone(){
    return this.http.get("http://localhost:50941/api/Tick/Done")

  }

  get(){
    return this.http.get("http://localhost:50941/api/Tick");
  }

  

  //addTicket(newTicket:Ticket){
    //const headers=new HttpHeaders({'Content-Type':  'application/json'});

    //return this.http.post("http://localhost:50941/api/Ticket",newTicket);

  //}

  selectedTicket:Ticket=new Ticket(4,"second","hellllo","ahmed",4);
  postTicket(selectedTicket:Ticket,UserId:string){
    var body = JSON.stringify(selectedTicket);
    alert(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:50941/api/Tick/'+UserId,body,requestOptions).pipe(map(x=>x.json()));
  }
//technicianid:string,

}

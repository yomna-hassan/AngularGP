import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import  'rxjs';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private connection: any;
  private proxy: any;
  private url: any;
  private msg:string;

  constructor() {}
  public startConnection(): void {
  this.url="http://localhost:50941";
  this.connection = $.hubConnection(this.url);
  this.proxy = this.connection.createHubProxy('notificationHub');
  this.proxy.on("messageReceived",function(msg){
    this.msg=msg;
    alert(msg);
  });

    this.connection.start().done((data: any) => {
        console.log('Connected to notification Hub');
        this.sendMessage(this.msg);
    });
}

public sendMessage(msg:string): void {
    this.proxy.invoke('SendMessage', msg);
}



}

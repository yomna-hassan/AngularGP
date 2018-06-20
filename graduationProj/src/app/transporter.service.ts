import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {
  data;

  constructor() { }

  public set(value:any):void{
    this.data=value;
    console.log('value has been set');
    console.log(value)
  }

  public get():any{
    console.log('retrieving value');
    console.log(this.data)
    return this.data;
  }
}

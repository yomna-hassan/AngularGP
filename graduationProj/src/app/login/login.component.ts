import { Component, OnInit } from '@angular/core';
import {NgForm,NgModel} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login(data: NgForm):void{
    
    console.log("Error")
  }

  ngOnInit() {
  }

}

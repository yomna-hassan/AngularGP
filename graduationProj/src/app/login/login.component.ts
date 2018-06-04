import { Component, OnInit } from '@angular/core';
import {NgForm,NgModel} from '@angular/forms';
import { UserserviceService } from 'src/app/Shared/userservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean=false;
  constructor(private UserService:UserserviceService,private router:Router) { }
  login(data: NgForm):void{
    
    console.log("Error")
  }

  ngOnInit() {
  }

  OnSubmit(UserName,Password){
    this.UserService.UserAuthentication(UserName,Password).subscribe(
      (data :any)=>{ 
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/dashboard'])
        }, 
      (err :HttpErrorResponse)=>{
        this.isLoginError=true;
      } )
    }
  }

  
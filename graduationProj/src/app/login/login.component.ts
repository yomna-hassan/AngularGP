import { Component, OnInit } from '@angular/core';
import {NgForm,NgModel} from '@angular/forms';
import { UserserviceService } from 'src/app/Shared/userservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'util';
import { Router } from '@angular/router';
import { user } from 'src/app/Shared/user';


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

  loginUser:user=new user();
  
 
  OnSubmit(){
    this.UserService.UserAuthentication(this.loginUser.UserName,this.loginUser.PasswordHash).subscribe(
      (data :any)=>{ 
        console.log(data)
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['./dashboard'])
        }, 
      err=>{
        console.log(err)
        this.isLoginError=true;
      } )
    }
  }

  
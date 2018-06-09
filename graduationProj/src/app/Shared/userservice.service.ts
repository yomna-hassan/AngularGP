

import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders }from '@angular/common/http';
import {Response}from '@angular/Http';
import {Observable}from 'rxjs';
//import 'rxjs/add/operator/map' ;
import {user}from '../Shared/user';
import { containsTree } from '@angular/router/src/url_tree';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

   rootUrl="http://localhost:50941"
  constructor(private http :HttpClient){}

  UserAuthentication(UserName,PasswordHash){
    var data="UserName="+UserName+"&Password="+PasswordHash +"&grant_type=password";
    // var reqHeader=new HttpHeaders({'content-Type' :'application/x-www-urlencoded','No-Auth':'True'});
   // var reqHeader=new HttpHeaders({'content-Type' :'application/x-www-form-urlencoded','No-Auth':'True'});
   
    console.log(data)
    return this.http.post(this.rootUrl+'/token',data)
}

getUsers(){
  this.http.get(this.rootUrl+'/token')
}

}


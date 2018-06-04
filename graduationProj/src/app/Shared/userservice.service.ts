

import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders }from '@angular/common/http';
import {Response}from '@angular/Http';
import {Observable}from 'rxjs';
//import 'rxjs/add/operator/map'
import {user}from '../Shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  readonly rootUrl="http://localhost:50941 "
  constructor(private http :HttpClient){}

  UserAuthentication(UserName,Password){
    var data="UserName ="+UserName+"&Password ="+Password +"&grnt_type=Password";
    var reqHeader=new HttpHeaders({'content-Type' :'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl+'/token',data,{headers :reqHeader})
}

}


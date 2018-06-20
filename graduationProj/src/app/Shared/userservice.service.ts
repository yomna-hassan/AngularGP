

import {Injectable}from '@angular/core';
import {HttpClient,HttpHeaders }from '@angular/common/http';
import {Response}from '@angular/Http';
import {Observable}from 'rxjs';
//import 'rxjs/add/operator/map' ;
import {user}from '../Shared/user';
import { containsTree } from '@angular/router/src/url_tree';
import { RequestMethod,RequestOptions,Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import  'rxjs';
//import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

   rootUrl="http://localhost:50941"
  constructor(private http :HttpClient){}

  UserAuthentication(UserName,Password){
    var data="UserName="+UserName+"&Password="+Password +"&grant_type=password";

    // var reqHeader=new HttpHeaders({'content-Type' :'application/x-www-urlencoded','No-Auth':'True'});
   
   var reqHeader=new HttpHeaders({'content-Type' :'application/x-www-form-urlencoded','No-Auth':'True'});
   
    console.log(data)
    return this.http.post(this.rootUrl+'/token',data)
}

getUsers(){
  this.http.get(this.rootUrl+'/token')
}

getAllRoles(){
  //var reqHeader=new HttpHeaders({'No-Auth':'True'});
  return this.http.get(this.rootUrl+'/api/role');
}

logoutUser(){
  console.log("logout");
  console.log(JSON.parse(sessionStorage.getItem("Token")))
  return this.http.post(this.rootUrl+'/api/account/logout',null,{headers:new HttpHeaders({'Authorization':`Bearer ${sessionStorage.accessToken}`})});
}

// roleMatch(allowedRoles) : boolean {
//   var isMatch=false;
//   var userRoles:string[]=JSON.parse(localStorage.getItem('userRoles'));
//   debugger;
//   allowedRoles.forEach(element => {
//     if(userRoles.indexOf(element)>-1){
//       isMatch=true;
//       return false;
//     }
    
//   });
//   return isMatch;
// }


  user:user=new user();
registerUser(user : user, roles:string[]){
  
   const body = {
    UserName:user.UserName,
    Name:user.Name,
    Email:user.Email,
    Password:user.Password,
    ConfirmPassword:user.ConfirmPassword,
    Layer_Id:user.Layer_Id,
    Roles:roles,

    
   }
   
  //var reqHeader=new HttpHeaders({'No-Auth':'True'});
  var headerOptions ={headers:new HttpHeaders({'Content-Type':'application/json'})};
 // var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
  return this.http.post(this.rootUrl+'/api/account/register',body,headerOptions);
};
}




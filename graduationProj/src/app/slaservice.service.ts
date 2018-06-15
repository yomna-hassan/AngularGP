import { Injectable } from '@angular/core';
import { Sla } from 'src/app/sla';
import { LayerSla } from 'src/app/layer-sla';
import { Http,RequestOptions,Headers,RequestMethod } from '@angular/http';
import{Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlaserviceService {

  constructor(private http:Http) { }

  get(){
    
    return this.http.get("http://localhost:50941/api/sla");
  }

  selectedSla:LayerSla=new LayerSla(null,null,null,null,null,null);

  postsla(selectedSla:LayerSla){
    var body=JSON.stringify(selectedSla);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:50941/api/sla',body,requestOptions).pipe(map(x=>x.json()));

  }


}

import { Injectable } from '@angular/core';
import { Izziv } from './izziv';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class IzzivService {
  private baseUrl: string = 'http://164.8.230.126';
  constructor(private http: Http) { }
  dodajIzziv(izziv: Izziv){
    let u = this.http
      .post(`${this.baseUrl}/izziv/dodajIzziv`, izziv, { headers: this.getHeaders(), withCredentials: true })
      .map(mapIzziv);
    return u;
  }
  pridobiVseIzzive(){
    let u = this.http
    .get(`${this.baseUrl}/izziv/`, { headers: this.getHeaders(), withCredentials: true })
    .map(mapIzzivi);
    return u;
  }
  pridobiIzziveKategorije(kategorija:String){
    let u = this.http
    .get(`${this.baseUrl}/izziv/dobiIzzivKategorija/${kategorija}`, { headers: this.getHeaders(), withCredentials: true })
    .map(mapIzzivi);
    return u;
  }
  pridobiIzziv(id:String){
    console.log(id);
    let u = this.http
    .get(`${this.baseUrl}/izziv/dobiIzziv/${id}`, { headers: this.getHeaders(), withCredentials: true })
    .map(mapIzziv);
    console.log(u);
    return u;
  }
  jeZe(idIzziva:String){
    let u = this.http
    .get(`${this.baseUrl}/izziv/semSodeloval/${idIzziva}`, { headers: this.getHeaders(), withCredentials: true })
    .map((res: Response) => {
      if(res.json()==true){
        return true;
      }
      else{
        return false;
      }
    });
    return u;
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapIzziv(response:Response): Izziv{
  return response.json();
}

function mapIzzivi(response:Response): Izziv[]{
  return response.json();
}

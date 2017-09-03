import { Injectable } from '@angular/core';
import { Pasma } from './pasma';
import { Http, Response,Headers } from '@angular/http';

@Injectable()
export class PasmaService {
  private baseUrl: string = 'http://164.8.230.126';
  constructor(private http : Http) { }

  oceniPasmo(pasm:Pasma){
    let u = this.http
      .post(`${this.baseUrl}/pasma/oceniPasmo`, pasm, {headers: this.getHeaders(), withCredentials: true })
      .map(mapOneP);
      return u;
  }

  pridobiPasme(){
    let u = this.http
    .get(`${this.baseUrl}/pasma/dobiPasmeDropdown`, {headers: this.getHeaders(), withCredentials: true })
    .map(mapPasmeStr);
    return u;
  }
  predlagajPasme(pasmaO:Pasma){
    let u = this.http
    .post(`${this.baseUrl}/pasma/predlagajPasmo`, pasmaO, {headers: this.getHeaders(), withCredentials: true })
    .map(mapOneMP);
    return u;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }



}
function mapOneP(response:Response): Pasma{
   return response.json();
}
function mapOneMP(response:Response): Pasma[]{
   return response.json();
}
function mapPasmeStr(response:Response): String []{
  return response.json();
}

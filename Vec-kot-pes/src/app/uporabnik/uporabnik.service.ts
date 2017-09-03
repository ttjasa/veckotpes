import { Injectable } from '@angular/core';
import { Uporabnik, Pes } from './Uporabnik';
import { Drustvo } from '../kinoloskadrustva/drustvo';
import { Aktualno } from '../aktualno/aktualno';
import { Iscejodom } from '../iscejodom/iscejodom';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UporabnikService {
  private baseUrl: string = 'http://164.8.230.126';
  constructor(private http: Http) {
  }
  registracija(uporabnik: Uporabnik, profilna: File): Observable<Uporabnik> {
    let formData: FormData = new FormData();
    formData.append('profilna', profilna);
    formData.append('uporIme', uporabnik.uporIme);
    formData.append('ime', uporabnik.ime);
    formData.append('priimek', uporabnik.priimek);
    formData.append('email', uporabnik.email);
    formData.append('kraj', uporabnik.kraj);
    formData.append('datRoj', uporabnik.datRoj);
    formData.append('kratekOpis', uporabnik.kratekOpis);
    formData.append('geslo', uporabnik.geslo);
    let u = this.http
      .post(`${this.baseUrl}/uporabnik/registracija`, formData, { headers: this.getHeaders(), withCredentials: true })
      .map(mapUU);
    return u;
  }
  prijava(uporabnik: Uporabnik): Observable<Uporabnik> {
    let u = this.http
      .post(`${this.baseUrl}/uporabnik/prijava`, uporabnik, { headers: this.getHeaders(), withCredentials: true })
      .map(mapUU);
    return u;
  }
  odjava() {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/odjava`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapUU);
    return u;
  }
  mojiPodatki() {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/pokazi/mojprofil`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapOneU);
    return u;
  }

  dodajPsa(pes: Pes, profilna: File) {
    let formData: FormData = new FormData();
    formData.append('profilna', profilna);
    formData.append('ime', pes.ime);
    formData.append('datRoj', pes.datRoj);
    formData.append('rodovnik', pes.rodovnik);
    formData.append('imaRodovnik', pes.imaRodovnik);
    formData.append('pasma', pes.pasma);
    let u = this.http
      .post(`${this.baseUrl}/uporabnik/dodajPsa`, formData, { headers: this.getHeaders(), withCredentials: true })
      .map(mapUU);
    return u;
  }
  jePrijavljen() {
    return this.http
      .get(`http://164.8.230.126/uporabnik/loginstatus`, { headers: this.getHeaders(), withCredentials: true })
      .map((res: Response) => {
        //this.userService.redirectUrl = url; //???
        if (res.json() == true) {
          return true;
        }
        else {
          return false;
        }
      });
  }
  urediProfil(uporabnik: Uporabnik) {
    let u = this.http
      .put(`${this.baseUrl}/uporabnik/urediProfil`, uporabnik, { headers: this.getHeaders(), withCredentials: true })
      .map(mapUU);
    return u;
  }
  izbrisiPsa(_id: String) {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/odstraniPsa/${_id}`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapUU);
    return u;
  }
  isciPrijatelje(iskNiz: String): Observable<Uporabnik[]> {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/isciPrijatelje/${iskNiz}`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapU);
    return u;
  }
  mojePasme() {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/mojepasme`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapPasmeStr);
    return u;
  }
  dobiKinoloskaDrustva(): Observable<Drustvo[]> {
    let u = this.http
      .get(`${this.baseUrl}/vnosi/dobiDrustva`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapDrustvo);
      console.log(u);
    return u;
  }

  dobiUporabnika(uporIme: String) {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/dobiUporabnika/${uporIme}`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapOneU);
    return u;
  }

  staPrijatelja(uporIme: String) {
    return this.http
      .get(`${this.baseUrl}/uporabnik/staPrijatelja/${uporIme}`, { headers: this.getHeaders(), withCredentials: true })
      .map((res: Response) => {
        if (res.json() == true) {
          return true;
        }
        else {
          return false;
        }
      });
  };

  dodajPrijatelja(up1: String, up2: String) {
    var obj = { prviUporabnik: up1, drugiUporabnik: up2 };
    return this.http
      .post(`${this.baseUrl}/uporabnik/dodaj`, obj, { headers: this.getHeaders(), withCredentials: true })
      .map((res: Response) => {
        if (res.json() == true) {
          return true;
        }
        else {
          return false;
        }
      });
  };

  odstraniPrijatelja(_id: String) {
    return this.http
      .get(`${this.baseUrl}/uporabnik/odstraniPrijatelja/${_id}`, { headers: this.getHeaders(), withCredentials: true })
      .map((res: Response) => {
        if (res.json() == true) {
          return true;
        }
        else {
          return false;
        }
      });
  }

  seznamPrijateljev(uporIme: String) {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/prijateljiUporabnika/${uporIme}`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapU);
    return u;
  }
  predlagajPrijatelje(): Observable<Uporabnik[]> {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/predlagajPrijatelje`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapU);
    return u;
  }

  mojiPrijatelji() {
    let u = this.http
      .get(`${this.baseUrl}/uporabnik/mojiprijatelji`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapU);
    return u;
  }
  dobiAktualno(): Observable<Aktualno[]> {
    let u = this.http
      .get(`${this.baseUrl}/vnosi/dobiAktualno`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapA);
    return u;
  }

  dobiIscejoDom(): Observable<Iscejodom[]> {
   let u = this.http
     .get(`${this.baseUrl}/vnosi/dobiIscejoDom`, { headers: this.getHeaders(), withCredentials: true })
     .map(mapIscejoDom);
   return u;
 }
 lestvica(): Observable<Uporabnik[]> {
   let u = this.http
   .get(`${this.baseUrl}/uporabnik/lestvica`, { headers: this.getHeaders(), withCredentials: true })
   .map(mapU);
   return u;
 }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapA(response: Response): Aktualno[] {
  return response.json();
}
function mapPasmeStr(response: Response): String[] {
  return response.json();
}
function mapDrustvo(response: Response): Drustvo[] {
  return response.json();
}
function mapIscejoDom(response: Response): Iscejodom[] {
  return response.json();
}

function mapOneU(response: Response): Uporabnik {
  var tmp = response.json();
  for(var i = 0; i < tmp.objave.length; i++){
    tmp.objave[i].ocena = tmp.objave[i].vote.positive.length - tmp.objave[i].vote.negative.length;
  }
  return tmp;
}
function mapUU(response: Response): Uporabnik {
  return response.json();
}
function mapU(response: Response): Uporabnik[] {
  return response.json().map(toU);
}

function toU(r: any): Uporabnik {
  let u = <Uporabnik>({
    ime: r.ime,
    priimek: r.priimek,
    email: r.email,
	   id: r._id,
     geslo: '',
    uporIme: r.uporIme,
    kraj: r.kraj,
    datRoj: r.datRoj,
    kratekOpis: r.kratekOpis,
    slika: r.slika,
    steviloSlik: r.steviloSlik,
    friends: r.friends,
    psi: r.psi,
    opravljene: r.opravljene,
    uporSkupina: r.uporSkupina,
    objave: r.objave
  });

  return u;
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Objava, Komentar } from './objava';
import 'rxjs/add/operator/map';

@Injectable()
export class ObjavaService {
  private baseUrl: string = 'http://164.8.230.126';
  constructor(private http: Http) { }

  novaObjava(objava: Objava, slika: File) {
    let formData: FormData = new FormData();
    formData.append('slika', slika);
    formData.append('naslov', objava.naslov);
    formData.append('opis', objava.opis);
    formData.append('idIzziva', objava.izziv);
    let u = this.http
      .post(`${this.baseUrl}/objava/dodajObjavo`, formData, { headers: this.getHeaders(), withCredentials: true })
      .map(mapO);
    return u;
  }

  vseObjave() {
    let u = this.http
      .get(`${this.baseUrl}/objava/dobiObjavePrijateljev/`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapOcenaM);
    return u;
  }

  pokaziObjavo(idObjave: String) {
    let u = this.http
      .get(`${this.baseUrl}/objava/pokaziObjavo/${idObjave}`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapOcena);
    return u;
  }

  komentiraj(komentar: Komentar, idO: String) {
    var o = {
      komentar: komentar.komentar,
      id: idO
    };
    let u = this.http
      .post(`${this.baseUrl}/objava/dodajKomentar`, o, { headers: this.getHeaders(), withCredentials: true })
      .map(mapK);
    return u;
  }

  glasuj(glas: Boolean, idO: String) {
    var o = {
      glas: glas,
      idObjave: idO
    };
    let u = this.http
      .post(`${this.baseUrl}/objava/glasuj`, o, { headers: this.getHeaders(), withCredentials: true })
      .map(mapOcena);
    return u;
  }

  jeOpravil(idO: String){
    let u = this.http
      .get(`${this.baseUrl}/objava/jeOpravil/${idO}`, { headers: this.getHeaders(), withCredentials: true })
      .map(mapOcena);
    return u;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

function mapOcena(response: Response): Objava {
  let u = <Objava>({
    naslov: response.json().naslov,
    uporabnik: response.json().uporabnik,
    imePriimek: response.json().imePriimek,
    opis: response.json().opis,
    slika: response.json().slika,
    datOddaje: response.json().datOddaje,
    izziv: response.json().izziv,
    _id: response.json()._id,
    komentarji: response.json().komentarji,
    ocena: response.json().vote.positive.length - response.json().vote.negative.length,
    profilna: response.json().profilna
  });
  return u;
}

function mapOcenaM(response: Response): Objava[] {
  return response.json().map(toO);
}


function toO(r: any): Objava {
  let u = <Objava>({
    naslov: r.naslov,
    uporabnik: r.uporabnik,
    imePriimek: r.imePriimek,
    opis: r.opis,
    slika: r.slika,
    datOddaje: r.datOddaje,
    izziv: r.izziv,
    _id: r._id,
    komentarji: r.komentarji,
    ocena: r.vote.positive.length - r.vote.negative.length,
    profilna: r.profilna
  });
  return u;
}


function mapO(response: Response): Objava {
  return response.json();
}

function mapOM(response: Response): Objava[] {
  return response.json();
}

function mapK(response: Response): Komentar {
  return response.json();
}

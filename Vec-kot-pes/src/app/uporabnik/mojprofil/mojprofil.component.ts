import { Component, OnInit } from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { ObjavaService } from '../../objava/objava.service';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Objava } from '../../objava/objava';

@Component({
  selector: 'app-mojprofil',
  templateUrl: './mojprofil.component.html',
  styleUrls: ['./mojprofil.component.css']
})
export class MojprofilComponent implements OnInit {
  uporabnik: Uporabnik = {
    uporIme: '',
    priimek: '',
    ime: '',
    geslo: '',
    email: '',
    id: '',
    slika: '',
    steviloSlik: 0,
    kraj: '',
    datRoj: null,
    kratekOpis: '',
    uporSkupina: 'REGULAR',
    friends: null,
    psi: null,
    objave: null,
    opravljene: null
  };
  seobstaja:Boolean = true;
  indeks:number = 0;
  objaveOmejeno:Objava[]=[];
  prijatelji: Uporabnik[];
  napaka: String;
  constructor(private uporabnikService: UporabnikService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.uporabnikService
      .mojiPodatki()
      .subscribe(u => {this.uporabnik = u, this.omejiObjave()}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });

    this.uporabnikService
      .mojiPrijatelji()
      .subscribe(prijatelji => this.prijatelji = prijatelji, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }
  omejiObjave(){
    for(var i = this.indeks;(i < this.indeks+10 && i < this.uporabnik.objave.length) ; i++){
      this.objaveOmejeno[i] = this.uporabnik.objave[i];
    }
    this.indeks=this.indeks+10;
    if(this.indeks >= this.uporabnik.objave.length){
      this.seobstaja = false;
    }
  }
}

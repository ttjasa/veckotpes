import { Component, OnInit } from '@angular/core';
import { Objava, Komentar } from '../objava';
import { ObjavaService } from '../objava.service';
import { LevanavComponent } from '../../domov/levanav/levanav.component';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokazi-objavo',
  templateUrl: './pokazi-objavo.component.html',
  styleUrls: ['./pokazi-objavo.component.css']
})
export class PokaziObjavoComponent implements OnInit {
  novKomentar:Komentar={
    komentar:'',
    imePriimek:'',
    uporabnik:'',
    datOddaje: null
  }
  objava:Objava={
    naslov: '',
    uporabnik: '',
    imePriimek: '',
    opis: '',
    profilna: '',
    slika: '',
    ocena: 3,
    datOddaje: null,
    izziv: '',
    _id: '',
    komentarji: null
  }

  glas:Boolean;
  napaka:String="";

  constructor(private objavaService:ObjavaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.objavaService
        .pokaziObjavo(params['id'])
        .subscribe(u =>{this.objava = u}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });
  }
  onKomentiraj() {
    this.objavaService
    .komentiraj(this.novKomentar, this.objava._id)
    .subscribe(u => {this.novKomentar = u, this.ngOnInit()}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; })
  }

 onGlasuj(glas) {
    this.objavaService
    .glasuj(glas,this.objava._id)
    .subscribe(u => {this.objava = u, this.oprav(), this.ngOnInit()}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; })
  }

  oprav(){
    this.objavaService
    .jeOpravil(this.objava._id)
    .subscribe();
  }
}

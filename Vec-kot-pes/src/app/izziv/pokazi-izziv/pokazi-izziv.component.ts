import { Component, OnInit } from '@angular/core';
import { Izziv } from '../izziv';
import { IzzivService } from '../izziv.service';
import { LevanavComponent } from '../../domov/levanav/levanav.component';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import {NovaObjavaComponent} from '../../objava/nova-objava/nova-objava.component';
import { MapsAPILoader } from 'angular2-google-maps/core';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-pokazi-izziv',
  templateUrl: './pokazi-izziv.component.html',
  styleUrls: ['./pokazi-izziv.component.css']
})
export class PokaziIzzivComponent implements OnInit {
  izziv:Izziv = {
    naslov:'',
    opis:'',
    kategorija:'',
    uporabnik:'',
    datOddaje: null,
    _id: '',
    datPoteka: null,
    lon: null,
    lng: null
  }
  napaka:String='';
  opravil:Boolean=false;
  pokaziNovi:Boolean=false;
  constructor(private izzivService:IzzivService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.izzivService
        .pridobiIzziv(params['id'])
        .subscribe(u =>{this.izziv = u, console.log(this.izziv)}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });
    this.route.params.subscribe(params => {
      this.izzivService
        .jeZe(params['id'])
        .subscribe(u =>{this.opravil = u, this.jePotekli()}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });
  }
  noviPost(){
    this.pokaziNovi=true;
  }
  jePotekli(){
    if( new Date(this.izziv.datPoteka) < new Date()){
      this.opravil = true;
    }
  }

}

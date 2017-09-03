import { Component, OnInit } from '@angular/core';
import { Uporabnik, Pes } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { LevanavComponent } from '../../domov/levanav/levanav.component';

@Component({
  selector: 'app-iskanje',
  templateUrl: './iskanje.component.html',
  styleUrls: ['./iskanje.component.css']
})
export class IskanjeComponent implements OnInit {
  uporabniki:Uporabnik[];
  predlagani:Uporabnik[]=[];
  predlagani5:Uporabnik[]=[];
  indeks:Number = 0;
  preostali:Boolean=true;

  prijavljen: Uporabnik = {
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

  constructor(private uporabnikService:UporabnikService, private route: ActivatedRoute ) { }
  iskalniNiz:String;
  napaka: String;

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.iskalniNiz=params['niz'];
	   this.uporabnikService
      .isciPrijatelje(params['niz'])
      .subscribe(uporabniki => this.uporabniki = uporabniki);
    });

    this.uporabnikService
    .predlagajPrijatelje()
    .subscribe(predlagani => {this.predlagani = predlagani, this.omejiNa5()});

	this.uporabnikService
	.mojiPodatki()
	.subscribe(u => this.prijavljen = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }

  omejiNa5(){
    if(this.indeks===0){
    for(var i=0;i<5;i++){
      this.predlagani5[i]=this.predlagani[i];
    }
    this.indeks=5;
  } else if(this.indeks===5){
    for(var i=5;i<10;i++){
      this.predlagani5[i]=this.predlagani[i];
    }
    this.indeks = 10;
  } else if(this.indeks===10){
    for(var i=10;i<15;i++){
      this.predlagani5[i]=this.predlagani[i];
    }
    this.preostali=false;
  }
  }
}

import { Component, OnInit } from '@angular/core';
import { Uporabnik, Pes } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ObjavaService } from '../../objava/objava.service';
import { Objava } from '../../objava/objava';

@Component({
  selector: 'app-pokaziprofil',
  templateUrl: './pokaziprofil.component.html',
  styleUrls: ['./pokaziprofil.component.css']
})
export class PokaziprofilComponent implements OnInit {
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
  objave: Objava[] = [];
  seobstaja: Boolean = true;
  indeks: number = 0;
  objaveOmejeno: Objava[] = [];
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

  napaka: String;
  staPrijatelja: Boolean;
  dodaj: Boolean;
  odstrani: Boolean;
  prijatelji: Uporabnik[];
  mojiprijatelji: Uporabnik[];

  constructor(private uporabnikService: UporabnikService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uporabnikService
        .dobiUporabnika(params['uporIme'])
        .subscribe(u => { this.uporabnik = u, this.objave = this.uporabnik.objave, this.omejiObjave() }, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });

    this.route.params.subscribe(params => {
      this.uporabnikService
        .staPrijatelja(params['uporIme'])
        .subscribe(u => this.staPrijatelja = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });

    this.uporabnikService
      .mojiPodatki()
      .subscribe(u => this.prijavljen = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });

    this.route.params.subscribe(params => {
      this.uporabnikService
        .seznamPrijateljev(params['uporIme'])
        .subscribe(prijatelji => this.prijatelji = prijatelji, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });

    this.uporabnikService
      .mojiPrijatelji()
      .subscribe(mojiprijatelji => this.mojiprijatelji = mojiprijatelji, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }

  onDodaj() {
    this.uporabnikService
      .dodajPrijatelja(this.prijavljen.uporIme, this.uporabnik.uporIme)
      .subscribe(u => { this.dodaj = u, this.ngOnInit() }, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }
  onOdstrani(_id: String) {
    this.uporabnikService
      .odstraniPrijatelja(_id)
      .subscribe(u => { this.odstrani = u, this.ngOnInit() }, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }
  omejiObjave() {
    for (var i = this.indeks; (i < this.indeks + 10 && i < this.objave.length); i++) {
      this.objaveOmejeno[i] = this.objave[i];
    }
    this.indeks = this.indeks + 10;
    if (this.indeks >= this.objave.length) {
      this.seobstaja = false;
    }
  }
}

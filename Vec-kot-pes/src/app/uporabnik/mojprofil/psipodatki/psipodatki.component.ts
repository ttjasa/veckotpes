import { Component, OnInit } from '@angular/core';
import { Pes, Uporabnik } from '../../uporabnik';
import { UporabnikService } from '../../uporabnik.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psipodatki',
  templateUrl: './psipodatki.component.html',
  styleUrls: ['./psipodatki.component.css']
})

export class PsipodatkiComponent implements OnInit {
  pes: Pes = {
    ime: '',
    pasma: '',
    datRoj: null,
    imaRodovnik: false,
    rodovnik: '',
    slika: '',
    _id: ''
  };

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

  napaka: String;

  constructor(private uporabnikService: UporabnikService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uporabnikService
        .dobiUporabnika(params['uporIme'])
        .subscribe(u => this.uporabnik = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
    });

    this.uporabnikService
      .mojiPodatki()
      .subscribe(u => this.prijavljen = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }
}

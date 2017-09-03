import { Component, OnInit } from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { Router } from '@angular/router';
import { NavigacijaComponent } from '../../navigacija.component';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent {
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
  constructor(private router: Router, private uporabnikService: UporabnikService) { }

  ngOnInit() {
  }
  onPrijava() {
    if (this.uporabnik.uporIme != '' && this.uporabnik.geslo != '') {
      this.napaka = "";
      this.uporabnikService
        .prijava(this.uporabnik)
        .subscribe(u => this.uporabnik = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; }, () => this.router.navigate(['/']));
    } else {
      this.napaka = "Izpolnite vsa polja!";
    }
  }
}

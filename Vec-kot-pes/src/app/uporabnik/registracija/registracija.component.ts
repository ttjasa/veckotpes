import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { Router } from '@angular/router';
import { NavigacijaComponent } from '../../navigacija.component';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  providers: [UporabnikService],
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  napaka: String;
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

element = document.getElementById("down");

constructor(private uporabnikService: UporabnikService, private router: Router) { }
@ViewChild('prikaznaFile') inputSlika: ElementRef;
ngOnInit() {
}
onRegistracija() {
  let inputSlika: HTMLInputElement = this.inputSlika.nativeElement;
  if (this.inputSlika.nativeElement.files[0] != null && this.uporabnik.uporIme != '' && this.uporabnik.email != '' && this.uporabnik.ime != '' && this.uporabnik.priimek != '' && this.uporabnik.kraj != '' && this.uporabnik.datRoj != null && this.uporabnik.kratekOpis != '' && this.uporabnik.geslo != '') {
    this.napaka = "";
    this.uporabnikService
      .registracija(this.uporabnik, inputSlika.files[0])
      .subscribe(u => this.uporabnik = u, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; }, () => this.router.navigate(['prijava']));
  } else {
    this.napaka = "Izpolnite vsa polja!";
  }
}
}

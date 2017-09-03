import { Component, OnInit } from '@angular/core';
import { NavigacijaComponent } from '../navigacija.component';
import { UporabnikService } from '../uporabnik/uporabnik.service';
import { Iscejodom } from './iscejodom';
import { LevanavComponent } from '../domov/levanav/levanav.component';

@Component({
  selector: 'app-iscejodom',
  templateUrl: './iscejodom.component.html',
  styleUrls: ['./iscejodom.component.css']
})
export class IscejodomComponent implements OnInit {
  iscejoDom: Iscejodom[] = [];
  iscejoDomOmejeno: Iscejodom[] = [];
  seobstaja: Boolean = true;
  napaka: String;
  constructor(private uporabnikService: UporabnikService) { }

  indeks: number = 0;

  ngOnInit() {
    this.uporabnikService
      .dobiIscejoDom()
      .subscribe(u => { this.iscejoDom = u, this.omeji() });
  }
  omeji() {
    for (var i = this.indeks; i < this.indeks + 5; i++) {
      this.iscejoDomOmejeno[i] = this.iscejoDom[i];
    }
    this.indeks = this.indeks + 5;
    if (this.indeks >= this.iscejoDom.length) {
      this.seobstaja = false;
    }
  }
}

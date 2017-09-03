import { Component, OnInit } from '@angular/core';
import { NavigacijaComponent } from '../navigacija.component';
import {LevanavComponent} from './levanav/levanav.component';
import { Objava } from '../objava/objava';
import { ObjavaService } from '../objava/objava.service';
import { UporabnikService } from '../uporabnik/uporabnik.service';
import { Uporabnik } from '../uporabnik/uporabnik';
import { LestvicaComponent } from '../lestvica/lestvica.component';
@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
  objave: Objava[] = [];
  objaveOmejeno: Objava[] = [];
  constructor(private objavaService: ObjavaService, private uporabnikService: UporabnikService) { }
  indeks: number = 0;
  seobstaja: Boolean = true;
  topUs:Uporabnik[]=[];
  ngOnInit() {
    this.objavaService
      .vseObjave()
      .subscribe(u => { this.objave = u, this.omejiObjave() });
    this.uporabnikService
    .lestvica()
    .subscribe(u=>this.topUs=u);
  }
  omejiObjave() {
    for (var i = this.indeks; (i < this.indeks + 5 && i < this.objave.length); i++) {
      this.objaveOmejeno[i] = this.objave[i];
    }
    this.indeks = this.indeks + 5;
    if (this.indeks >= this.objave.length) {
      this.seobstaja = false;
    }
  }
}

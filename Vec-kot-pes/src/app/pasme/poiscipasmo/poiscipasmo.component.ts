import { Component, OnInit } from '@angular/core';
import { Pasma } from '../pasma';
import {PasmaService} from '../pasma.service';
import { LevanavComponent } from '../../domov/levanav/levanav.component';

@Component({
  selector: 'app-poiscipasmo',
  templateUrl: './poiscipasmo.component.html',
  styleUrls: ['./poiscipasmo.component.css']
})
export class PoiscipasmoComponent implements OnInit {
  pasmaO:Pasma={
    pasma: '',
    imgSrc: '',
    Velikost: 1,
    PotrebaPoNegi:1,
    IzpadanjeDlak: 1,
    DruzinskiPes: 1,
    PesCuvaj: 1,
    Ucljivost: 1,
    PotrebaPoGibanju: 1,
    stOcen: 1
  }
  predlaganePasme:Pasma[]=[];
  constructor(private pasmaService: PasmaService) { }

  ngOnInit() {
  }
  onPredlagaj(){
    this.pasmaService
    .predlagajPasme(this.pasmaO)
    .subscribe(u=>{this.predlaganePasme = u});
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigacijaComponent } from '../navigacija.component';
import { UporabnikService } from '../uporabnik/uporabnik.service';
import { Aktualno } from './aktualno';
import { LevanavComponent } from '../domov/levanav/levanav.component';

@Component({
  selector: 'app-aktualno',
  templateUrl: './aktualno.component.html',
  styleUrls: ['./aktualno.component.css']
})
export class AktualnoComponent implements OnInit {
  novice:Aktualno[]=[];
  noviceOmejeno:Aktualno[]=[];
  seobstaja:Boolean=true;
  constructor(private uporabnikService:UporabnikService) { }
  indeks:number = 0;
  ngOnInit() {
    this.uporabnikService
    .dobiAktualno()
    .subscribe(u=>{this.novice=u, this.omeji()});
  }
  omeji(){
    for(var i = this.indeks;i < this.indeks+5 ; i++){
      this.noviceOmejeno[i] = this.novice[i];
    }
    this.indeks=this.indeks+5;
    if(this.indeks >= this.novice.length){
      this.seobstaja = false;
    }
  }

}

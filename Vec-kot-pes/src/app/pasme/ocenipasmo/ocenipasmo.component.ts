import { Component, OnInit } from '@angular/core';
import { UporabnikService } from '../../uporabnik/uporabnik.service';
import { Pasma } from '../pasma';
import { PasmaService } from '../pasma.service';
import { LevanavComponent } from '../../domov/levanav/levanav.component';

@Component({
  selector: 'app-ocenipasmo',
  templateUrl: './ocenipasmo.component.html',
  styleUrls: ['./ocenipasmo.component.css'],
  providers: [PasmaService]
})
export class OcenipasmoComponent implements OnInit {
  pasmeU:Pasma[]=[];
  pasmaO:Pasma={
    pasma: '',
    imgSrc: '', //od te tocke dalje so ocene za UI
    Velikost: 1,
    PotrebaPoNegi:1,
    IzpadanjeDlak: 1,
    DruzinskiPes: 1,
    PesCuvaj: 1,
    Ucljivost: 1,
    PotrebaPoGibanju: 1,
    stOcen: 1
  }
  mojePasmeS:String[];
  sporocilo:String='';
  constructor(private uporabnikService:UporabnikService, private pasmaService:PasmaService) { }

  ngOnInit() {
    this.uporabnikService
     .mojePasme()
     .subscribe(mojePasmeS => {this.mojePasmeS = mojePasmeS, this.onDon()});
  }

  onDon(){
    console.log(this.mojePasmeS.length);
    for(var i = 0; i < this.mojePasmeS.length; i++){
      var tmp = new Pasma();
      tmp.pasma = this.mojePasmeS[i];
      this.pasmeU.push(tmp);
    }
  }

  onOceni(pasmaP:String){
    //this.pasmaO.pasma = pasmaP;
    for(let p of this.pasmeU){
      if(p.pasma === pasmaP){
        this.pasmaO = p;
        console.log("nana");
      }
    }
    this.pasmaService
    .oceniPasmo(this.pasmaO)
    .subscribe();
    this.sporocilo = "Pasma " + this.pasmaO.pasma + " ocenjena.";
  }

}

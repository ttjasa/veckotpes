import { Component, OnInit } from '@angular/core';
import { Izziv } from '../izziv';
import { IzzivService } from '../izziv.service';
import { LevanavComponent } from '../../domov/levanav/levanav.component';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Uporabnik } from '../../uporabnik/uporabnik';
import { UporabnikService } from '../../uporabnik/uporabnik.service';

@Component({
  selector: 'app-vsi-izzivi',
  templateUrl: './vsi-izzivi.component.html',
  styleUrls: ['./vsi-izzivi.component.css']
})
export class VsiIzziviComponent implements OnInit {
  izzivi:Izziv[]=[];
  kategorija:String='';
  uporabnik:Uporabnik;
  posebni:Boolean=false;
  constructor(private izzivService:IzzivService, private route: ActivatedRoute, private uporabnikService:UporabnikService) { }

  ngOnInit() {
    this.uporabnikService
    .mojiPodatki()
    .subscribe(u=>{this.uporabnik = u, this.jePosebni()});
    this.route.params.subscribe(params => {
      this.kategorija = params['kategorija'];
      if(params['kategorija'] === 'vsi'){
        this.izzivService
        .pridobiVseIzzive()
        .subscribe(izzivi=>this.izzivi=izzivi);
      } else {
        this.izzivService
        .pridobiIzziveKategorije(params['kategorija'])
        .subscribe(izzivi=>this.izzivi=izzivi);
      }
    });


  }
  jePosebni(){
    if(this.uporabnik.uporSkupina==='ADMINISTRATOR'){this.posebni=true;}else{this.posebni=false;}
  }
}

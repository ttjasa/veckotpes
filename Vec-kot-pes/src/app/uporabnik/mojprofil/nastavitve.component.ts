import { Component, OnInit } from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nastavitve',
  templateUrl: './nastavitve.component.html',
  styleUrls: ['./nastavitve.component.css']
})
export class NastavitveComponent implements OnInit {
  uporabnik:Uporabnik= {
  uporIme: '',
  priimek: '',
  ime: '',
  geslo: '',
  email:'',
  id:'',
  slika:'',
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
napaka:String;
  constructor(private uporabnikService: UporabnikService, private router: Router) { }

  ngOnInit() {
    this.uporabnikService
     .mojiPodatki()
     .subscribe(u=>this.uporabnik=u,error=>{console.log("Error:",error);this.napaka=JSON.parse(error._body).error;});
  }
  onUredi(){
    this.uporabnikService
     .urediProfil(this.uporabnik)
     .subscribe(u=>{this.uporabnik=u, this.router.navigate(['/mojprofil'])},error=>{console.log("Error:",error);this.napaka=JSON.parse(error._body).error;});
  }

}

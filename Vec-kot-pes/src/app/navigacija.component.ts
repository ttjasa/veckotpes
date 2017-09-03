import { Component, OnInit } from '@angular/core';
import { Uporabnik } from './uporabnik/uporabnik';
import { UporabnikService } from './uporabnik/uporabnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.css']
})
export class NavigacijaComponent implements OnInit {
  iskalniNiz:String='';
  sporocilo:String="";
  constructor(private uporabnikService: UporabnikService, private router: Router) { }
  prijavljen:Boolean;
  ngOnInit() {
    this.uporabnikService.jePrijavljen().subscribe(u=>this.prijavljen=u);
  }

  onOdjava(){
    this.uporabnikService
     .odjava()
     .subscribe(()=>this.router.navigate(['/zacetna']));
     console.log("odjavljen");
  }

  onIsci(){
    var niz='/iskanje/'+this.iskalniNiz;
    this.router.navigate([niz]);
  }

}

import { Component, OnInit } from '@angular/core';
import { UporabnikService } from '../uporabnik/uporabnik.service';
import { Uporabnik } from '../uporabnik/uporabnik';

@Component({
  selector: 'app-lestvica',
  templateUrl: './lestvica.component.html',
  styleUrls: ['./lestvica.component.css']
})
export class LestvicaComponent implements OnInit {
  topUs:Uporabnik[]=[];
  constructor(private uporabnikService: UporabnikService) { }

  ngOnInit() {
    this.uporabnikService
    .lestvica()
    .subscribe(u=>this.topUs=u);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigacijaComponent } from '../navigacija.component';
import { UporabnikService } from '../uporabnik/uporabnik.service';

@Component({
  selector: 'app-zacetna',
  templateUrl: './zacetna.component.html',
  styleUrls: ['./zacetna.component.css']
})
export class ZacetnaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

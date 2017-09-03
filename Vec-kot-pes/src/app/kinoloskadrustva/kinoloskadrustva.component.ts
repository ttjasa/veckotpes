import { Component, OnInit } from '@angular/core';
import { Drustvo } from './drustvo';
import { UporabnikService } from '../uporabnik/uporabnik.service';
import { LevanavComponent } from '../domov/levanav/levanav.component';

@Component({
  selector: 'app-kinoloskadrustva',
  templateUrl: './kinoloskadrustva.component.html',
  styleUrls: ['./kinoloskadrustva.component.css']
})
export class KinoloskadrustvaComponent implements OnInit {
  drustva:Drustvo[]=[];
  constructor(private uporabnikService:UporabnikService) { }

  ngOnInit() {
    this.uporabnikService
    .dobiKinoloskaDrustva()
    .subscribe(drustva=>{this.drustva=drustva, this.onK()});
  }
  onK(){
    console.log(this.drustva);
  }
}

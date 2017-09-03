import { Component, OnInit, Input,ElementRef, ViewChild  } from '@angular/core';
import { Objava } from '../objava';
import { ObjavaService } from '../objava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nova-objava',
  templateUrl: './nova-objava.component.html',
  styleUrls: ['./nova-objava.component.css']
})
export class NovaObjavaComponent implements OnInit {
  @Input() idIzziva:String;
  @Input() naslovIzziva:String;
  @ViewChild('slikaFile') inputSlika: ElementRef;
  novaObjava:Objava={
    naslov: '',
    uporabnik: '',
    imePriimek: '',
    opis: '',
    slika: '',
    profilna: '',
    ocena: 0,
    datOddaje: null,
    izziv: '',
    _id: '',
    komentarji: null
  }
  napaka:String='';
  constructor(private objavaService: ObjavaService, private router: Router) { }

  ngOnInit() {
    this.novaObjava.naslov=this.naslovIzziva;
    this.novaObjava.izziv=this.idIzziva;
  }
  onObjavi(){
    this.novaObjava.naslov=this.naslovIzziva;
    this.novaObjava.izziv=this.idIzziva;
    let inputSlika: HTMLInputElement = this.inputSlika.nativeElement;
    this.napaka = "";
    this.objavaService
      .novaObjava(this.novaObjava, inputSlika.files[0])
      .subscribe(u => {this.novaObjava = u, this.pojdiNaObjavo()}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; });
  }
  pojdiNaObjavo(){
    this.router.navigate(['/mojprofil']);
  }
}

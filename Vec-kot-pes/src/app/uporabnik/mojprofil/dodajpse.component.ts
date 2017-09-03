import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Uporabnik, Pes } from '../uporabnik';
import { UporabnikService } from '../uporabnik.service';
import { NavigacijaComponent } from '../../navigacija.component';
import { PasmaService } from '../../pasme/pasma.service';

@Component({
  selector: 'app-dodajpse',
  templateUrl: './dodajpse.component.html',
  styleUrls: ['./dodajpse.component.css']
})
export class DodajpseComponent implements OnInit {
  pasme:String[]=[];
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
  pes:Pes={
    ime:'',
    pasma:'',
    datRoj:null,
    imaRodovnik:false,
    rodovnik:'',
    slika:'',
    _id:''
  }
napaka:String;
@ViewChild('prikaznaFile') inputSlika: ElementRef;
  constructor(private uporabnikService: UporabnikService, private pasmaService:PasmaService) { }

  ngOnInit() {
    this.uporabnikService
     .mojiPodatki()
     .subscribe(u=>this.uporabnik=u,error=>{console.log("Error:",error);this.napaka=JSON.parse(error._body).error;});
     this.pasmaService
     .pridobiPasme()
     .subscribe(pas=>this.pasme=pas);
  }

  onDodajPsa(){
    console.log("K");
      let inputSlika: HTMLInputElement = this.inputSlika.nativeElement;
      if(this.inputSlika.nativeElement.files[0]!=null&&this.pes.ime!=''&&this.pes.pasma!=''&&this.pes.datRoj!=null&&this.pes.rodovnik!=''){
      this.napaka="";
    this.uporabnikService
    .dodajPsa(this.pes,inputSlika.files[0])
    .subscribe(u=>{this.uporabnik=u, this.ngOnInit()},error=>{console.log("Error:",error);this.napaka=JSON.parse(error._body).error;});
  } else {
    if(this.inputSlika.nativeElement.files[0]!=null){
      console.log(this.inputSlika.nativeElement.files[0]);
    }
    if(this.pes.ime!=''){
      console.log("oki");
    }
    if(this.pes.datRoj!=null){
      console.log("heheh");
    }
    if(this.pes.rodovnik!=''){
      console.log("rodi");
    }
    if(this.pes.pasma!=''){
      console.log("pasm");
    }
    this.napaka="Izpolnite vsa polja!";
  }
  }

  onIzbrisi(_id:String){
    console.log(_id);
    this.uporabnikService.izbrisiPsa(_id)
    .subscribe(u=>this.uporabnik=u,error=>{console.log("Error:",error);this.napaka=JSON.parse(error._body).error;});
    this.ngOnInit();
/*    let win = (window as any);
    win.location.reload();*/
  }

}

import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone,  ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Izziv } from '../izziv';
import { IzzivService } from '../izziv.service';
import { LevanavComponent } from '../../domov/levanav/levanav.component';
import { NavigacijaComponent } from '../../navigacija.component';
import { Router } from '@angular/router';
import { MapsAPILoader } from 'angular2-google-maps/core';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-dodaj-izziv',
  templateUrl: './dodaj-izziv.component.html',
  styleUrls: ['./dodaj-izziv.component.css']
})
export class DodajIzzivComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl=new FormControl();
  public zoom: number;

  @ViewChild("search") searchElementRef: ElementRef;
  novIzziv:Izziv = {
    naslov:'',
    opis:'',
    kategorija:'',
    uporabnik:'',
    datOddaje: null,
    _id: '',
    datPoteka: null,
    lon: null,
    lng: null
  }
  napaka:String='';
  mapshw:Boolean=false;
  constructor(private izzivService: IzzivService, private router: Router,  private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {


  }

  private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });

      }
    }

  onDodajIzziv(){
    this.izzivService
    .dodajIzziv(this.novIzziv)
    .subscribe(u=>{this.novIzziv=u, this.napaka='', this.router.navigate(['/izzivi'])}, error => { console.log("Error:", error); this.napaka = JSON.parse(error._body).error; })
  }
  updateDiv(value){
    console.log(value.coords);
    this.latitude = value.coords.lat;
    this.longitude = value.coords.lng;
    this.novIzziv.lon = this.latitude;
    this.novIzziv.lng = this.longitude;
  }
  onDodajLokacijo(){
    this.mapshw=true;
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.searchControl = new FormControl();

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
            console.log(this.latitude + " "+ this.longitude);
        });
      });
    });

  }
}

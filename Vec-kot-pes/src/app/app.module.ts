import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija.component';
import { ZacetnaComponent } from './domov/zacetna.component';
import { PrijavaComponent } from './uporabnik/prijava/prijava.component';
import { RegistracijaComponent } from './uporabnik/registracija/registracija.component';
import { RouterModule }   from '@angular/router';
import { UporabnikService } from './uporabnik/uporabnik.service';
import { DomovComponent } from './domov/domov.component';
import { MojprofilComponent } from './uporabnik/mojprofil/mojprofil.component';
import { GlavnaComponent } from './domov/glavna.component';
import { AuthGuard } from './auth-guard.service';
import { NastavitveComponent } from './uporabnik/mojprofil/nastavitve.component';
import { DodajpseComponent } from './uporabnik/mojprofil/dodajpse.component';
import { PsipodatkiComponent } from './uporabnik/mojprofil/psipodatki/psipodatki.component';
import { IskanjeComponent } from './uporabnik/iskanje/iskanje.component';
import { OcenipasmoComponent } from './pasme/ocenipasmo/ocenipasmo.component';
import { PasmaService } from './pasme/pasma.service';
import { KinoloskadrustvaComponent } from './kinoloskadrustva/kinoloskadrustva.component';
import { PokaziprofilComponent } from './uporabnik/iskanje/pokaziprofil.component';
import { AktualnoComponent } from './aktualno/aktualno.component';
import { LevanavComponent } from './domov/levanav/levanav.component';
import { DodajIzzivComponent } from './izziv/dodaj-izziv/dodaj-izziv.component';
import { IzzivService } from './izziv/izziv.service';
import { VsiIzziviComponent } from './izziv/vsi-izzivi/vsi-izzivi.component';
import { PokaziIzzivComponent } from './izziv/pokazi-izziv/pokazi-izziv.component';
import { ObjavaService } from './objava/objava.service';
import { NovaObjavaComponent } from './objava/nova-objava/nova-objava.component';
import { PokaziObjavoComponent } from './objava/pokazi-objavo/pokazi-objavo.component';
import {AntiAutgGuardService} from './anti-autg-guard.service';
import { IscejodomComponent } from './iscejodom/iscejodom.component';
import { PoiscipasmoComponent } from './pasme/poiscipasmo/poiscipasmo.component';
import { LestvicaComponent } from './lestvica/lestvica.component';
import { PrijateljiComponent } from './prijatelji/prijatelji.component';
import { IzziviKategorijeComponent } from './izzivi-kategorije/izzivi-kategorije.component';
import { AgmCoreModule } from "angular2-google-maps/core";

@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    ZacetnaComponent,
    PrijavaComponent,
    RegistracijaComponent,
    DomovComponent,
    MojprofilComponent,
    GlavnaComponent,
    NastavitveComponent,
    DodajpseComponent,
    PsipodatkiComponent,
    IskanjeComponent,
    OcenipasmoComponent,
    KinoloskadrustvaComponent,
    PokaziprofilComponent,
    AktualnoComponent,
    LevanavComponent,
    DodajIzzivComponent,
    VsiIzziviComponent,
    PokaziIzzivComponent,
    NovaObjavaComponent,
    PokaziObjavoComponent,
    IscejodomComponent,
    PoiscipasmoComponent,
    LestvicaComponent,
    PrijateljiComponent,
    IzziviKategorijeComponent
  ],
  imports: [
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyButN5PnZqNGn9aFVYy9cF1XD8Ns1VezlU",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(), RouterModule.forRoot([
      {
        path: 'zacetna',
        component: ZacetnaComponent,
        canActivate: [AntiAutgGuardService],
      },
      {
        path: 'prijava',
        component: PrijavaComponent,
        canActivate: [AntiAutgGuardService]
      },
      {
        path: 'registracija',
        component: RegistracijaComponent,
        canActivate: [AntiAutgGuardService]
      },
      {
        path: 'domov',
        component: DomovComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'mojprofil',
        component: MojprofilComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'nastavitve',
        component: NastavitveComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dodajpse',
        component: DodajpseComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'mojprofil/psi',
        component: PsipodatkiComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'iskanje/:niz',
        component: IskanjeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profil/:uporIme',
        component: PokaziprofilComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profil/:uporIme/psi',
        component: PsipodatkiComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profil/:uporIme/prijatelji',
        component: PrijateljiComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ocenipasmo',
        component: OcenipasmoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'kinoloskadrustva',
        component: KinoloskadrustvaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'aktualno',
        component: AktualnoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'iscejodom',
        component: IscejodomComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'izzivi/dodajIzziv',
        component: DodajIzzivComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'izzivi',
        component: IzziviKategorijeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'izzivi/:kategorija',
        component: VsiIzziviComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'izzivi/pokazi/:id',
        component: PokaziIzzivComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'objava/:id',
        component: PokaziObjavoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'poiscipasmo',
        component: PoiscipasmoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: DomovComponent,
        canActivate: [AuthGuard],
      }
    ])
  ],
  providers: [UporabnikService, AuthGuard, PasmaService, IzzivService, ObjavaService, AntiAutgGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

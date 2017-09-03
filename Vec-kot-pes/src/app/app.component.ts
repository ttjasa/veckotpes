import { Component } from '@angular/core';
import { NavigacijaComponent } from './navigacija.component';
import { ZacetnaComponent } from './domov/zacetna.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  constructor(private navComp:NavigacijaComponent){}
  title = 'app works!';


}

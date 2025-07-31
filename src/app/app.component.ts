import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HousingLocationComponent} from './housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HomeComponent,
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {

}



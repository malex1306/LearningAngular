import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housing-location';
import {HousingService} from '../housing.service';


@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList : HousingLocation[] = [];
  filteredLocationList : HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
  this.housingService.getAllHousingLocations()
    .then((hLL : HousingLocation[]) => {
      this.housingLocationList = hLL;
      this.filteredLocationList = hLL;
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return
    }
    this.filteredLocationList = this.housingLocationList.filter(
      hl => hl?.city.toLowerCase().includes(text.toLowerCase()));
  }
}

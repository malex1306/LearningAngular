import {Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housing-location';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  })
  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(id)
      .then((hL : HousingLocation | undefined) => {
        this.housingLocation = hL;
    });
  }

submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
}
}

import { Injectable } from '@angular/core';
import {HousingLocation} from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url : string = 'http://localhost:3000/locations';
  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }


  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Homes application received: ${firstName}, ${lastName}, ${email}`);
  }

}

import { Injectable } from '@angular/core';
import { IHousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: IHousingLocation[];
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<IHousingLocation[]> {
    // return this.housingLocationList;
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<IHousingLocation | undefined> {
    // return this.housingLocationList.find(
    //   (housingLocation) => housingLocation.id === id
    // );
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  constructor() {}

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}

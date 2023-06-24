import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { IHousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList: IHousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: IHousingLocation[] = [];

  constructor() {
    // this.housingLocationList = this.housingService.getAllHousingLocations();
    // this.filteredLocationList = this.housingLocationList;
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: IHousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housinLocation) =>
        housinLocation?.city
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
    );
  }
}

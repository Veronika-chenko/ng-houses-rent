import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IHousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.scss'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: IHousingLocation;
}

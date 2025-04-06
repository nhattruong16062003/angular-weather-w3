import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationsService } from '../services/locations.service';
import { WeatherItemComponent } from '../weather-item/weather-item.component';

@Component({
  selector: 'app-favorite-locations',
  standalone: true,
  imports: [CommonModule, RouterModule, WeatherItemComponent],
  templateUrl: './favorite-locations.component.html',
  styleUrls: ['./favorite-locations.component.css']
})
export class FavoriteLocationsComponent {
  private locationsService = inject(LocationsService);
  favorites$ = this.locationsService.favorites$;

  removeFavorite(location: string): void {
    this.locationsService.removeFromFavorites(location);
  }
}
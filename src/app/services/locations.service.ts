import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private favoritesSubject = new BehaviorSubject<Weather[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  addToFavorites(weather: Weather): void {
    const currentFavorites = this.favoritesSubject.value;
    if (!currentFavorites.some(f => f.location === weather.location)) {
      weather.isFavorite = true;
      this.favoritesSubject.next([...currentFavorites, weather]);
    }
  }

  removeFromFavorites(location: string): void {
    const updatedFavorites = this.favoritesSubject.value.filter(
      f => f.location !== location
    );
    this.favoritesSubject.next(updatedFavorites);
  }
}
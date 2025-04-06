import { Routes } from '@angular/router';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { FavoriteLocationsComponent } from './favorite-locations/favorite-locations.component';

export const routes: Routes = [
    { path: '', component: WeatherDisplayComponent },
    { path: 'favorites', component: FavoriteLocationsComponent },
    { path: '**', redirectTo: '' }
];
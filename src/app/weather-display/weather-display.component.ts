import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationsService } from '../services/locations.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { RouterModule } from '@angular/router';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule, FormsModule, WeatherItemComponent, RouterModule],
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  currentWeather: Weather | null = null;
  locationInput = 'Ho Chi Minh';
  isLoading = false;
  errorMessage = '';
  weatherClass: string = '';

  onWeatherClassChanged(weatherClass: string): void {
    this.weatherClass = weatherClass;
  }

  constructor(
    private weatherService: WeatherService,
    private locationsService: LocationsService
  ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.weatherService.getCurrentWeather(this.locationInput).subscribe({
      next: (weather) => {
        this.currentWeather = weather;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Không thể lấy dữ liệu thời tiết';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  toggleFavorite(weather: Weather): void {
    if (weather.isFavorite) {
      this.locationsService.removeFromFavorites(weather.location);
    } else {
      this.locationsService.addToFavorites(weather);
    }
    weather.isFavorite = !weather.isFavorite;
  }
}
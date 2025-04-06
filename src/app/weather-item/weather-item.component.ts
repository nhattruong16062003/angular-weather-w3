import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Weather } from '../models/weather.model';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-weather-item',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
  @Input() weather!: Weather;
  @Input() showFavorite = true;
  @Output() toggleFavorite = new EventEmitter<Weather>();
  @Output() weatherClassChanged = new EventEmitter<string>();

  currentTime = new Date();

  ngOnInit() {
    // Gọi getWeatherClass ngay khi component khởi tạo
    this.getWeatherClass();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['weather'] && !changes['weather'].firstChange) {
      const newWeatherClass = this.getWeatherClass();
      this.weatherClassChanged.emit(newWeatherClass);
    }
  }
  getWeatherClass(): string {
    const c = this.weather.condition.toLowerCase();

    let weatherClass = 'default';
    if (c.includes('sunny') || c.includes('clear')) weatherClass = 'sunny';
    else if (c.includes('rain') || c.includes('drizzle') || c.includes('shower')) weatherClass = 'rainy';
    else if (c.includes('cloud') || c.includes('overcast') || c.includes('partly')) weatherClass = 'cloudy';
    else if (c.includes('thunder') || c.includes('storm')) weatherClass = 'stormy';
    else if (c.includes('snow') || c.includes('blizzard') || c.includes('ice') || c.includes('sleet')) weatherClass = 'snowy';
    else if (c.includes('fog') || c.includes('mist') || c.includes('haze')) weatherClass = 'foggy';

    this.weatherClassChanged.emit(weatherClass);  // Phát sự kiện với giá trị weatherClass

    return weatherClass;
  }

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.weather);
  }
}
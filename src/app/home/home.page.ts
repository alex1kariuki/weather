import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  location: string = 'Nairobi';
  weatherForecast: any[];
  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.getCurrentCity();
  }
  segmentChanged($event) {
    console.log($event);
  }
  getCurrentCity(){
    const lat = '33.44';
    const lon = '94.04';
    this.currentWeather(lat, lon);
  }
  currentWeather(lat: string, lon: string) {
    this.weather.getCurrentWeather(lat, lon).then((data) => {
      console.log('Weather Data Returned', data);
    }).catch((error) => {
      console.log(error);
    })
  }
  forecastWeather(lat: string, lon: string) {

  }
}

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
  nextFive: any[];

  programOpts = {
    initialSlide: 0,
    slidesPerView: 2.8,
    spaceBetween: 1,
    speed: 400
  };
  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.forecastWeather();
    this.getNextFiveDays()
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    for (let segment = 0; segment < this.weatherForecast.length; segment++) {
      if (ev.detail.value === 'home') {
        console.log(ev.detail.value)
      }
    }
    // if (ev.detail.value === 'home') {
    //   this.home = true;
    //   this.gym = false;
    //   this.crossfit = false;
    // } else if (ev.detail.value === 'gym') {
    //   this.home = false;
    //   this.gym = true;
    //   this.crossfit = false;
    // } else if (ev.detail.value === 'crossfit') {
    //   this.home = false;
    //   this.gym = false;
    //   this.crossfit = true;
    // }
  }
  getCurrentCity() {
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
  forecastWeather() {
    this.weatherForecast = [
      { time: '9:00 AM', conditions: 'sunny', temparature: '28' },
      { time: '11:00 AM', conditions: 'sunny', temparature: '28' },
      { time: '01:00 PM', conditions: 'sunny', temparature: '28' },
      { time: '3:00 PM', conditions: 'sunny', temparature: '28' },
      { time: '5:00 PM', conditions: 'sunny', temparature: '28' },
      { time: '7:00 PM', conditions: 'sunny', temparature: '28' },
      { time: '9:00 PM', conditions: 'sunny', temparature: '28' },
      { time: '11:00 PM', conditions: 'sunny', temparature: '28' },
    ]
  }
  getNextFiveDays() {
    this.nextFive = [
      { id: 1, title: 'Mon, 16' },
      { id: 2, title: 'Tue, 17' },
      { id: 3, title: 'Wed, 18' },
      { id: 4, title: 'Thur, 19' },
      { id: 5, title: 'Fri, 20' },
    ]
  }
}

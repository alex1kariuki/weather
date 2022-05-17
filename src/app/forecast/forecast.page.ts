import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  cityName: string;
  weather: any[];
  constructor( private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.name) {
        // Workout title and image
        this.cityName = params.name;
      }
    });
  }

  ngOnInit() {
    this.getWeeklyWeather();
  }
getWeeklyWeather(){
  this.weather = [
    { day: 'Sunday', temp: '22', condition: '' },
    { day: 'Monday', temp: '22', condition: '' },
    { day: 'Tuesday', temp: '22', condition: '' },
    { day: 'Wednesday', temp: '22', condition: '' },
    { day: 'Thursday', temp: '22', condition: '' },
    { day: 'Friday', temp: '22', condition: '' },
    { day: 'Saturday', temp: '22', condition: '' }
  ]
}
}

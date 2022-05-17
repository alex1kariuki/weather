import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  towns: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.getTowns();
  }
  getTowns() {
    this.towns = [
      { city: 'Kisumu', condition: 'Cloudy', temp: '28' },
      { city: 'Nairobi', condition: 'Sunny', temp: '28' },
      { city: 'Mombasa', condition: 'Sunny', temp: '28' },
      { city: 'Kiambu', condition: 'Rainy', temp: '13' },
    ]
  }
  getForecast(town) {
    console.log(town)
    const navigationExtras: NavigationExtras = {
      queryParams: {
        name: town.city,
        condition: town.condition,
        temparature: town.temp
      }
    };
    this.router.navigate(['forecast'], navigationExtras);
  }
}

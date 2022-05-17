import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherAPI = environment.weatherAPI;
  weatherApiKey = environment.weatherKey;
  constructor(private api: ApiService) { }

  async getCurrentWeather(lat: string, lon: string){
    return await this.api.get(`${this.weatherAPI}/weather?lat=${lat}&lon=${lon}&appid=${this.weatherApiKey}`).subscribe((data)=>{
      console.log('getCurrentWeather', data);
    })
  }
  async weeklyForecast(lat: string, lon: string, part: string){ //part is like hourly, daily
    return await this.api.get(`${this.weatherAPI}/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${this.weatherApiKey}`);
  }
}

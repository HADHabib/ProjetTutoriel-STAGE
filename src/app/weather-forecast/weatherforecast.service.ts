import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherforecastService {
  constructor(private http: HttpClient) {}
  getWeatherData(nameCity: string) {
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
        nameCity +
        '&appid=ff1bc4683fc7325e9c57e586c20cc03e'
    );
  }
}

import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WeatherforecastService } from './weatherforecast.service';
@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  message: string = '';
  ForecastData: any[] = [];
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  dateWithPipe: any;

  constructor(
    public dialogRef: MatDialogRef<WeatherForecastComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ForecastService: WeatherforecastService
  ) {}

  ngOnInit(): void {
    this.getWeatherForecast(this.data.dataKey.name);
  }
  getWeatherForecast(data: string) {
    this.ForecastService.getWeatherData(data).subscribe((data) =>
      this.setForecastData(data)
    );
  }
  setForecastData(data: any) {
    for (let dataA of data.list) {
      let str = dataA.dt_txt;
      let [dateComponents, timeComponents] = str.split(' ');
      let [month, day, year] = dateComponents.split('-');
      let [hours, minutes, seconds] = timeComponents.split(':');
      let date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

      if (date.getHours() === 15) {
        this.ForecastData.push(dataA);
        let index = this.ForecastData.length - 1;
        this.ForecastData[index].temp_celcius = (
          this.ForecastData[index].main.temp - 273.15
        ).toFixed(0);
        this.ForecastData[index].temp_min = (
          this.ForecastData[index].main.temp_min - 273.15
        ).toFixed(0);
        this.ForecastData[index].temp_max = (
          this.ForecastData[index].main.temp_max - 273.15
        ).toFixed(0);
        this.ForecastData[index].temp_feels_like = (
          this.ForecastData[index].main.feels_like - 273.15
        ).toFixed(0);
      }
    }
  }
}

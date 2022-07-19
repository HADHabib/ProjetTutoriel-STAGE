import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceService } from './weather-service.service';
import { SharedHomepageService } from '../shared-homepage.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopupErrorCityComponent } from '../popup-error-city/popup-error-city.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  
})
export class HomepageComponent {
  WeatherData:any[]= [];
  message:string="";
  letters = '0123456789ABCDEF';
    color = '#';
    pages: number = 1;
  clickEventsubscription:Subscription | undefined;
  constructor(private WeatherService : WeatherServiceService,private appService:SharedHomepageService) {
    this.clickEventsubscription=this.appService.getClickEvent().subscribe(()=>{
      this.newWeatherData();
  })
   }
   getRandomColor( ) {
    this.color = "#";
    for (var i = 0; i < 6; i++) {

      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color;
   
  }
  ngOnInit() {


  }

  newWeatherData(){
    this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg)

    this.getWeatherData(this.message,this.getRandomColor());
  }
  getWeatherData(nameCity : string,color : string){
    this.WeatherService.getWeatherData(nameCity).subscribe(data =>{if(data!=undefined){ this.setWeatherData(data,color);} });
  }

  setWeatherData(data: any,color : string){
    this.WeatherData.push(data);
    let index = this.WeatherData.length-1;
    let sunsetTime = new Date(this.WeatherData[index].sys.sunset * 1000);
    this.WeatherData[index].sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData[index].isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData[index].temp_celcius = (this.WeatherData[index].main.temp - 273.15).toFixed(0);
    this.WeatherData[index].temp_min = (this.WeatherData[index].main.temp_min - 273.15).toFixed(0);
    this.WeatherData[index].temp_max = (this.WeatherData[index].main.temp_max - 273.15).toFixed(0);
    this.WeatherData[index].temp_feels_like = (this.WeatherData[index].main.feels_like - 273.15).toFixed(0);
    this.WeatherData[index].color=color;
  }

}
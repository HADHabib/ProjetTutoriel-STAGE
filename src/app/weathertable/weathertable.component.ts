import { Component, OnInit, DoCheck } from '@angular/core';
import { cityList } from './cityList';
import { mockData } from './mockData';
import { WeatherService } from './weather.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataStorageService } from '../data-storage.service';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-weathertable',
  templateUrl: './weathertable.component.html',
  styleUrls: ['./weathertable.component.css'],
})
export class WeathertableComponent implements OnInit {
  dataList: mockData[] = [];
  dataShow: mockData[] = [];
  dataSearch: mockData[] = [];
  pages: number = 1;
  numberEntries: number = 5;
  search: string = '';
  listPages: number[] = [];
  sort: string = 'ascName';
  sortN: string = 'ascName';
  sortT: string = 'ascTemp';
  sortF: string = 'ascFeels';
  sortH: string = 'ascHumidity';
  expectedEntries: number = 0;
  constructor(
    private WeatherService: WeatherService,
    private storageService: DataStorageService
  ) {
    if (!this.storageService.getUserSettings().length) {
      this.expectedEntries = cityList.length;
    } else {
      this.expectedEntries =
        cityList.length + this.storageService.getUserSettings().length;
    }
  }

  ngOnInit(): void {
    for (let name of cityList) {
      this.getWeatherData(name);
    }
    if (this.storageService.getUserSettings().length) {
      for (let data of this.storageService.getUserSettings()) {
        let newdata: mockData = {
          cityName: '',
          temp: '',
          feelslike: '',
          humidity: 0,
        };
        newdata.cityName = data.Name;
        newdata.temp = data.Temp;
        newdata.feelslike = data.FeelsLike;
        newdata.humidity = Number(data.Humidity);
        this.dataList.push(newdata);
      }
    }
  }
  ngDoCheck() {
    this.refreshSearch();
    this.updateListPage();
  }
  getWeatherData(nameCity: string) {
    this.WeatherService.getWeatherData(nameCity).subscribe(
      (data) => {
        if (data != undefined) {
          this.setWeatherData(data);
        }
      },
      (err) => console.error(err)
    );
  }
  selectChangeHandler(event: any) {
    this.numberEntries = event.target.value;
    this.pages = 1;
    this.refreshSearch();
  }
  updateListPage() {
    let stock = this.dataSearch.length;
    let i = 1;
    this.listPages = [];
    while (stock > 0) {
      this.listPages.push(i);
      i += 1;
      stock -= this.numberEntries;
    }
  }
  newCity(name: string) {
    this.getWeatherData(name);
    this.refreshSearch();
  }
  changePage(newPage: number) {
    this.pages = newPage;
    this.refreshSearch();
  }

  refreshSearch() {
    if (this.dataList.length > this.expectedEntries) {
      this.expectedEntries += 1;
    }
    if (this.search != '') {
      this.dataSearch = [];
      for (let data of this.dataList) {
        if (data.cityName.toLowerCase().includes(this.search.toLowerCase())) {
          this.dataSearch.push(data);
        }
      }
    } else {
      this.dataSearch = this.dataList;
    }
    if (this.sort === 'ascName') {
      this.dataSearch.sort((a, b) =>
        a.cityName.toLowerCase().localeCompare(b.cityName.toLowerCase())
      );
    } else if (this.sort === 'descName') {
      this.dataSearch
        .sort((a, b) =>
          a.cityName.toLowerCase().localeCompare(b.cityName.toLowerCase())
        )
        .reverse();
    } else if (this.sort === 'ascTemp') {
      this.dataSearch.sort((a, b) => Number(a.temp) - Number(b.temp));
    } else if (this.sort === 'descTemp') {
      this.dataSearch.sort((a, b) => Number(b.temp) - Number(a.temp));
    } else if (this.sort === 'ascFeels') {
      this.dataSearch.sort((a, b) => Number(a.feelslike) - Number(b.feelslike));
    } else if (this.sort === 'descFeels') {
      this.dataSearch.sort((a, b) => Number(b.feelslike) - Number(a.feelslike));
    } else if (this.sort === 'ascHumidity') {
      this.dataSearch.sort((a, b) => a.humidity - b.humidity);
    } else if (this.sort === 'descHumidity') {
      this.dataSearch.sort((a, b) => b.humidity - a.humidity);
    }
    this.updateListPage();
    this.dataShow = [];
    for (
      let i = (this.pages - 1) * this.numberEntries;
      i <
      (this.pages * this.numberEntries <= this.dataSearch.length
        ? this.pages * this.numberEntries
        : this.dataSearch.length);
      i++
    ) {
      this.dataShow.push(this.dataSearch[i]);
    }
  }
  setWeatherData(data: any) {
    let newdata: mockData = {
      cityName: '',
      temp: '',
      feelslike: '',
      humidity: 0,
    };
    newdata.cityName = data.name;
    newdata.temp = (data.main.temp - 273.15).toFixed(0);
    newdata.feelslike = (data.main.feels_like - 273.15).toFixed(0);
    newdata.humidity = data.main.humidity;
    this.dataList.push(newdata);
  }
}

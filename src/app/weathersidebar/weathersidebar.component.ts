import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { PopupAddWeatherComponent } from '../popup-add-weather/popup-add-weather.component';
@Component({
  selector: 'app-weathersidebar',
  templateUrl: './weathersidebar.component.html',
  styleUrls: ['./weathersidebar.component.css']
})
export class WeathersiderbarComponent implements OnInit {

  constructor(public dialogRef : MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef = this.dialogRef.open(PopupAddWeatherComponent, {
      width: '200px',
      height: '120px'
    })
  }
}

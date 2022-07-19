import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog"
import { PopupAddWeatherComponent } from '../popup-add-weather/popup-add-weather.component';
@Component({
  selector: 'app-homepagesidebar',
  templateUrl: './homepagesidebar.component.html',
  styleUrls: ['./homepagesidebar.component.css']
})
export class HomepagesidebarComponent implements OnInit {

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

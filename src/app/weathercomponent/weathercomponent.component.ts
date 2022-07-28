import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HighlightDirective } from '../highlight.directive';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
@Component({
  selector: 'app-weathercomponent',
  templateUrl: './weathercomponent.component.html',
  styleUrls: ['./weathercomponent.component.css'],
})
export class WeathercomponentComponent {
  constructor(public dialogRef: MatDialog) {}
  openDialog(dataS: any) {
    const dialogRef = this.dialogRef.open(WeatherForecastComponent, {
      width: '400px',
      height: '260px',
      data: {
        dataKey: dataS,
      },
    });
  }
  @Input() data: any;
  @Output() newItemEvent = new EventEmitter<string>();
}

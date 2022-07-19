import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddWeatherComponent } from './popup-add-weather/popup-add-weather.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Project";
  constructor(){

  }

}

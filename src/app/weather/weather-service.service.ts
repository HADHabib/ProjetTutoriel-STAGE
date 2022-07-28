import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PopupErrorCityComponent } from '../popup-error-city/popup-error-city.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient, public dialogRef: MatDialog) {}
  getWeatherData(nameCity: string) {
    return this.http
      .get<any>(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          nameCity +
          '&appid=ff1bc4683fc7325e9c57e586c20cc03e'
      )
      .pipe(catchError(this.handleError<any>('getWeatherData')));
  }
  openDialog() {
    const dialogRef = this.dialogRef.open(PopupErrorCityComponent, {
      width: '200px',
      height: '150px',
    });
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      this.openDialog();

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

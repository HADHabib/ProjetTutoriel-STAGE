import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page2Component } from './page2/page2.component';
import { PageComponent } from './page/page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page3Component } from './page3/page3.component';
import { Page2sidebarComponent } from './page2sidebar/page2sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgxPaginationModule } from 'ngx-pagination';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { WeathercomponentComponent } from './weathercomponent/weathercomponent.component';
import { HighlightDirective } from './highlight.directive';
import { HomepagesidebarComponent } from './homepagesidebar/homepagesidebar.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog"
import { PopupAddWeatherComponent } from './popup-add-weather/popup-add-weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { PopupErrorCityComponent } from './popup-error-city/popup-error-city.component';
import { InputDataComponent } from './page3/input-data/input-data.component';
import { Page4Component } from './page4/page4.component';
import { InputDataComponent2 } from './page4/input-data/input-data.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataStorageService } from './data-storage.service';
import { PopupMessagesComponent } from './data-table/popup-messages/popup-messages.component';
import { CurrencyconvComponent } from './currencyconv/currencyconv.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    PageComponent,
    HomepageComponent,
    Page3Component,
    Page2sidebarComponent,
    WeathercomponentComponent,
    HighlightDirective,
    HomepagesidebarComponent,
    WeatherForecastComponent,
    PopupErrorCityComponent,
    InputDataComponent,
    Page4Component,
    InputDataComponent2,
    ReactiveformComponent,
    DataTableComponent,
    PopupMessagesComponent,
    CurrencyconvComponent,
  ],
  
  entryComponents:[PopupAddWeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  // HttpClientInMemoryWebApiModule.forRoot(
   //   InMemoryDataService, { dataEncapsulation: false }
   // ),
    FormsModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule
   

      ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

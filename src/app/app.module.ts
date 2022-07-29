import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo/todo.component';
import { WeathertableComponent } from './weathertable/weathertable.component';
import { WeatherComponent } from './weather/weather.component';
import { InputdataV2Component } from './inputdataV2/inputdataV2.component';
import { TodosidebarComponent } from './todosidebar/todosidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WeathercomponentComponent } from './weathercomponent/weathercomponent.component';
import { HighlightDirective } from './highlight.directive';
import { WeathersiderbarComponent } from './weathersidebar/weathersidebar.component';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { PopupAddWeatherComponent } from './popup-add-weather/popup-add-weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { PopupErrorCityComponent } from './popup-error-city/popup-error-city.component';
import { InputDataComponent } from './inputdataV2/input-data/input-data.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { InputGenericComponent } from './input-example/input-generic/input-generic.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MessagesComponent } from './data-table/data-table.component';
import { DataStorageService } from './data-storage.service';
import { PopupMessagesComponent } from './data-table/popup-messages/popup-messages.component';
import { DraganddropComponent } from './draganddrop/currencyconv.component';
import { MatIconModule } from '@angular/material/icon';
import { DragdropfileDirective } from './draganddrop/dragdropfile.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IncidentExampleComponent } from './incident-example/incident-example.component';
import { IncidentNumberComponent } from './incident-example/incident-number/incident-number.component';
import { IncidentInfoComponent } from './incident-example/incident-info/incident-info.component';
import { ImagedirectiveDirective } from './incident-example/imagedirective.directive';
import { AdminModule } from './admin/admin.module';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    WeathertableComponent,
    WeatherComponent,
    InputdataV2Component,
    TodosidebarComponent,
    WeathercomponentComponent,
    HighlightDirective,
    WeathersiderbarComponent,
    WeatherForecastComponent,
    PopupErrorCityComponent,
    InputDataComponent,
    InputExampleComponent,
    InputGenericComponent,
    ReactiveformComponent,
    MessagesComponent,
    PopupMessagesComponent,
    DraganddropComponent,
    DragdropfileDirective,
    IncidentExampleComponent,
    IncidentNumberComponent,
    IncidentInfoComponent,
    ImagedirectiveDirective,
  ],

  entryComponents: [PopupAddWeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
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
    MatProgressSpinnerModule,
    MatIconModule,
    DragDropModule,
    AdminModule,
    NgChartsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    DataStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { WeathertableComponent } from './weathertable/weathertable.component';
import { WeatherComponent } from './weather/weather.component';
import { InputdataV2Component } from './inputdataV2/inputdataV2.component';
import { TodosidebarComponent } from './todosidebar/todosidebar.component';
import { WeathersiderbarComponent } from './weathersidebar/weathersidebar.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MessagesComponent } from './data-table/data-table.component';
import { DraganddropComponent } from './draganddrop/currencyconv.component';
import { IncidentExampleComponent } from './incident-example/incident-example.component';
import { TableComponent } from './admin/table/table.component';
import { CardsComponent } from './admin/cards/cards.component';
import { AuthentificationComponent } from './admin/authentification/authentification.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthentificationGuard } from './admin/authentification.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather/(sidebarA:weathersidebar)', pathMatch: 'full' },
  {path:"inputdataV2",component: InputdataV2Component},
  {path:"weathertable",component:WeathertableComponent},
  {path: "todo",children:[
    { path: '', component:TodoComponent },
    {path:"todosidebar",component:TodosidebarComponent, outlet:"sidebarA"}
  ]},
  {path: "weather",children:[
    { path: '', component:WeatherComponent },
    {path:"weathersidebar",component:WeathersiderbarComponent, outlet:"sidebarA"}
  ]},
  {path:"inputexampleV1",component:InputExampleComponent},
  {path:"reactiveform",component:ReactiveformComponent},
  {path:"messagerie",component:MessagesComponent},
  {path:"draganddrop",component:DraganddropComponent},
  {path:"incident",component:IncidentExampleComponent},
  {path:"table",component:TableComponent},
  {path:"cards",component:CardsComponent},
  {path:"auth",component:AuthentificationComponent},
  {path:"admin",component:CardsComponent, canActivate:[AuthentificationGuard]},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthentificationGuard]}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

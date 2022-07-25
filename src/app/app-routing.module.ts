import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { PageComponent } from './page/page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page3Component } from './page3/page3.component';
import { Page2sidebarComponent } from './page2sidebar/page2sidebar.component';
import { HomepagesidebarComponent } from './homepagesidebar/homepagesidebar.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CurrencyconvComponent } from './currencyconv/currencyconv.component';
import { IncidentExampleComponent } from './incident-example/incident-example.component';
import { TableComponent } from './admin/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage/(sidebarA:homepagesidebar)', pathMatch: 'full' },
  {path:"page3",component: Page3Component},
  {path:"page",component:PageComponent},
  {path: "page2",children:[
    { path: '', component:Page2Component },
    {path:"page2sidebar",component:Page2sidebarComponent, outlet:"sidebarA"}
  ]},
  {path: "homepage",children:[
    { path: '', component:HomepageComponent },
    {path:"homepagesidebar",component:HomepagesidebarComponent, outlet:"sidebarA"}
  ]},
  {path:"page4",component:InputExampleComponent},
  {path:"reactiveform",component:ReactiveformComponent},
  {path:"datatable",component:DataTableComponent},
  {path:"currency",component:CurrencyconvComponent},
  {path:"incident",component:IncidentExampleComponent},
  {path:"table",component:TableComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

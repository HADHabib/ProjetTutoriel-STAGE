import { Component, OnInit } from '@angular/core';
import { DoughnutModel } from '../doughnut.model';
import { ColorOptions } from '../colors.enum';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  ngOnInit(): void {
  }

  datalist:number[]=[1,2,3,4,5,6]


  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A' },
      { data: [ 50, 150, 120 ], label: 'Series B' },
      { data: [ 250, 130, 70 ], label: 'Series C' }
    ];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    aspectRatio: 1,
    responsive: true,
    rotation: Math.PI / 2,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  
  };

}

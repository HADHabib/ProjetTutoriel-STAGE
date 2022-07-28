import { Component, OnInit } from '@angular/core';
import { DoughnutModel } from '../doughnut.model';
import { ColorOptions } from '../colors.enum';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  ngOnInit(): void {}
  showDiv: boolean = false;
  timeLeft: number = 1;
  timeLeft2: number = 1;
  interval: any;
  started: boolean = false;
  interval2: any;
  marginTop: number = 0;
  marginLeft: number = 0;
  marginTop2: number = 0;
  marginLeft2: number = 0;
  count: number = 0;
  startTimer() {
    this.started = true;
    this.intervalle1();
  }
  intervalle1() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 1;
        clearInterval(this.interval);
        this.showDiv = true;
        this.marginLeft = Math.random() * 900;
        this.marginTop = Math.random() * 250;
        this.marginLeft2 = Math.random() * 900;
        this.marginTop2 = Math.random() * 250;
        this.intervalle2();
      }
    }, 1000);
  }
  intervalle2() {
    this.interval2 = setInterval(() => {
      if (this.timeLeft2 > 0) {
        this.timeLeft2--;
      } else {
        this.showDiv = false;
        this.timeLeft2 = 1;
        clearInterval(this.interval2);
        this.intervalle1();
      }
    }, 1000);
  }
  pauseTimer() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
    this.timeLeft = 1;
    this.timeLeft2 = 1;
    this.started = false;
    this.showDiv = false;
  }
  onClick() {
    this.count += 1;
    console.log(this.count);
  }
}

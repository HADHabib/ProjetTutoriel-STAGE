import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencyconv',
  templateUrl: './currencyconv.component.html',
  styleUrls: ['./currencyconv.component.css']
})
export class CurrencyconvComponent implements OnInit {
  convertTo!: string;
  constructor() { }

  ngOnInit(): void {
  }
  selectChangeHandler(event: any){
    this.convertTo=event.target.value;
  }
}

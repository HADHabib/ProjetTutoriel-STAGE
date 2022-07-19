import { Component, OnInit } from '@angular/core';
import { dataType } from './dataType';
import { dataList } from './list-dataType';
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  inputs: dataType[]= dataList;
  constructor() { }

  ngOnInit(): void {
  }

}

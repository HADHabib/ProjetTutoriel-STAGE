import { Component, OnInit } from '@angular/core';
import { dataType } from './dataType';
import { dataList } from './list-dataType';
@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css'],
})
export class InputExampleComponent implements OnInit {
  inputs: dataType[] = dataList;
  constructor() {}

  ngOnInit(): void {}
}

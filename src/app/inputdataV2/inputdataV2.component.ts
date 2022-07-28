import { Component, OnInit } from '@angular/core';
import { dataType } from './dataType';
import { dataList } from './list-dataType';
@Component({
  selector: 'app-inputdataV2',
  templateUrl: './inputdataV2.component.html',
  styleUrls: ['./inputdataV2.component.css'],
})
export class InputdataV2Component implements OnInit {
  inputs: dataType[] = dataList;
  constructor() {}

  ngOnInit(): void {}
  updateValue(index: number, newItem: any) {
    if (this.inputs[index].type === 'checkbox') {
      this.inputs[index].value = !this.inputs[index].value;
    } else {
      this.inputs[index].value = newItem;
    }
    console.log(this.inputs[index]);
  }
}

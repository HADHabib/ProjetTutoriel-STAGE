import { Component, OnInit } from '@angular/core';
import { dataType } from './dataType';
import { dataList } from './list-dataType';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  inputs: dataType[]= dataList;
  constructor() { }

  ngOnInit(): void {
  }
 updateValue(index:number,newItem:any){
  if(this.inputs[index].type==="checkbox"){
    this.inputs[index].value=!this.inputs[index].value;
  }else{
    this.inputs[index].value=newItem;
  }

 }
}

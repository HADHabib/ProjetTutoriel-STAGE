import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-data2',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent2 implements OnInit {
  modelInput:any;
  @Input() typeInput: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  sendUpdatedInput():void{
    console.log(this.modelInput)
  }

}

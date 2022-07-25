import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-generic',
  templateUrl: './input-generic.component.html',
  styleUrls: ['./input-generic.component.css']
})
export class InputGenericComponent implements OnInit {
  modelInput:any;
  @Input() dataInput: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  sendUpdatedInput():void{
    console.log(this.modelInput)
  }

}

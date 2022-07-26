import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {
  modelInput:any;
  @Input() typeInput: string | undefined;
  @Output() newInputValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendUpdatedInput():void{
    this.newInputValue.emit(this.modelInput);
  }  

}

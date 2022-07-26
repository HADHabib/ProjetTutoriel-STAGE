import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-todosidebar',
  templateUrl: './todosidebar.component.html',
  styleUrls: ['./todosidebar.component.css']
})

export class TodosidebarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {

  }
  onClickAdd(){
    this.sharedService.sendClickEvent();
  }

}

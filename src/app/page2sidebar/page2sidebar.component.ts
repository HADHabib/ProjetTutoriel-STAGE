import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-page2sidebar',
  templateUrl: './page2sidebar.component.html',
  styleUrls: ['./page2sidebar.component.css']
})

export class Page2sidebarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {

  }
  onClickAdd(){
    this.sharedService.sendClickEvent();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { MessagestorageService } from '../messagestorage.service';

@Component({
  selector: 'app-popup-messages',
  templateUrl: './popup-messages.component.html',
  styleUrls: ['./popup-messages.component.css']
})
export class PopupMessagesComponent implements OnInit {
  @Input() DataFriend: any;
  @Input() DataUser: any;
  constructor(private MessageService: MessagestorageService) { }

  ngOnInit(): void {
  }
  GetMsgs(){
    if(this.MessageService.getMsgs(this.DataFriend[1]).length===undefined){
      return [];
    }else{

      return this.MessageService.getMsgs(this.DataFriend[1]);
    }
   
  }
  AddMsgs(msg:string){
    this.MessageService.addMsg(this.DataFriend[1],[this.DataUser,msg]);
  }
}

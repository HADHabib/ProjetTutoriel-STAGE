import { Component, OnInit } from '@angular/core';
import { MessagestorageService } from './messagestorage.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  username:string | undefined;
  constructor(private MessageService : MessagestorageService) { }
  currentmsgs:any=['',''];
  ngOnInit(): void {
  }
  OnAddUsername(name : string){

    if(name!=""){
      this.username=name;
      let exist = false;

      if(this.MessageService.getUsers().length!=undefined ){
        for(let data of this.MessageService.getUsers()){
          if(data === this.username){
            exist=true;
          }
        }
        if(!exist){
          this.MessageService.addUser(this.username);
        }
      }else{
        this.MessageService.addUser(this.username);
      }
    }
  }

  
  DefineData(data :any){
    if(this.currentmsgs[0]===data[0]){
      this.currentmsgs=['','']
    }else{
      this.currentmsgs=data;
    }
    
  }
  getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  OnAddFriend(friend:string){
    let exist=false;
      for(let dataA of this.MessageService.getUsers()){
        if(dataA === friend){
          if(this.MessageService.getFriends(this.username!).length != undefined){
            for(let data of this.MessageService.getFriends(this.username!)){
              if(data[0] === friend){
                exist=true;
              }
            }
            if(!exist){
              let number = this.getRandomArbitrary(1000000,9999999);
              this.MessageService.addFriend(this.username!,[friend,number]);
              this.MessageService.addFriend(friend,[this.username!,number]);
            }
          }else{
            let number = this.getRandomArbitrary(1000000,9999999);
            this.MessageService.addFriend(this.username!,[friend,number]);
            this.MessageService.addFriend(friend,[this.username!,number]);
          }
  
        }
      }
    }
  
  getFriends(){

    return Array.of(this.MessageService.getFriends(this.username!))
  }

}

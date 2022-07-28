import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagestorageService {
  private listusers: string = 'listUsers';

  constructor() {}

  addUser(newuser: any) {
    let currentusers = this.getUsers();
    if (this.getUsers().length === undefined) {
      localStorage.setItem(this.listusers, JSON.stringify([newuser]));
    } else {
      currentusers.push(newuser);
      localStorage.setItem(this.listusers, JSON.stringify(currentusers));
    }
  }
  addFriend(username: string, friend: any) {
    let currentfriends = this.getFriends(username);
    if (currentfriends.length === undefined) {
      localStorage.setItem(username, JSON.stringify([friend]));
    } else {
      currentfriends.push(friend);
      localStorage.setItem(username, JSON.stringify(currentfriends));
    }
  }
  getFriends(username: string) {
    let data = localStorage.getItem(username);
    return JSON.parse(data || '{}');
  }
  getMsgs(key: string) {
    let data = localStorage.getItem(key);
    return JSON.parse(data || '{}');
  }
  getUsers() {
    let data = localStorage.getItem(this.listusers);
    return JSON.parse(data || '{}');
  }

  cleanAll() {
    localStorage.clear();
  }
  addMsg(key: string, msg: any) {
    let currentmessages = this.getMsgs(key);
    if (currentmessages.length === undefined) {
      localStorage.setItem(key, JSON.stringify([msg]));
    } else {
      currentmessages.push(msg);
      localStorage.setItem(key, JSON.stringify(currentmessages));
    }
  }
}

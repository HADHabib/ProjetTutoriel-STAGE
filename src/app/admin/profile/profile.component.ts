import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;
  ngOnInit() {
      this.items = [
          {label: 'To do list'},
          {label: 'Favoris'},
          {label: 'Chatbox'},
          {label: 'Settings'},
          {label: 'Comments',routerLink:'/profile/comments'}
      ];
      this.activeItem = this.items[0];
  }
  constructor() { }


}

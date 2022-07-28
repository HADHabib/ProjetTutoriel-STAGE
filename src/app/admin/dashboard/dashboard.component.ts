import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AdminComponent } from '../admin/admin.component';
import { AuthentificationService } from '../authentification.service';
import { DataList } from '../table/datalist';
import { DataTableModel } from '../table/datatable.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  datalist: DataTableModel[] = DataList;
  ngOnInit(): void {}
}

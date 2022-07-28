import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DataList } from './datalist';
import { DataTableModel } from './datatable.model';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { workflowList } from '../workflowlist';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  datalist: DataTableModel[] = DataList;
  data!: DataTableModel;
  dataDialog!: boolean;
  cols: any[] = [];
  @ViewChild('dt')
  dt!: Table;
  selectedType!: string;
  types: any[];
  submitted!: boolean;
  workflowlist: string[] = workflowList;
  newData: boolean = false;
  indexUpdate: number = 0;
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, public datepipe: DatePipe) {
    this.types = [
      'Incident',
      'Trading Account',
      'Personal Transaction',
      'Outside Business Activity',
      'Political Contribution',
      'Restricted list and NDAs',
    ]
    this.types.sort();
    workflowList.sort();
  }

  ngOnInit(): void {

    this.cols = [
      { field: 'type', header: 'Type' },
      { field: 'dateOfRequest', header: 'Date of request' },
      { field: 'businessIssuer', header: 'Business Issuer' },
      { field: 'departement', header: 'Department' },
      { field: 'office', header: 'Office' },
      { field: 'workflow', header: 'Workflow' },
      { field: 'remediationPlan', header: 'Remediation plan' },
      { field: 'status', header: 'Status' },

    ];
  }

  openNew() {
    this.data = {
      type: '',
      dateOfRequest: new Date,
      businessIssuer: '',
      departement: '',
      office: '',
      workflow: '',
      remediationPlan: '',
      status: '',
    };
    this.submitted = false;
    this.dataDialog = true;
  }
  setfilters() {
    this.dt.filter(this.selectedType, 'type', 'equals');
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  clear(table: Table) {
    table.clear();
  }
  editProduct(data: DataTableModel, index: number) {
    this.data = { ...data };
    this.dataDialog = true;
    this.indexUpdate = index;
  }
  hideDialog() {
    this.dataDialog = false;
    this.submitted = false;
  }
  deleteProduct(data: DataTableModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the request ' + data.type + ' of ' + this.datepipe.transform(data.dateOfRequest, 'yyyy/MM/dd') + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.datalist = this.datalist.filter(val => val !== data);
        this.data = {
          type: '',
          dateOfRequest: new Date,
          businessIssuer: '',
          departement: '',
          office: '',
          workflow: '',
          remediationPlan: '',
          status: '',
        };
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Request Deleted', life: 3000 });
      }

    });
  }

  saveProduct() {
    this.submitted = true;
    let exist = true;
    for (let key of Object.values(this.data)) {
      if (!key) {
        exist = false
      }
    }
    if (exist) {
      if (!this.newData) {
        this.datalist[this.indexUpdate] = this.data;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Request Updated', life: 3000 });
        this.indexUpdate = 0;
      }
      else {
        this.datalist.push(this.data);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Request Created', life: 3000 });
        this.newData = false;
      }

      this.datalist = [...this.datalist];
      this.dataDialog = false;
      this.data = {
        type: '',
        dateOfRequest: new Date,
        businessIssuer: '',
        departement: '',
        office: '',
        workflow: '',
        remediationPlan: '',
        status: '',
      };
    }
  }
  findIndex(data: DataTableModel): number {
    let index = -1;
    for (let i = 0; i < this.datalist.length; i++) {
      if (this.datalist[i] === data) {
        index = i;
        break;
      }
    }

    return index;
  }
}



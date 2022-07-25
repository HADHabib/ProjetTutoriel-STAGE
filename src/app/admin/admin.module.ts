import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    TableComponent,
    StatusIndicatorComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule
  ],
  providers:[MessageService,ConfirmationService]
})
export class AdminModule { }

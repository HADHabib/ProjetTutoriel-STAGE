import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableComponent } from './table/table.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdminComponent } from './admin/admin.component';
import { NgChartsModule } from 'ng2-charts';
import { CalendarModule } from 'primeng/calendar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarModule } from 'primeng/menubar';
import { SpeedDialModule } from 'primeng/speeddial';
import { ProfileComponent } from './profile/profile.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { CommentsComponent } from './comments/comments.component';
import { CommentsFilterComponent } from './comments-filter/comments-filter.component';
@NgModule({
  declarations: [
    TableComponent,
    StatusIndicatorComponent,
    CardsComponent,
    AuthentificationComponent,
    AdminComponent,
    DashboardComponent,
    ProfileComponent,
    CommentsComponent,
    CommentsFilterComponent,
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
    ToastModule,
    CardModule,
    ReactiveFormsModule,
    NgChartsModule,
    CalendarModule,
    MenubarModule,
    SpeedDialModule,
    AvatarModule,
    TabMenuModule,
    SelectButtonModule,
  ],
  providers: [MessageService, ConfirmationService, DatePipe],
})
export class AdminModule {}

import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SharedHomepageService } from '../shared-homepage.service';
import { MatFormField } from '@angular/material/form-field';
@Component({
  selector: 'app-popup-add-weather',
  templateUrl: './popup-add-weather.component.html',
  styleUrls: ['./popup-add-weather.component.css'],
})
export class PopupAddWeatherComponent implements OnInit {
  @ViewChild('myinput')
  myInputField!: ElementRef;
  ngAfterViewInit() {
    this.myInputField.nativeElement.focus();
  }
  message: string = '';
  constructor(
    public dialogRef: MatDialogRef<PopupAddWeatherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private appService: SharedHomepageService
  ) {}

  ngOnInit(): void {}
  onNoClick(input: string): void {
    this.dialogRef.close();
    this.appService.updateApprovalMessage(input);
    this.appService.sendClickEvent();
  }
}

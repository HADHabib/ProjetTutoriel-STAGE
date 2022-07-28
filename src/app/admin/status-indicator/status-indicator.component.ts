import { Component, Input, OnInit } from '@angular/core';
import { getColorByStatus } from '../color.function';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
})
export class StatusIndicatorComponent implements OnInit {
  public color: string = '#000';

  @Input() status?: string;

  statutsList = [
    'New',
    'Pending manager',
    'Pending compliance',
    'Pending risk',
    'Pending user',
    'Comex email generation',
    'Pending comex',
    'Pending Fof',
    'Awaiting trade(s) report, Awaiting receipt',
    'Pending Rcci',
    'Compliance closing',
    'Accepted under condition',
    'Accepted, Completed, Validated, Approved',
    'Remediation plan',
    'Rejected',
    'Removed',
    'Expired',
  ];

  constructor() {}

  ngOnInit(): void {
    this.color = this.getColorStatus(this.status as string);
  }

  getColorStatus(value: string): string {
    return getColorByStatus(value);
  }
}

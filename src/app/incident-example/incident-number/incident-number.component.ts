import { Component, Input, OnInit } from '@angular/core';
import { infoIncidentType } from '../info-incident.model';

@Component({
  selector: 'app-incident-number',
  templateUrl: './incident-number.component.html',
  styleUrls: ['./incident-number.component.scss'],
})
export class IncidentNumberComponent implements OnInit {
  @Input()
  incidentInput!: infoIncidentType;
  incidentnumberpart1: string;
  incidentnumberpart2: string;
  constructor() {
    this.incidentnumberpart1 = '';
    this.incidentnumberpart2 = '';
  }

  ngOnInit(): void {
    this.incidentnumberpart1 = this.incidentInput.numberIncident
      .toString()
      .substring(0, 4);
    this.incidentnumberpart2 = this.incidentInput.numberIncident.toString();
    this.incidentnumberpart2 = this.incidentnumberpart2.substring(
      4,
      this.incidentnumberpart2.length
    );
  }
}

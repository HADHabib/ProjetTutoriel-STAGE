import { Component, Input, OnInit } from '@angular/core';
import { infoIncidentType } from '../info-incident.model';

@Component({
  selector: 'app-incident-info',
  templateUrl: './incident-info.component.html',
  styleUrls: ['./incident-info.component.css'],
})
export class IncidentInfoComponent implements OnInit {
  @Input()
  incidentInfo!: infoIncidentType;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { infoIncidentType } from './info-incident.model';
import { incidentList } from './list-incident';

@Component({
  selector: 'app-incident-example',
  templateUrl: './incident-example.component.html',
  styleUrls: ['./incident-example.component.css'],
})
export class IncidentExampleComponent implements OnInit {
  status: string = 'Closed';
  listIncident: infoIncidentType[] = incidentList;
  constructor() {}

  ngOnInit(): void {}
}

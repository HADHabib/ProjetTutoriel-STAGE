import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-comments-filter',
  templateUrl: './comments-filter.component.html',
  styleUrls: ['./comments-filter.component.scss'],
})
export class CommentsFilterComponent implements OnInit {
  justifyOptions!: any[];
  currentfilter!: string;
  @Output() newInputValue = new EventEmitter<string>();
  constructor() {
    this.justifyOptions = [
      { icon: 'bi bi-three-dots', value: '' },
      { icon: 'bi bi-graph-up-arrow', value: '1' },
      { icon: 'bi bi-person-video3', value: 'Trading Account' },
      { icon: 'bi bi-briefcase', value: '3' },
      { icon: 'bi bi-bank', value: '4' },
      { icon: 'bi bi-file-earmark-lock', value: '5' },
      { icon: 'bi bi-gift', value: '6' },
      { icon: 'bi bi-person', value: 'Personnal Transaction' },
      { icon: 'bi bi-bell', value: 'Incident' },
    ];
  }
  sendUpdatedFilter() {
    this.newInputValue.emit(this.currentfilter);
  }

  ngOnInit(): void {}
}

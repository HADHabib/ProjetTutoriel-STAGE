import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CommentModel } from './comment.model';
import { commentslist } from './commentlist';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  cols: any[] = [];
  datalist: CommentModel[]=commentslist;
  data!: CommentModel;
  @ViewChild('dt')
  dt!: Table;
  currentfilter:string="All";
  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'date', header: 'Date' },
      { field: 'where', header: 'Where' },
      { field: 'comment', header: 'Comment' }
    ];
  }
  newFilter(newfilter:string){
    this.currentfilter=newfilter;
    this.dt.filter(this.currentfilter, 'where', 'equals');
  }

}

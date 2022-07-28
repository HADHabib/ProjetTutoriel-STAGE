import { Component, HostListener, OnInit } from '@angular/core';
import { retryWhen } from 'rxjs';
import { TodoService } from './todoservice.service';
import { toDo } from './todo';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  clickEventsubscription: Subscription | undefined;
  todos: toDo[] = [];
  done = true;
  pages: number = 1;
  constructor(
    private TodoService: TodoService,
    private sharedService: SharedService
  ) {
    this.clickEventsubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.add();
      });
  }
  ngOnDestroy() {
    this.clickEventsubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.getTodos();
  }
  getTodos(): void {
    this.TodoService.getTodos().subscribe((tods) => (this.todos = tods));
    for (let listodos in this.todos) {
      console.log(this.todos[listodos].id);
    }
  }
  add(): void {
    let done = true;
    if (done) {
      this.TodoService.addTodo({} as toDo).subscribe((todo) => {
        todo.listetodo = [];
        this.todos.push(todo);
      });
      done = false;
    }
  }
  OnClickAdd(toadd: toDo, textToAdd: string): void {
    let index = this.todos.findIndex((x) => x.id === toadd.id);

    if (
      !this.todos[index].listetodo.find(
        (element) => element == textToAdd && textToAdd != ''
      )
    ) {
      this.todos[index].listetodo.push(textToAdd);

      this.TodoService.updateTodo(this.todos[index]).subscribe();
    }
  }
  removeTodo(toremove: toDo): void {
    this.todos = this.todos.filter((h) => h !== toremove);
    this.TodoService.deleteTodo(toremove.id).subscribe();
  }
}

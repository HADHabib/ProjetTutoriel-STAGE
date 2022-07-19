import { Component, HostListener, OnInit } from '@angular/core';
import { retryWhen } from 'rxjs';
import { Page2serviceService } from './page2service.service';
import { toDo } from './todo';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})


export class Page2Component implements OnInit {
  clickEventsubscription:Subscription | undefined;
  todos:toDo[]=[];
  done = true;
  pages: number = 1;
  constructor(private page2Service : Page2serviceService,private sharedService:SharedService) {
   
      this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
        this.add();
    })

}
ngOnDestroy() {
  this.clickEventsubscription?.unsubscribe();
}
  ngOnInit(): void {
    
    this.getTodos();
 
  }
  getTodos():void{
    this.page2Service.getTodos().subscribe(tods=>this.todos = tods);
    for(let listodos in this.todos){
      console.log(this.todos[listodos].id);
    }

  }
  add():void{
    let done = true;
    if(done){
      this.page2Service.addTodo({} as toDo).subscribe(todo=>{todo.listetodo=[];this.todos.push(todo);});
      done=false;
    }

  }
  OnClickAdd(toadd : toDo,textToAdd : string): void{
   

    let index = this.todos.findIndex(x=>x.id === toadd.id);
 
        if(!this.todos[index].listetodo.find(element=> element==textToAdd && textToAdd!="")){
           this.todos[index].listetodo.push(textToAdd);
      
           this.page2Service.updateTodo(this.todos[index]).subscribe();
    }
  
}
  removeTodo(toremove: toDo):void {
  
    this.todos = this.todos.filter(h => h !== toremove);
    this.page2Service.deleteTodo(toremove.id).subscribe();

    
    
}

}

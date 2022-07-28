import { Injectable, ɵisBoundToModule } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { toDo } from './page2/todo';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const toDos: toDo[] = [];
    return { toDos };
  }
  genId(toDos: toDo[]): number {
    return toDos.length > 0 ? Math.max(...toDos.map((toDo) => toDo.id)) + 1 : 1;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { toDo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class Page2serviceService {
  private todoUrl = 'api/toDos';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(  private http: HttpClient) { }
  getTodos(): Observable<toDo[]> {
    return this.http.get<toDo[]>(this.todoUrl)
      .pipe(
        catchError(this.handleError<toDo[]>('getTodos', []))
      );
  }
  getTodo(id: number): Observable<toDo> {
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<toDo>(url).pipe(
      catchError(this.handleError<toDo>(`getTodo id=${id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  searchTodo(term: string): Observable<toDo[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<toDo[]>(`${this.todoUrl}/?name=${term}`).pipe(
      catchError(this.handleError<toDo[]>('searchHeroes', []))
    );
  }
  deleteTodo(id: number): Observable<toDo> {
    const url = `${this.todoUrl}/${id}`;
  
    return this.http.delete<toDo>(url, this.httpOptions).pipe(
      catchError(this.handleError<toDo>('deleteHero'))
    );
  }
  updateTodo(toD: toDo): Observable<any> {
    const url = `${this.todoUrl}/${toD.id}`;
    return this.http.put(this.todoUrl, toD, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }
  addTodo(toD: toDo): Observable<toDo> {
    return this.http.post<toDo>(this.todoUrl, toD, this.httpOptions).pipe(
      tap((newTodo:toDo)=>console.log(newTodo.id)),
      catchError(this.handleError<toDo>('addTodo'))
    );
  }
}

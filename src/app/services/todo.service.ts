import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//when making http request you need to import your model of what your
//requesting into the service
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

//injectable allows us to inject service into a constructor in
//another component
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  //url param for limit...extending off of /todos
  todosLimit = '?_limit=5';
  //whats to the left of constructor could be any name
  constructor(private http: HttpClient) {}

  //Get Todo
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    // return [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true,
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false,
    //   },
    // ];
  }

  //Delete Todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  //Updating Todo...Toggle Completed...updating the todo here
  //Observable isnt returning a todo with it so put any...we are just
  //updating
  toggleCompleted(todo: Todo): Observable<any> {
    //need to get url of the current todo we have
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}

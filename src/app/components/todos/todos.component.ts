import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
// ng g c components/Todos...cli lets you generate component
//change directory to continue adding in components folder
import { Todo } from '../../models/Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
//error checking at compile time, makes angular and typescript
//more robust than just using javascript
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  //we need service to setup component for what we are going to do
  constructor(private todoService: TodoService) {}

  //ngOnInit called after constructor is executed
  //it signals that angular has finished initalizing and setting
  //up component
  ngOnInit(): void {
    //we subscribe to the observable in the todoService
    //subscribe in observables is like saying .then from promises
    //this is why we loop through parent with ngFor to get this
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
  //deleting from UI needs to be done in parent component so we can
  //filter out the todos we dont want to delete by !==

  //dealing with observables...not promises in angular
  deleteTodo(todo: Todo) {
    //removes from UI
    //t are the todos from the todos array todo is whats passed
    //into the deleteTodo method...return all todos (t) that
    //dont have the todo.id of the todo passed in
    this.todos = this.todos.filter((t) => t.id !== todo.id);

    //remove from server...
    //we arent going to do anything with the todo because after the
    //subscribe the returned todo is gone
    this.todoService.deleteTodo(todo).subscribe();
  }

  //adding to UI needs to be done in parent component so we can add to
  //our array of todos
  addTodo(todo: Todo) {
    //in subscribe we get a back a todo after subscribing to
    //observable and then we can just add the todo into our
    //array todos

    //making a post request through the service to the server
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}

import { TodoService } from '../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//generated with ng g c components/TodoItem
//each time i generate, i need components/(componentname)
//if i want my generated components to keep going in the same
//folder
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  //input property todo so we can receive todo property from parent
  //or we can use input to receive value from parent to a child component
  //property...but we still need to import the model Todo

  @Input() todo: Todo = new Todo();
  //emitting the output up to parent component todo...and when the parent
  //component receives  we would utilize the parent component markup
  @Output() deleteToDo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  //Set Dynamic Classes
  //talking about css classes
  setClasses() {
    //binding css classes in todo-item to todo model properties/ or
    //true or false value...todo css class needs to always be true
    //because we want to always see our todos
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo: Todo) {
    //to toggle change state of todo to the opposite of what it is

    //Toggle in UI
    todo.completed = !todo.completed;

    //Toggle on Server
    //use console.log for testing and debugging...console in browsers
    //is for devs
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }
  onDelete(todo: Todo) {
    //console.log('delete todo')
    this.deleteToDo.emit(todo);
  }
}

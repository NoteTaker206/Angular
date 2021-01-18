import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    //we need id...because we dont assign new object with a unique
    //id, its gonna delete all of em since newly added todos both
    //are alike that they dont have unique ids
    const todo = {
      title: this.title,
      completed: false,
    };

    this.addTodo.emit(todo);
  }
}

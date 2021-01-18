import { Component } from '@angular/core';
// this typescript file is where we handle presentation logic
@Component({
  //selector is html element
  //app-root put into index.html
  //but all other components that you make
  //should go into app's markup
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-crash-course';
  name: string = 'default';

  //constructor runs when component is initialized
  //so it would override property values
  constructor() {
    //title = 'john'
  }
}

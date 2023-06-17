import { Component } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  // inject variables into DOM from a TS file, use the double curly braces
  title = "Below are your todo tasks!";
  inputTodo!: string;

  todoList!: Todo[];

  constructor() {

  }

  ngOnInit(): void {
    this.todoList = [
      {
        content: "hello",
        completed: false
      },
      {
        content: "another",
        completed: true
      }
    ]
  }

  toggleDone(i:number) {
    this.todoList.map((item, idx) => {
      if(idx === i) {
        item.completed = !item.completed;
      }
    })
  }

  onRemove(t:number) {
    this.todoList = this.todoList.filter((item, idx) => idx !== t);
  }

  addTodo() {
    this.todoList.push({
      content:this.inputTodo,
      completed:false
    })
  }
}

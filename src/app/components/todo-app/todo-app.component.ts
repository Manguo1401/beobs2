import { Component, OnInit } from '@angular/core';
import {Todo} from '../../objects/todo/todo';
import {TodoService} from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {
  newTodo: Todo = new Todo();


  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  // Service is now available as this.todoService
  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }
}

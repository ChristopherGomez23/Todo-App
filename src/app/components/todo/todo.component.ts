import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todos } from 'src/app/services/todos';
import { AddTodoComponent } from '../add-todo/add-todo.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  user = this.authService.userData.uid;

  todoList: Todos[] = [];

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog,
    private ts: TodoDataService,
  ) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(AddTodoComponent, {
      height: 'auto',
      width: '55%'
    });
  }

  getAllTodos() {
    this.ts.getTodo().subscribe(res => {
      this.todoList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    })

  }

  todoDel(todo: Todos){
    this.ts.delTodo(todo);
  }


}

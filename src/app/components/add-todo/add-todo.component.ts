import { Component, OnInit } from '@angular/core';
import { Database } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Todos } from 'src/app/services/todos';
import { DatePipe } from '@angular/common';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  user = this.authService.userData.uid;

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private authService: AuthenticationService,
    private db: Database,
    private datePipe: DatePipe,
    private ts: TodoDataService,
    private dialogRef: MatDialogRef<TodoComponent>
  ) {}

  todos: any[] = [];

  ngOnInit(): void {
    
  }

  addTodo(){
    const {title, description, start, end} = this.todoForm.value;
    if (!this.todoForm || !title || !description || !start || !end){
      return;
    }

    const todoObj: Todos = {
      id: '',
      title: title,
      description: description,
      start_date: this.datePipe.transform(start, 'MM-dd-YYYY'),
      end_date: this.datePipe.transform(end, 'MM-dd-YYYY'),
    }

    this.ts.addTodo(todoObj);
    this.dialogRef.close();

  }

}

import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Todo } from './components/todo/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;


  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    public authService: AuthenticationService,
    private router: Router
    ){

  }

  logout(){
    this.authService.logout().subscribe(() =>{
      this.router.navigate(['']);
    })
  }
}

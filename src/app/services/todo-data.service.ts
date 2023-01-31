import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  user = this.authService.userData.uid

  constructor(
    private afs: AngularFirestore,
    private authService: AuthenticationService,
  ) { }

  addTodo(todo: Todos){
    todo.id = this.afs.createId();
    return this.afs.collection(this.user).add(todo);
  }

  getTodo(){
    return this.afs.collection(this.user).snapshotChanges();
  }

  delTodo(todo: Todos) {
    return this.afs.doc(this.user + '/' + todo.id).delete();
  }

}

import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number = 1;
  users: Array<any> = []
  name: string;
  email: string;
  address: string;

  onClick() {
    this.users.push(
      {id: this.counter++, name: this.name, email: this.email, address: this.address}
    )
  }
  deleteUser(user){
    this.users.forEach( (item, index) => {
      if(item === user) this.users.splice(index,1);
    });
  }
  constructor() {

  }
}


// onDelete(post){
//   let id  = post.id
//   this.objArray = this.objArray.filter(item => item.id !== id);
// }
// postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']

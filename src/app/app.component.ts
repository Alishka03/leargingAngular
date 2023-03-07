import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stepForm:string;


  onClick(status){
    this.stepForm = status;
  }
  constructor() {

  }
}


// onDelete(post){
//   let id  = post.id
//   this.objArray = this.objArray.filter(item => item.id !== id);
// }
// postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']

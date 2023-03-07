import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  objArray: Array<any> = [
    {id:1,postTitle:'Post 1'},
    {id:2,postTitle:'Post 2'},
    {id:3,postTitle:'Post 3'},
    {id:4,postTitle:'Post 4'},
    {id:5,postTitle:'Post 5'},

  ]
  onClick(){
    let len = this.objArray.length+1
    this.objArray.push({id:len,postTitle:'Post '+len})
  }
  onDelete(post){
    let id  = post.id
    this.objArray = this.objArray.filter(item => item.id !== id);
  }
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5']

  constructor() {

  }
}


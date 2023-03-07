import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of posts';

  messageText: string = 'MessageText';

  fromPostToPostList: string = 'Message from PostComponent to PostList';

  childMessage: string = 'From Child component';

  outputMessage: string = "Message from child POST to App via output"
  @Input() fromParent: string = '';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    console.log('Click')
    this.messageEvent.emit(this.outputMessage)
  }
}

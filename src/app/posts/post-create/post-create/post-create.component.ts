import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  @Output() postCreated = new EventEmitter();
  enteredContent = '';
  enteredTitle = '';
  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post: any = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}

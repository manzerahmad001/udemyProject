import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // posts = [
  // { title: '1', content: 'sdds' },
  // { title: '21', content: 'sdds' },
  // { title: '13', content: 'sdds' },
  // { title: '41', content: 'sdds' }
  // ];
  @Input() posts: any;
  constructor() { }

  ngOnInit() {
  }

}

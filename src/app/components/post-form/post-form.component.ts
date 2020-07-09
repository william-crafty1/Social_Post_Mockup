import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/Posts';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();
  newPost: Post;
  title: string;
  thought: string;
  showForm: boolean;

  constructor() { }

  ngOnInit() {
    this.newPost = {title: '', thought: ''};
    this.showForm = true;
  }

  submitPost(){
    this.newPost = {title: this.title, thought: this.thought};
    this.submitted.emit(this.newPost);
    this.showForm = false;
  }
  
}

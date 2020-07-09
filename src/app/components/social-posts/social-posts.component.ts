import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Posts';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[];
  showForm : boolean;

  constructor() { }

  ngOnInit() {
    this.posts = [
      {title: "Grand Circus", thought: "Grand Circus is cool."},
      {title: "Ritual", thought: "Ritual is a well developed app."},
      {title: "Scott", thought: "Great Scott, we have to get back to the future"}
    ];
    this.showForm = false;
  }

  showPostForm(){
    this.showForm = true;
  }

  onDelete(post: Post){
    const indexOfTargetPost = this.posts.indexOf(post);
    this.posts.splice(indexOfTargetPost, 1);
  }

  onSubmit(post: Post){
    const newPost: Post = {title: post.title, thought: post.thought};
    this.posts.push(newPost);
    this.showForm = false;
  }

}

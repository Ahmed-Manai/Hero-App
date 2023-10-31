import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  postList!: Array<Post>;

  constructor(private postService: PostService){
    this.postList = postService.postList;
  }
}

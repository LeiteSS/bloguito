import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPosts: Post[];
  post: Post = new Post;

  searchText: string;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postsService.getPosts().subscribe((data: Post[]) => {
      this.listPosts = data;
    });
  }

  sendMessage() {
    this.postsService.postMessage(this.post).subscribe((data: Post) => {
      this.post = data
      location.assign('/feed')
    })
  }

  findPostByName() {
    this.postsService.getPosts().subscribe(data => {
      data.json().forEach(element => {
        this.listPosts.push(element.name);
        location.assign('/feed');
      });
    });
  }
}

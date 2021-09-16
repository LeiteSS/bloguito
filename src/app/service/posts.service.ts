import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  postMessage(post: Post) : Observable<any> {
    return this.http.post(`${this.baseUrl}`, post);
  }

  getPostByName(name: string) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

}

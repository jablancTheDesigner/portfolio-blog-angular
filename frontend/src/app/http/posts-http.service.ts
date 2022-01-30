import { Injectable } from '@angular/core';
import { Post } from '../domain/post';

@Injectable({
  providedIn: 'root'
})
export class PostsHttpService {

  posts: Post[] = [];

  constructor() { }

  findPosts(): Promise<Post[]> {
    return new Promise((res, rej) => {
      res(this.posts);
    })
  }

  findPostById(id: number): Promise<Post> {
    return new Promise((res, rej) => {
      let output = this.posts.find(post => post.id == id);
      res(output);
    })
  }
}

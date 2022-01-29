import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsHttpService {

  posts: any[] = [
    {
      id: 1,
      title: 'Post 1',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras',
      author: 'Me',
      date: 'Jan. 28, 2022',
      category: 'Life'
    },
    {
      id: 2,
      title: 'Post 2',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras',
      author: 'Me',
      date: 'Jan. 28, 2022',
      category: 'Tech'
    }
  ];

  constructor() { }

  findPosts(): Promise<any[]> {
    return new Promise((res, rej) => {
      res(this.posts);
    })
  }

  findPostById(id: number): Promise<any> {
    return new Promise((res, rej) => {
      let output = this.posts.find(post => post.id == id);
      res(output);
    })
  }
}

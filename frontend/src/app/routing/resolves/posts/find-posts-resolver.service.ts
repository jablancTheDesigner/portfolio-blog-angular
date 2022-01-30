import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from 'src/app/domain/post';
import { PostsHttpService } from 'src/app/http/posts-http.service';

@Injectable({
  providedIn: 'root'
})
export class FindPostsResolverService implements Resolve<Post[]> {

  constructor(private postsHttpService: PostsHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Post[]> {
    return this.postsHttpService.findPosts();
  }
}
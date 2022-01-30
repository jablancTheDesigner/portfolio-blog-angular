import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostsHttpService } from 'src/app/http/posts-http.service';

@Injectable({
  providedIn: 'root'
})
export class FindPostsResolverService implements Resolve<any[]> {

  constructor(private postsHttpService: PostsHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.postsHttpService.findPosts();
  }
}
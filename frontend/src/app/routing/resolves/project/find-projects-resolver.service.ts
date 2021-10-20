import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProjectsHttpService } from 'src/app/http/projects-http.service';

@Injectable({
  providedIn: 'root'
})
export class FindProjectsResolverService implements Resolve<any[]> {

  constructor(private projectHttpService: ProjectsHttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this.projectHttpService.findProjects();
  }
}

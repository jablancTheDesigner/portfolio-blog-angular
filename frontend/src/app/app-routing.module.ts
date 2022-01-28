import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './_components/blog/blog.component';
import { HomeComponent } from './_components/home/home.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { ProjectDetailComponent } from './_components/project-detail/project-detail.component';
import { FindProjectsResolverService } from './routing/resolves/project/find-projects-resolver.service';
import { FindProjectByIdResolverService } from './routing/resolves/project/find-project-by-id-resolver.service';


const routes: Routes = [
  {
    path: '',
    data: {
      isMainNav: true
    },
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'projects',
    resolve: {
      projects: FindProjectsResolverService
    },
    component: ProjectsComponent
  },
  {
    path: 'project/:id',
    resolve: {
      project: FindProjectByIdResolverService
    },
    component: ProjectDetailComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

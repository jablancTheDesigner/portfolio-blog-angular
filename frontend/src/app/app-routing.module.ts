import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './_components/pages/blog/blog.component';
import { HomeComponent } from './_components/pages/home/home.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './_components/pages/projects/projects.component';
import { ProjectDetailComponent } from './_components/project-detail/project-detail.component';
import { FindProjectsResolverService } from './routing/resolves/project/find-projects-resolver.service';
import { FindProjectByIdResolverService } from './routing/resolves/project/find-project-by-id-resolver.service';
import { FindPostsResolverService } from './routing/resolves/posts/find-posts-resolver.service';


const routes: Routes = [
  {
    path: '',
    resolve: {
      projects: FindProjectsResolverService,
      posts: FindPostsResolverService
    },
    children: [
      {
        path: '',
        data: {
          isMainNav: true
        },
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
    ]
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
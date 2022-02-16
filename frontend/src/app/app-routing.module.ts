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
import { SuccessComponent } from './_components/form/success/success.component';
import { ExperiencePageComponent } from './_components/pages/experience-page/experience-page.component';


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
        path: 'experience',
        component: ExperiencePageComponent
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
  {
    path: 'success',
    component: SuccessComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    anchorScrolling: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

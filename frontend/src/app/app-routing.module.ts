import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './_components/blog/blog.component';
import { HomeComponent } from './_components/home/home.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './_components/projects/projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

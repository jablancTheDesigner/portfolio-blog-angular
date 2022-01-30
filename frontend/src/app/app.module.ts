import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HeroComponent } from './_components/hero/hero.component';
import { HomeComponent } from './_components/home/home.component';
import { BlogComponent } from './_components/blog/blog.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { LayoutComponent } from './_components/layout/layout.component';
import { LogoComponent } from './_components/logo/logo.component';
import { ProjectImageCardComponent } from './_components/project-image-card/project-image-card.component';
import { ProjectDetailComponent } from './_components/project-detail/project-detail.component';
import { ProjectsListComponent } from './_components/projects-list/projects-list.component';
import { ExperiencesComponent } from './_components/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    HomeComponent,
    BlogComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    LayoutComponent,
    LogoComponent,
    ProjectImageCardComponent,
    ProjectDetailComponent,
    ProjectsListComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

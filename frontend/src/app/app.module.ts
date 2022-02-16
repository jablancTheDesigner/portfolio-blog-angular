import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HeroComponent } from './_components/hero/hero.component';
import { HomeComponent } from './_components/pages/home/home.component';
import { BlogComponent } from './_components/pages/blog/blog.component';
import { ProjectsComponent } from './_components/pages/projects/projects.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { LayoutComponent } from './_components/layout/layout.component';
import { LogoComponent } from './_components/logo/logo.component';
import { ProjectImageCardComponent } from './_components/project-image-card/project-image-card.component';
import { ProjectDetailComponent } from './_components/project-detail/project-detail.component';
import { ProjectsListComponent } from './_components/projects-list/projects-list.component';
import { ExperiencesComponent } from './_components/experiences/experiences.component';
import { PostsListComponent } from './_components/posts/posts-list/posts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionHeaderComponent } from './_components/section-header/section-header.component';
import { ContactComponent } from './_components/contact/contact.component';
import { SuccessComponent } from './_components/form/success/success.component';
import { ExperiencePageComponent } from './_components/pages/experience-page/experience-page.component';
import { PageLayoutComponent } from './_components/pages/page-layout/page-layout.component';

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
    ExperiencesComponent,
    PostsListComponent,
    SectionHeaderComponent,
    ContactComponent,
    SuccessComponent,
    ExperiencePageComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

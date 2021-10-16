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
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

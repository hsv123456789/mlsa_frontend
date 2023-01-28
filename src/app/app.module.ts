import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { CoreTeamComponent } from './core-team/core-team.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogsComponent } from './blogs/blogs.component';

import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { BlogcardComponent } from './blogcard/blogcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    CoreTeamComponent,
    ProjectsComponent,
    GalleryComponent,
    BlogsComponent,
    BlogcardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgTiltModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

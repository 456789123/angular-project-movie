import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FullBannerComponent } from './pages/full-banner/full-banner.component';
import { ListTitlesComponent } from './pages/list-titles/list-titles.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TitleComponent } from './pages/title/title.component';
import { CommonModule } from "@angular/common";
import { HomeComponent } from './pages/home/home.component';
import {MovieService} from "./service/movie-service";
import { MyListMoviesComponent } from './pages/my-list-movies/my-list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    FooterComponent,
    TitleComponent,
    HomeComponent,
    MyListMoviesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

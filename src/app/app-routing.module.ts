import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullBannerComponent} from "./pages/full-banner/full-banner.component";
import {HomeComponent} from "./pages/home/home.component";
import {Movie} from "./model/movie";
import {MyListMoviesComponent} from "./pages/my-list-movies/my-list-movies.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'banner', component: FullBannerComponent, data: Movie },
  { path: 'my-list', component: MyListMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

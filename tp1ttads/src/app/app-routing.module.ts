import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BuscarpeliculasComponent } from './buscarpeliculas/buscarpeliculas.component'
import { HomeComponent } from './home/home.component';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { popularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchFilmComponent } from './search-film/search-film.component';
const routes: Routes=[
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'popular', component: popularMoviesComponent},
  {path: 'now-playing', component: NowPlayingMoviesComponent},
  {path: 'searchMovies', component: BuscarpeliculasComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

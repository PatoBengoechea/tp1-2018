import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BuscarpeliculasComponent } from './buscarpeliculas/buscarpeliculas.component';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { HomeComponent } from './home/home.component';
import { popularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchFilmComponent } from './search-film/search-film.component';

import { ApiThemoviedbService } from './api-themoviedb.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BuscarpeliculasComponent,
    NowPlayingMoviesComponent,
    HomeComponent,
    popularMoviesComponent,
    SearchFilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiThemoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

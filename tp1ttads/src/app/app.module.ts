import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { BuscarpeliculasComponent } from './buscarpeliculas/buscarpeliculas.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { HomeComponent } from './home/home.component';
import { popularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchFilmComponent } from './search-film/search-film.component';

// Service
import { ApiThemoviedbService } from './api-themoviedb.service';

// Routing
import { AppRoutingModule } from './/app-routing.module';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarpeliculasComponent,
    NowPlayingMoviesComponent,
    HomeComponent,
    popularMoviesComponent,
    SearchFilmComponent,
    MovieComponent,
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

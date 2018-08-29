import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BuscarpeliculasComponent } from './buscarpeliculas/buscarpeliculas.component';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
import { NowPlayingMoviesComponent } from './now-playing-movies/now-playing-movies.component';
import { ModalDetallesComponent } from './modal-detalles/modal-detalles.component';
import { HomeComponent } from './home/home.component';
import { popularMoviesComponent } from './popular-movies/popular-movies.component';
import { SearchFilmComponent } from './search-film/search-film.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarpeliculasComponent,
    NowPlayingMoviesComponent,
    ModalDetallesComponent,
    HomeComponent,
    popularMoviesComponent,
    SearchFilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

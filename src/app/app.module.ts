import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AlbumRepository } from './model/albumRepository';
import { PhotoRepository } from './model/photoRepository';
import { CommentRepository } from './model/commentRepository';
import { DataService } from './model/dataService';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AlbumRepository,
    PhotoRepository,
    CommentRepository,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

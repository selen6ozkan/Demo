import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

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
import { HammerjsCarouselModule } from 'ngx-hammerjs-carousel';
import { NgImageSliderModule } from 'ng-image-slider';



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
    HttpClientModule,
    HammerjsCarouselModule
  ],
  providers: [
    AlbumRepository,
    PhotoRepository,
    CommentRepository,
    DataService,
    
  ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

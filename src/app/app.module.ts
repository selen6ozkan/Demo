import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommentRepository } from './model/commentRepository';
import { DataService } from './model/dataService';
import { CarouselModule} from 'primeng/carousel';



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
    CarouselModule
  ],
  providers: [
    CommentRepository,
    DataService
    
  ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

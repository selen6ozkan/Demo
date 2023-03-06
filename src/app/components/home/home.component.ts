import { Component,OnInit } from '@angular/core';
import { Album } from 'src/app/model/albums';
import { Photo } from 'src/app/model/photos';
import { AlbumRepository } from 'src/app/model/albumRepository';
import { PhotoRepository } from 'src/app/model/photoRepository';
import { CommentRepository } from 'src/app/model/commentRepository';
import { Comment } from 'src/app/model/comments';
import { DataService } from 'src/app/model/dataService';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  items: any[];

    slideConfig = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  


  constructor(
    private albumRepository:AlbumRepository,
    private photoRepository:PhotoRepository,
    private commentRepository:CommentRepository
    ){}
     
    get albums():Album[]{
      return this.albumRepository.getAlbums();
    }
    get photos():Photo[]{
      return this.photoRepository.getPhotos();
    }
    get comments():Comment[]{
      return this.commentRepository.getComments();
    }



    ngOnInit() {
      this.items=this.albumRepository.getAlbums()
      .map(albums=>{
        const filteredPhotos=this.photos.filter(photo =>photo.albumId===albums.id);
        return{
          title:albums.title,
          photos:filteredPhotos
        }
      })
    }
  
    
  
  
  
  
   
}

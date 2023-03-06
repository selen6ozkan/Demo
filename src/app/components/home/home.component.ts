import { Component } from '@angular/core';
import { Album } from 'src/app/model/albums';
import { Photo } from 'src/app/model/photos';
import { AlbumRepository } from 'src/app/model/albumRepository';
import { PhotoRepository } from 'src/app/model/photoRepository';
import { CommentRepository } from 'src/app/model/commentRepository';
import { Comment } from 'src/app/model/comments';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  slides = [
    'https://via.placeholder.com/600/92c952',
    'https://cdn.mijnreservering.info/janvanrossum/38medium.jpg',
    'https://cdn.mijnreservering.info/janvanrossum/39medium.jpg',
    'https://cdn.mijnreservering.info/janvanrossum/40medium.jpg',
    'https://cdn.mijnreservering.info/janvanrossum/41medium.jpg'
  ];

  public albumsPerPage=3;
  public selectedPage=1;

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

}

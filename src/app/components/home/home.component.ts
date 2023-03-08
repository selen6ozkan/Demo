import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/albums';
import { Photo } from 'src/app/model/photos';
import { Comment } from 'src/app/model/comments';
import { DataService } from 'src/app/model/dataService';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Items } from 'src/app/model/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  photos: Photo[] = [];
  albums: Album[] = [];
  comments: Comment[] = [];
  items: Items[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPhotos();
    this.getAlbums();
    this.getComments();
  }
  getPhotos() {
    this.dataService.getPhotos().subscribe((data: Photo[]) => {
      this.dataService.getAlbums().subscribe((data2: Album[]) => {
        this.photos = data;
        this.albums = data2;

        this.items = this.albums.map((album) => {
          const photo = this.photos.find((photo) => photo.albumId === album.id);
          return {
            title: album.title,
            photo: {
              id: photo?.id,
              title: photo?.title,
              url: photo?.url,
              thumbnailUrl:photo?.thumbnailUrl
            },
          };
        });
        console.log(this.items);
      });
    });
  }
  getAlbums() {
    this.dataService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
    });
  }

  getComments() {
    this.dataService.getComments().subscribe((data: Comment[]) => {
      this.comments = data;
    });
  }
}

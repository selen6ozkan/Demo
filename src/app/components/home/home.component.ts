import { Component,OnInit } from '@angular/core';
import { Album } from 'src/app/model/albums';
import { Photo } from 'src/app/model/photos';
import { Comment } from 'src/app/model/comments';
import { DataService } from 'src/app/model/dataService';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
 
  photos:Photo[]=[];
  albums:Album[]=[];
  comments:Comment[]=[];
  items: any[];

  deneme:any[];
  


  images = [
    { url: "https://via.placeholder.com/600/92c952", alt: 'Image 1' },
    { url: "https://via.placeholder.com/600/92c952", alt: 'Image 2' },
    { url: "https://via.placeholder.com/600/92c952", alt: 'Image 3' },
    { url: "https://via.placeholder.com/600/92c952", alt: 'Image 4' },
    { url: "https://via.placeholder.com/600/92c952", alt: 'Image 5' },
    { url: "https://via.placeholder.com/600/92c952", alt: 'Image 6' }
   
  ];
  constructor(private dataService:DataService){}

    ngOnInit(): void{
      this.getPhotos();
      this.getAlbums();
      this.getComments();
     
    } 
    getPhotos(){
      this.dataService.getPhotos().subscribe((data:Photo[])=>{
        this.dataService.getAlbums().subscribe((data2:Album[]) =>{
          this.photos=data;
          this.albums=data2;

          this.items = this.albums.map(album => {
            const filteredPhotos = this.photos.filter(photo => photo.albumId === album.id);
           return{
             title:album.title,
             photos:filteredPhotos
           }
          })

          this.deneme = this.photos.map(photo => {
            const filteredAlbums = this.albums.filter(album => album.id === photo.albumId);
           return{
            photoTitle:photo.title,
            photoUrl:photo.url
           }
          })


          console.log(this.items);
        })   
      })
    }
    getAlbums(){this.dataService.getAlbums().subscribe((data:Album[])=>{
      this.albums=data;
    })}

    getComments(){
      this.dataService.getComments().subscribe((data:Comment[])=>{
        this.comments=data;
      })
    }
}

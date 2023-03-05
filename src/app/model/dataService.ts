import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from './albums';
import { Photo } from './photos';
import { Comment } from './comments';

@Injectable()
export class DataService {
 
    albumApiUrl = 'https://jsonplaceholder.typicode.com/albums';
    photoApiUrl='https://jsonplaceholder.typicode.com/photos';
    commentApiUrl='https://jsonplaceholder.typicode.com/comments';

    constructor(private http:HttpClient){}
    getAlbums():Observable<Album[]>{
        return this.http.get<Album[]>(this.albumApiUrl)
      }
      
      getPhotos():Observable<Photo[]>{
        return this.http.get<Photo[]>(this.photoApiUrl)
      }
    
      getComments():Observable<Comment[]>{
        return this.http.get<Comment[]>(this.commentApiUrl)
      }
}

import { Injectable, OnInit } from "@angular/core";
import { Album } from "./albums";
import { DataService } from "./dataService";




@Injectable()
export class AlbumRepository implements OnInit{
    private albums:Album[]= [];

    constructor(private dataService:DataService){
        this.dataService
        .getAlbums()
        .subscribe(albums=>this.albums=albums);
    }

    ngOnInit(){
      
    }

    getAlbums():Album[]{
        return this.albums;
    }
}
import { Injectable, OnInit } from "@angular/core";
import { Photo } from "./photos";
import { DataService } from "./dataService";

@Injectable()
export class PhotoRepository implements OnInit{
    private photos:Photo[]= [];

    constructor(private dataService:DataService){
        this.dataService
        .getPhotos()
        .subscribe(photos=>this.photos=photos);
       
    }

    ngOnInit(){
      
    }
    getPhotos():Photo[]{
        return this.photos;
    }
}
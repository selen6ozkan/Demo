import { Injectable, OnInit } from "@angular/core";
import { Comment } from "./comments";
import { DataService } from "./dataService";



@Injectable()
export class CommentRepository implements OnInit{
    private comments:Comment[]= [];

    constructor(private dataService:DataService){
        this.dataService
        .getComments()
        .subscribe(comments=>this.comments=comments);
    }

    ngOnInit(){
      
    }
    getComments():Comment[]{
        return this.comments;
    }
}

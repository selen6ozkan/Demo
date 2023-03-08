import { Photo } from "./photos";

export class Items
{
    constructor(
        public title?:string,
        public photos?:Photo[],
    ){}
    
}
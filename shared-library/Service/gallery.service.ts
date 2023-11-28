import { Injectable } from '@angular/core';
import { Gallery } from '../Model/GalleryModel';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private data?:Gallery;
  constructor() {
    this.data = new Gallery;
   }
  
  getData(){
    return this.data;
  }

  setData(data:any):void{
    this.data = data;
  }
}

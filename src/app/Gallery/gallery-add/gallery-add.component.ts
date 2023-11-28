import { Component } from '@angular/core';
import { Gallery } from '../../../../shared-library/Model/GalleryModel';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GalleryService } from '../../../../shared-library/Service/gallery.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrl: './gallery-add.component.scss'
})
export class GalleryAddComponent {
  gallery?:Gallery
  data?:Gallery;
  constructor(private toastr: ToastrService,private galleryDataService:GalleryService){
    this.gallery = this.galleryDataService.getData()
    // this.gallery = new Gallery()
    console.log('dfsjlk',this.data)
  }

  onSave(form:NgForm){
  //  if(form.valid && (this.gallery.title != null && this.gallery.media != null && this.gallery.media.length > 0) ){

  //  }

  }
}

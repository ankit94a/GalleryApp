import { Component } from '@angular/core';
import { Gallery } from '../../../../shared-library/Model/GalleryModel';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrl: './gallery-add.component.scss'
})
export class GalleryAddComponent {
  gallery!:Gallery

  constructor(private toastr: ToastrService){
    this.gallery = new Gallery()
  }

  onSave(form:NgForm){
   if(form.valid && (this.gallery.title != null && this.gallery.media != null && this.gallery.media.length > 0) ){

   }else{
    // this.toastr.success('getting Error')
   }
  }
}

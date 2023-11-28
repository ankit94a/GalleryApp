import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryAddRoutingModule } from './gallery-add-routing.module';
import { GalleryAddComponent } from './gallery-add.component';
import { SharedLibraryModule } from '../../../../shared-library/shared-library.module';


@NgModule({
  declarations: [GalleryAddComponent],
  imports: [
    CommonModule,
    GalleryAddRoutingModule,
    SharedLibraryModule
  ],
  providers:[]
})
export class GalleryAddModule { }

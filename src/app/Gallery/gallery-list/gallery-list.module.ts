import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { GalleryListRoutingModule } from './gallery-list-routing.module';
import { GalleryListComponent } from './gallery-list.component';
import { SharedLibraryModule } from '../../../../shared-library/shared-library.module';


@NgModule({
  declarations: [GalleryListComponent],
  imports: [
    CommonModule,
    GalleryListRoutingModule,
    SharedLibraryModule
  ]
})
export class GalleryListModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryAddComponent } from './gallery-add.component';

const routes: Routes = [
  {
    path:'',
    component:GalleryAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryAddRoutingModule { }

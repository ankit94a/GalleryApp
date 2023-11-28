import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'gallery',
  loadChildren:() => import('./Gallery/gallery-list/gallery-list.module').then(m => m.GalleryListModule)
  },
  {
    path:'gallery/gallery-add',
    loadChildren:() =>import('./Gallery/gallery-add/gallery-add.module').then(m => m.GalleryAddModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

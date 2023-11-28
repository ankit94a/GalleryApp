import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GalleryAddComponent } from '../gallery-add/gallery-add.component';
import { Gallery } from '../../../../shared-library/Model/GalleryModel';
import { GalleryService } from '../../../../shared-library/Service/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.scss'
})
export class GalleryListComponent {
  galleryList: Gallery[] = [
    {
        id: 1,
        title: 'Ankig Gallery Images',
        subTitle:"My Name is Anthony Gonsalvish",
        media: ["./../../../assets/Shizuka.jpg", "./../../../assets/Shizuka2.jpg", "./../../../assets/Shizuka4.jpg","./../../../assets/Shizuka5.jpg"],
        date: new Date('2023-01-01') // Date format: Year, Month (zero-based), Day
    },
    {
        id: 2,
        title: 'Shivani Gallery Images',
        media: ["./../../../assets/Shizuka6.jpg", "./../../../assets/Shizuka2.jpg", "./../../../assets/Shizuka4.jpg","./../../../assets/Shizuka5.jpg"],
        date: new Date('2023-02-15')
    },
    // Add more sample data as needed...
];

  constructor(private dialog: MatDialog,private galleryDataService:GalleryService){
    
  }

  addEvent(){
    const dialogConfig = new MatDialogConfig
    dialogConfig.data = Gallery;
    let dialogRef = this.dialog.open(GalleryAddComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(
      data =>{
        if(data){
          console.log('success closed')
        }
      }
    )
  }

  sharedData(event:Gallery){
    this.galleryDataService.setData(event)
  }
}

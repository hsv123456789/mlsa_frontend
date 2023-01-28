import { Component } from '@angular/core';
import { PictureService } from '../picture.service';
import { Picture } from '../picture';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  constructor(private pictureservice: PictureService) {}
  picture: Picture[];

  up() {
    document.getElementById('high')?.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit(): void {
    this.pictureservice.getAllProfiles().subscribe((data) => {
      this.picture = data;
      console.log(data);
    });
  }
}

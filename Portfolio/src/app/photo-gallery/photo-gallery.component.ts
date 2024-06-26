import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  @Input('src') src: string;
}

import { Component, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';

declare var Splide: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (typeof Splide !== 'undefined') {

      new Splide('#pokemon-slider', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        focus: 'center',
        gap: '1rem',
        interval: 3000,

      }).mount();
    } else {
      console.error('Splide library not loaded from CDN.');
    }
  }
}
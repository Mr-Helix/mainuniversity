import { Component, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';

declare var Splide: any;
declare global {
  interface Window {
    splide: any;
  }
}

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
        pagination: false,
        easing: 'linear',
  autoScroll: {
          speed: 0.3,

        },
      }).mount(window.splide.Extensions);
    } else {
      console.error('Splide library not loaded from CDN.');
    }
  }
}
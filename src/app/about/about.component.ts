import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isPaused: boolean = false;
  isMuted: boolean = false;

  togglePause(video: HTMLVideoElement): void {
    if (video.paused) {
      video.play();
      this.isPaused = false;
    } else {
      video.pause();
      this.isPaused = true;
    }
  }
  
  toggleMute(video: HTMLVideoElement): void {
    if (video.muted) {
      video.muted = false;
      this.isMuted = false;
    } else {
      video.muted = true;
      this.isMuted = true;
    }
  }

scrollToTop(){
    (function smoothscroll() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {

        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
  })();
}


}



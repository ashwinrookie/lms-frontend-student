import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { throttleTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent
  implements OnInit, AfterViewInit, OnDestroy, OnChanges
{
  @ViewChild('videoPlayer', { static: true }) videoPlayerElement!: ElementRef;
  @Input() videoSrc!: string; // Input for video URL
  @Input() poster!: string; // Input for video poster image
  @Input() watchDuration: number = 0; // Input for watch duration
  player!: Player;
  @Output() timeUpdate = new EventEmitter<number>();
  @Output() videoEnded = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializePlayer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoSrc'] && !changes['videoSrc'].firstChange) {
      this.updateVideoSource();
    }
  }

  initializePlayer(): void {
    this.player = videojs(
      this.elementRef.nativeElement.querySelector('.video-js'),
      {
        controls: true,
        autoplay: false,
        preload: 'auto',
        fluid: true, // Makes the player responsive
        poster: this.poster,
      }
    );

    // Set the video source
    this.updateVideoSource();

    this.player.ready(() => {
      if (this.watchDuration > 0) {
        this.player.currentTime(this.watchDuration);
      }
    });

    // Add event listeners if needed
    this.player.on('error', () => {
      console.error('Video.js error:', this.player.error());
    });
    fromEvent(this.player, 'timeupdate')
      .pipe(throttleTime(5000))
      .subscribe(() => {
        const playedDuration = this.player.currentTime();
        this.timeUpdate.emit(playedDuration);
      });

    // Emit when the video ends
    this.player.on('ended', () => {
      this.videoEnded.emit();
    });
  }

  updateVideoSource(): void {
    if (this.player) {
      this.player.src({
        src: this.videoSrc,
        type: 'application/x-mpegURL', // For .m3u8 videos
      });
      this.player.poster(this.poster);

      // Reset the player to start playing the new video from the beginning
      this.player.ready(() => {
        this.player.currentTime(0);
        this.player.play();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose(); // Dispose of the player when the component is destroyed
    }
  }
}

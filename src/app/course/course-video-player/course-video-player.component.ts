import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewMyCourseResponseDTO } from 'src/app/core';
import { SocketService } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-course-video-player',
  templateUrl: './course-video-player.component.html',
  styleUrls: ['./course-video-player.component.scss'],
})
export class CourseVideoPlayerComponent implements OnInit {
  selectedVideo!: string;
  selectedThumbnail!: string;
  selectedLectureId!: string;
  selectedLectureDuration!: number;
  savedDuration = 0;
  private _course: ViewMyCourseResponseDTO;
  private authToken: string = localStorage.getItem('authToken') || '';
  constructor(
    private _route: ActivatedRoute,
    private _socketService: SocketService
  ) {
    console.log('my course ::', this._route.snapshot.data[0]);
    this._course = this._route.snapshot.data[0];
    this._socketService.connect(this.authToken);
  }
  get course() {
    return this._course;
  }

  ngOnInit(): void {
    if (this._course.lastViewedLecture) {
      this.onSelectLecture(
        this._course.lastViewedLecture.link,
        this._course.lastViewedLecture.thumbnail,
        this._course.lastViewedLecture.id,
        this._course.lastViewedLecture.duration
      );
      this.savedDuration = this._course.lastViewedLecture.watchDuration;
    } else {
      this.onSelectLecture(
        this._course.sections[0].lectures[0].link,
        this._course.sections[0].lectures[0].thumbnail!,
        this._course.sections[0].lectures[0].id,
        this._course.sections[0].lectures[0].duration
      );
    }
  }

  onSelectLecture(
    video: string,
    thumbnail: string,
    lectureId: string,
    duration: number
  ) {
    this.selectedVideo = video;
    this.selectedThumbnail = thumbnail;
    this.selectedLectureId = lectureId;
    this.selectedLectureDuration = duration;
  }

  onTimeUpdate(duration: number): void {
    this._socketService.sendPlayedDuration(
      duration,
      this._course.id,
      this.selectedLectureId
    );
  }
  handleVideoEnded(): void {
    console.log('Video ended');
    this._socketService.sendPlayedDuration(
      this.selectedLectureDuration,
      this._course.id,
      this.selectedLectureId
    );
  }
  ngOnDestroy(): void {
    this._socketService.disconnect();
  }
}

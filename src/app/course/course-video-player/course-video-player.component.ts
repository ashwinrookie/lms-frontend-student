import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    if (this.course.lastViewedLecture) {
    } else {
      this.onSelectLecture(
        this._course.sections[0].lectures[0].link,
        this._course.sections[0].lectures[0].thumbnail!,
        this._course.sections[0].lectures[0].id
      );
    }
  }

  onSelectLecture(video: string, thumbnail: string, lectureId: string) {
    this.selectedVideo = video;
    this.selectedThumbnail = thumbnail;
    this.selectedLectureId = lectureId;
  }

  onTimeUpdate(duration: number): void {
    this._socketService.sendPlayedDuration(
      duration,
      this._course.id,
      this.selectedLectureId
    );
  }
  ngOnDestroy(): void {
    this._socketService.disconnect();
  }
}

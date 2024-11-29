import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ExploreCourseInDetailResponseDTO,
  GetLastViewedCourseResponseDTO,
  ViewMyCourseResponseDTO,
} from 'src/app/core';

@Component({
  selector: 'app-course-video-player',
  templateUrl: './course-video-player.component.html',
  styleUrls: ['./course-video-player.component.scss'],
})
export class CourseVideoPlayerComponent implements OnInit {
  selectedVideo!: string;
  selectedThumbnail!: string;
  private _course: ViewMyCourseResponseDTO;
  constructor(private _route: ActivatedRoute) {
    console.log('my course ::', this._route.snapshot.data[0]);
    this._course = this._route.snapshot.data[0];
  }
  get course() {
    return this._course;
  }

  ngOnInit(): void {
    if (this.course.lastViewedLecture) {
    } else {
      this.onSelectLecture(
        this._course.sections[0].lectures[0].link,
        this._course.sections[0].lectures[0].thumbnail!
      );
    }
  }

  onSelectLecture(video: string, thumbnail: string) {
    this.selectedVideo = video;
    this.selectedThumbnail = thumbnail;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-video-player',
  templateUrl: './course-video-player.component.html',
  styleUrls: ['./course-video-player.component.scss']
})
export class CourseVideoPlayerComponent {
	constructor(private _route: ActivatedRoute) {
		console.log("my course ::", this._route.snapshot.data[0]);
	}
}

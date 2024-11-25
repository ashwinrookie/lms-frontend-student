import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMyLearningsResponseDTO } from 'src/app/core';

@Component({
	selector: 'app-my-learning',
	templateUrl: './my-learning.component.html',
	styleUrls: ['./my-learning.component.scss'],
})
export class MyLearningComponent {
	private _myLearnings: GetMyLearningsResponseDTO[];

	constructor(
		private _route: ActivatedRoute
	) {
		this._myLearnings = this._route.snapshot.data[0];
		console.log("myLearnings ::", this._myLearnings);
	}
	
	get myLearnings() {
		return this._myLearnings;
	}
}
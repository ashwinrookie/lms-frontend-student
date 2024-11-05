import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
	signupForm: FormGroup;

	constructor(private _authService: AuthService, private _router: Router) {
		this.signupForm = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
			]),
		});
	}

	onSubmit() {
		if (this.signupForm.invalid) return;

		const formData = this.signupForm.value;
		console.log('formdata', formData);

		this._authService.signupStudent(formData).subscribe({
			next: (signupResponse) => {
				localStorage.setItem("authToken", signupResponse.accessToken);
				localStorage.setItem("refreshToken", signupResponse.refreshToken);

				this._router.navigate(['/course/explore-courses']);
			},
			error: (error: Error) => {
				console.log('Error in signup student ::', error.message);
			},
		});
	}
}

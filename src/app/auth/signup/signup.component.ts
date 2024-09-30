import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
	signupForm: FormGroup;

	constructor(private _authService: AuthService) {
		this.signupForm = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		})
	}

	onSubmit() {
		if (this.signupForm.invalid) return;

		const formdata = this.signupForm.value;
		console.log("formdata", formdata);

		this._authService.signupStudent(formdata)
			.subscribe({
				next: (signupResponse) => {
					console.log("Registration successful ::", signupResponse);
				},
				error: (error: Error) => {
					console.log("Error in signup student ::", error.message);
				}
			});
	}

}

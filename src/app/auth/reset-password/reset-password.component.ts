import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core';


@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
	resetPasswordForm: FormGroup;

	constructor(
		private _authService: AuthService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		this.resetPasswordForm = new FormGroup({
			email: new FormControl({ value: null, disabled: true }, [Validators.required]),
			verificationCode: new FormControl(null, [Validators.required]),
			password: new FormControl(null, [Validators.required]),
		});

		this._route.paramMap.subscribe({
			next: (value) => {
				(this.resetPasswordForm.get("email") as AbstractControl).setValue(value.get("email"));
			}
		});
	}

<<<<<<< Updated upstream
    this._authService.resetPassword(formData).subscribe({
      next: (resetPasswordResponse) => {
        console.log('Password Reset Successful!', resetPasswordResponse);
        this._router.navigate(['/']);
      },
      error: (error: Error) => {
        console.log('Password Reset Failed!', error);
      },
    });
  }
=======
	onSubmit() {
		if (this.resetPasswordForm.invalid) return;

		const formData = this.resetPasswordForm.getRawValue();
		console.log('resetPasswordForm', formData);

		this._authService.resetPassword(formData).subscribe({
			next: (resetPasswordResponse) => {
				console.log('Password Reset Successful!', resetPasswordResponse);
				this._router.navigate(
					['../login'], 
					{relativeTo: this._route}
				);
			},
			error: (error: Error) => {
				console.log('Password Reset Failed!', error);
			},
		});
	}
>>>>>>> Stashed changes
}

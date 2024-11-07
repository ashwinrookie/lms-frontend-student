import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  constructor(private _authService: AuthService, private _router: Router) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      verificationCode: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) return;

    const formData = this.resetPasswordForm.value;
    console.log('resetPasswordForm', formData);

    this._authService.resetPassword(formData).subscribe({
      next: (resetPasswordResponse) => {
        console.log('Password Reset Successful!', resetPasswordResponse);
        this._router.navigate(['../login']);
      },
      error: (error: Error) => {
        console.log('Password Reset Failed!', error);
      },
    });
  }
}

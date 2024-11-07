import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  constructor(private _authService: AuthService, private _router: Router) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) return;

    const formData = this.forgotPasswordForm.value;
    console.log('forgotPasswordForm', formData);

    this._authService.forgotPassword(formData).subscribe({
      next: (forgotPasswordResponse) => {
        console.log('Email Sent', forgotPasswordResponse);
        this._router.navigate(['../reset-password']);
      },
      error: (error: Error) => {
        console.log('Email failed', error);
      },
    });
  }
}

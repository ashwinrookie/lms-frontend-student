import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) return;

    const formData = this.forgotPasswordForm.value;

    this._authService.forgotPassword(formData).subscribe({
      next: (forgotPasswordResponse) => {
        this._router.navigate(
          ['../reset-password', { email: this.forgotPasswordForm.value.email }],
          { relativeTo: this._route }
        );
      },
      error: (error: Error) => {
        console.log('Email failed', error);
      },
    });
  }
}

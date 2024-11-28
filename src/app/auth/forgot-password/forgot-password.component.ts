import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, ToastService } from 'src/app/core';

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
    private _route: ActivatedRoute,
    private _toastService: ToastService
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
        this.showError(error.message);
      },
    });
  }
  showError(error: string) {
    this._toastService.show(error, {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }
  ngOnDestroy(): void {
    this._toastService.clear();
  }
}

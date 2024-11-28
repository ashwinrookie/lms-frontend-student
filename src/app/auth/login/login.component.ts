import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ToastService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastService: ToastService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    const formData = this.loginForm.value;
    this._authService.signinStudent(formData).subscribe({
      next: (signinresponse) => {
        localStorage.setItem('authToken', signinresponse.accessToken);
        localStorage.setItem('refreshToken', signinresponse.refreshToken);

        this._router.navigate(['/']);
      },
      error: (error: Error) => {
        console.log('error:', error);

        this.showError(error.message);
      },
    });
  }

  showError(error: string) {
    console.log('Workingg');
    this._toastService.show(error, {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }
  ngOnDestroy(): void {
    this._toastService.clear();
  }
}

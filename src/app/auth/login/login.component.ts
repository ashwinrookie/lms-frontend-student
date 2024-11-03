import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ToastService } from 'src/app/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    const formData = this.loginForm.value;
    console.log('formData', formData);
    this._authService.signinStudent(formData).subscribe({
      next: (signinresponse) => {
        console.log('Login Successfull::' + signinresponse.accessToken);
        this._router.navigate(['/course/explore-courses']);
      },
      error: (error: Error) => {
        console.log('Login Failed::' + error);
        this.showError(error.message);
      },
    });
  }

  showError(error: string) {
    console.log('Workingg');
    this._toastService.show(error, {
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }
}

import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core';
import { EditStudentProfileResponseDTO } from 'src/app/core/dto/response/edit-student-profile.response.dto';
import { Student } from 'src/app/states';
@Component({
  selector: 'app-edit-student-profile',
  templateUrl: './edit-student-profile.component.html',
  styleUrls: ['./edit-student-profile.component.scss'],
})
export class EditStudentProfileComponent implements AfterViewInit {
  @Input() student!: Student;
  editStudentForm: FormGroup;
  constructor(
    private _activeModal: NgbActiveModal,
    private _authService: AuthService
  ) {
    this.editStudentForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
    });
  }

  ngAfterViewInit(): void {
    this.editStudentForm = new FormGroup({
      firstName: new FormControl(this.student?.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.student?.lastName, [Validators.required]),
      email: new FormControl(this.student?.email, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.editStudentForm.invalid) return;

    const formData = this.editStudentForm.value;
    console.log('formdata', formData);
    this._authService.editStudentProfile(formData).subscribe({
      next: (editStudentResponse) => {
        console.log('editStudentResponse', editStudentResponse);
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

  closeModal() {
    this._activeModal.close();
  }
}

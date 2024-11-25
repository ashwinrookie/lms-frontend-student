import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentProfileComponent } from '../modals/student-profile/student-profile.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Student } from 'src/app/states';
import { CommonModule } from '@angular/common';
import { EditStudentProfileComponent } from '../modals/edit-student-profile/edit-student-profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  private _student: Student;

  constructor(private modalService: NgbModal, private _route: ActivatedRoute) {
    this._student = this._route.snapshot.data[0];
  }
  get student() {
    return this._student;
  }

  openModal() {
    const modalRef = this.modalService.open(StudentProfileComponent);
    modalRef.componentInstance.student = this._student;
  }

  openEditProfile() {
    const modalRef = this.modalService.open(EditStudentProfileComponent);
    modalRef.componentInstance.student = this._student;
  }

  ngOnInit(): void {
    console.log('student ::', this.student);
  }
}

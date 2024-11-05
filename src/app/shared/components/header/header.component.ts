import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentProfileComponent } from '../modals/student-profile/student-profile.component';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/states';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  private _student: Student;

  constructor(private modalService: NgbModal, private _route: ActivatedRoute) {
    this._student = this._route.snapshot.data[0];
  }

  openModal() {
    const modalRef = this.modalService.open(StudentProfileComponent);
    modalRef.componentInstance.student = this._student;
  }

  ngOnInit(): void {
    console.log('student ::', this._student);
  }
}

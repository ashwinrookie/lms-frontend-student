import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentProfileComponent } from '../modals/student-profile/student-profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent {
  constructor(private modalService: NgbModal) {}
  openModal() {
    this.modalService.open(StudentProfileComponent);
  }
}

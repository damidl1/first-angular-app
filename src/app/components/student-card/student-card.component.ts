import { Component, Input } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
 @Input() studentData?: Student;   // @Input() è un decorator che dice che la proprietà student gli arriverà da fuori
}

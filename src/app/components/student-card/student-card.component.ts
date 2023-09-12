import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
 @Input() studentData?: string;   // @Input() è un decorator che dice che la proprietà student gli arriverà da fuori
}

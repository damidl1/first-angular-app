import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  mockData: Student[] = [
    {
      name: 'damiano',
      surname: 'di lionardo',
      age: 30,
      imageUrl: 'https://www.newscinema.it/wp-content/uploads/2023/05/pascal-min.jpeg'
    }
  ];


}

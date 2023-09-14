import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{


  groupNumber:number = 5;

  groups: Student[][] = []  //un array di un array di studente

  studentsData: Student[] = [];

  constructor(private dataServ: DataService) {}

  ngOnInit(): void {

    this.studentsData = this.dataServ.studentsArray;
    this.createGroups();
  }



  randomize(): void{
    const tempArray = [];
    const originalLength = this.studentsData.length;

    for (let i = 0; i < originalLength; i++) {

      const randomIndex = Math.floor(Math.random()*this.studentsData.length);

      const student = this.studentsData[randomIndex];
      tempArray.push(student);
      this.studentsData.splice(randomIndex, 1);

    }
    this.studentsData = tempArray;
    this.createGroups();
  }

  createGroups(): void{
  // for (let i = 0; i < this.groupNumber; i++) {

    //   const group: Student[] = [];
    //   const studentNumber = Math.floor(this.studentsData.length / this.groupNumber);
    //   const start = studentNumber * i;
    //   let endNumber;
    //   if (i === this.groupNumber -1) {
    //     endNumber = this.studentsData.length;
    //   } else {
    //     endNumber = start + studentNumber;
    //   }

    //   for (let j = start; j < endNumber; j++) {
    //     if (j < this.studentsData.length) {
    //       const student = this.studentsData[j];
    //     group.push(student);
    //     }


    //   }
    //   this.groups.push(group);

    // }
    // console.log(this.groups);
    this.groups = [];

    for (let i = 0; i < this.studentsData.length; i++) {

      const groupIndex = i % this.groupNumber;
      if (this.groups[groupIndex] === undefined) {
        this.groups[groupIndex] = [];
      }
      const student = this.studentsData[i];
      this.groups[groupIndex].push(student);

    }
    console.log(this.groups);

    // for (let i = 0; i < this.groupNumber; i++) {
    //   this.groups.push([]);

    // }
    // const tempStudents = [...this.studentsData];

    // while (tempStudents.length > 0) {
    //   for (let i = 0; i < this.groups.length; i++) {
    //    const firstStudent = tempStudents.shift();
    //    if (firstStudent) {
    //      this.groups[i].push(firstStudent);
    //    }
    //   }
    // }
    // console.log(this.groups);
  }

  removeStudent(student: Student): void{
    this.studentsData = this.studentsData.filter(s => s.id !== student.id);
    this.createGroups();
  }

  log(){
    console.log(this.studentsData)
  }
}

import { Component, OnChanges } from '@angular/core';
import { Studen } from 'src/app/_models/studen';
import { StudentServesService } from 'src/app/_servies/student-serves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css']
})
export class StudentCRUDComponent {
  blockedPanel: boolean = false;
  id: number = this._StudentServesService.id;
  age: number = this._StudentServesService.age;
  name: string = this._StudentServesService.name
  showOneStudent: Studen[] = []
  date: any;
  flag: boolean = false;
  selectedStudentId: number = 0;
  students: Studen[] = this._StudentServesService.students

  creatDepartment() {
    this._StudentServesService.creatStudent(this.id, this.age, this.name)
  }


  editStudent(student: Studen) {
    this.id = student.id;
    this.age = student.age;
    this.name = student.name;
    this._Router.navigate(['edit_student',student])

  }
  SaveEditStudent(id: number) {
    this._StudentServesService.SaveEditStudent(this.id, this.age, this.name)
  }
  deleteStudent(id: number) {
    this._StudentServesService.deleteStuden(id);
    this.students = this.students.filter(student => student.id !== id);  }

  showStudent(one: Studen) {
    this._Router.navigate(['student/show',one])
    this.showOneStudent = this._StudentServesService.showStudent(one)
  }
  cancelEdit() {
    this.flag = false;
  }
  openOption(studentId: number) {
    this.selectedStudentId = studentId;
    this.flag = true;
  }
  basicData: any;

  basicOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  constructor(private _StudentServesService: StudentServesService,private _Router:Router) { }
}

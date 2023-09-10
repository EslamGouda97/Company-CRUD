import { Component, OnChanges } from '@angular/core';
import { Department } from './../../_models/department';
import { DepartmentServesService } from './../../_servies/department-serves.service';

@Component({
  selector: 'app-department-crud',
  templateUrl: './department-crud.component.html',
  styleUrls: ['./department-crud.component.css']
})
export class DepartmentCRUDComponent {
  blockedPanel: boolean = false;
  id: number = this.DepartmentServesService.id;
  Supervisor: string = this.DepartmentServesService.Supervisor;
  name: string = this.DepartmentServesService.name
  showOneStudent: Department[] = []
  date: any;
  flag: boolean = false;
  selectedStudentId: number = 0;
  deparments: Department[] = this.DepartmentServesService.departments

  creatDepartment() {
    this.DepartmentServesService.creatDepartment(this.id, this.Supervisor, this.name)
  }

  editStudent(studen: Department) {
    this.id = studen.id;
    this.Supervisor = studen.Supervisor;
    this.name = studen.name;
  }
  SaveEditStudent(id: number) {
    this.DepartmentServesService.SaveEditDepartment(this.id, this.Supervisor, this.name)
  }
  deleteStudent(id: number) {
    this.DepartmentServesService.deleteDepartment(id)

  }

  showStudent(one: Department) {
    this.showOneStudent = this.DepartmentServesService.showDepartment(one)
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
  constructor(private DepartmentServesService: DepartmentServesService) { }
}

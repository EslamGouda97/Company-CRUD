import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentServesService } from 'src/app/_servies/department-serves.service';
@Component({
  selector: 'app-create-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class CreateDepartmentComponent {
  id: number = 0;
  name: string = '0';
  Supervisor: string = '';

  constructor(private departmentService: DepartmentServesService,private router:Router) {}

  createDepartment(): void {
    this.departmentService.creatDepartment(this.id, this.Supervisor, this.name);
    this.id = 0;
    this.Supervisor = '';
    this.name = '';
    this.router.navigateByUrl("/department");
  }
}

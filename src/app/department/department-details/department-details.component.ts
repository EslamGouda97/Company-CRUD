import { Component, Input } from '@angular/core';
import { Department } from './../../_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  @Input() showOneStudent:Department[]=[]

}

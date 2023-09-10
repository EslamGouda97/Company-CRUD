import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentCRUDComponent } from './department-crud/department-crud.component';
import { FormsModule } from '@angular/forms';
import { CreateDepartmentComponent } from './add-department/add-department.component';



@NgModule({
  declarations: [
    DepartmentDetailsComponent,
    DepartmentCRUDComponent,CreateDepartmentComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DepartmentDetailsComponent,DepartmentCRUDComponent,CreateDepartmentComponent]
})
export class DepartmentModule { }

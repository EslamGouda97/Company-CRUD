import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCRUDComponent } from './department/department-crud/department-crud.component';
import { StudentCRUDComponent } from './student/student-crud/student-crud.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditComponent } from './student/edit/edit.component';
import { StudentInputComponent } from './student/student-input/student-input.component';
import { CreateDepartmentComponent } from './department/add-department/add-department.component';

const routes: Routes = [
  { path: 'student', component: StudentCRUDComponent,children: [
    { path: 'show', component: StudentInputComponent }
  ] },
  { path: 'department', component: DepartmentCRUDComponent },
  { path: 'create_Department', component: DepartmentCRUDComponent },
  { path: 'addDepartment', component: CreateDepartmentComponent },
  { path: 'create_student', component:AddStudentComponent },
  { path: 'edit_student', component:EditComponent },
  { path: '', redirectTo:'student', pathMatch:'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentCRUDComponent } from './student-crud/student-crud.component';
import { StudentInputComponent } from './student-input/student-input.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeBackgroundDirective } from '../shared/change-background.directive';
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  { path: 'student',component: StudentCRUDComponent, children:[
      { path: 'show', component:StudentInputComponent  },

  ] },

];

@NgModule({
    declarations: [
        StudentDetailsComponent,
        StudentCRUDComponent,
        StudentInputComponent,
        AddStudentComponent,
        EditComponent
    ],
    exports: [StudentDetailsComponent, AddStudentComponent, StudentInputComponent, StudentCRUDComponent, EditComponent, RouterModule],
    imports: [
        CommonModule, FormsModule, BrowserModule, RouterModule.forChild([]),
        SharedModule
    ]
})
export class StudentModule { }

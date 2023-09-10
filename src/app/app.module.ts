import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { StudentCRUDComponent } from './student/student-crud/student-crud.component';
import { StudentInputComponent } from './student/student-input/student-input.component';
import { DepartmentCRUDComponent } from './department/department-crud/department-crud.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { ChipModule } from 'primeng/chip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { StudentModule } from './student/student.module';
import { CreateDepartmentComponent } from './department/add-department/add-department.component';
@NgModule({
  declarations: [
    AppComponent,DepartmentDetailsComponent,DepartmentCRUDComponent,CreateDepartmentComponent

  ],
  imports: [
    SharedModule,
    StudentModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    ChartModule,
    MatSelectModule,
    AvatarModule,
    BadgeModule,
    BlockUIModule,
    ChipModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

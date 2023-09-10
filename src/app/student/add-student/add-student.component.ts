import { Component } from '@angular/core';
import { Studen } from 'src/app/_models/studen';
import { StudentServesService } from 'src/app/_servies/student-serves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  id: number = 0;
  age: number = 0;
  name: string = 's'
  constructor(private _StudentServesService:StudentServesService,private _Router:Router){}
  creatStudent() {

    this._StudentServesService.creatStudent(this.id, this.age, this.name)
      this._Router.navigate(['/student']);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServesService } from 'src/app/_servies/student-serves.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: number =  Number( this._ActivatedRoute.snapshot.paramMap.get('id'));
  age: number  =Number (this._ActivatedRoute.snapshot.paramMap.get('age'));
  name: string  = `${this._ActivatedRoute.snapshot.paramMap.get('name')}`
  constructor(private _StudentServesService:StudentServesService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){}
  SaveEditStudent() {
    this._Router.navigate(['student'])
    this._StudentServesService.SaveEditStudent(this.id, this.age, this.name)
  }

}

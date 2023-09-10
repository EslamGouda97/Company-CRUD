import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServesService {

  id:number=0;
  name:string='0';
  Supervisor:string='';
  showOneStudent: Department[] = []

  departments: Department[] = [
    {id:1,Supervisor:"Gouda",name:'cs'},
    {id:2,Supervisor:"Mohamed",name:'it'},
    {id:3,Supervisor:"Eslam",name:'pi'},
    {id:4,Supervisor:"Mohamed",name:'it'},
  ];

  creatDepartment(id:number,Supervisor:string,name:string) {
    this.departments.push({'id':id, 'Supervisor':Supervisor, 'name':name})
  }
  editDepartment(studen: Department) {
    this.id = studen.id;
    this.Supervisor = studen.Supervisor;
    this.name = studen.name;
  }
  SaveEditDepartment(id: number,Supervisor:string,name:string) {
    for (let index = 0; index < this.departments.length; index++) {
      if (this.departments[index].id == id) {
        this.departments[index].id = id;
        this.departments[index].Supervisor = Supervisor;
        this.departments[index].name = name;
        this.id = 0;
        this.Supervisor = '';
        this.name = '';
      }
    }
  }

  deleteDepartment(id: number) {
    if (confirm('are you sure')) {
      for (let index = 0; index < this.departments.length; index++) {
        if (this.departments[index].id == id) {
          this.departments.splice(index, 1)
        }
      }
    }
  }

  showDepartment(one: Department):Department[] {

    this.showOneStudent = [one]
    return  this.showOneStudent
  }

}

import { Injectable } from '@angular/core';
import { Studen } from '../_models/studen';

@Injectable({
  providedIn: 'root'
})
export class StudentServesService {


  id: number = 0;
  name: string = '0';
  age: number = 0;
  showOneStudent: Studen[] = []

  students: Studen[] = [
    { id: 1, age: 22, name: 'Gouda' },
    { id: 2, age: 23, name: 'Mohamed' },
    { id: 3, age: 24, name: 'Ayman' },
    { id: 4, age: 25, name: 'Eslam' },
  ];

  creatStudent(id: number, age: number, name: string) {
    this.students.push({ 'id': id, 'age': age, 'name': name })
  }
  editStudent(studen: Studen) {
    this.id = studen.id;
    this.age = studen.age;
    this.name = studen.name;
  }
  SaveEditStudent(id: number, age: number, name: string) {
    for (let index = 0; index < this.students.length; index++) {
      if (this.students[index].id == id) {
        this.students[index].id = id;
        this.students[index].age = age;
        this.students[index].name = name;
        this.id = 0;
        this.age = 0;
        this.name = '';
      }
    }
  }

  deleteStuden(id: number) {
    if (confirm('are you sure')) {
      for (let index = 0; index < this.students.length; index++) {
        if (this.students[index].id == id) {
          this.students.splice(index, 1)

        }
      }
    }
  }

  showStudent(one: Studen): Studen[] {

    this.showOneStudent = [one]
    return this.showOneStudent
  }
}

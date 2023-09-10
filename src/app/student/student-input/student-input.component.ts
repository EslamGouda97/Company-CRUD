import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studen } from 'src/app/_models/studen';

@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})
export class StudentInputComponent {

  @Input() id: number = 0;
  @Input() age: number = 0;
  @Input() name: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = Number(params['id']);
      this.age = Number(params['age']);
      this.name = params['name'];
    });
  }
}

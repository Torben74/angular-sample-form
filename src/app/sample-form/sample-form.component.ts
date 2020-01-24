import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.todoForm.value);
}
}
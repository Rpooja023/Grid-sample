import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid';
  formData: any;

  constructor(private fb: FormBuilder) {
    this.formData = [
      {
        type: 'text',
        name: 'Pooja',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Ramya',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Pooja',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Ramya',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Pooja',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Ramya',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Pooja',
        number: '987654321',
        address: 'Tamil Nadu',
      },
      {
        type: 'text',
        name: 'Ramya',
        number: '987654321',
        address: 'Tamil Nadu',
      },
    ];
    }
}

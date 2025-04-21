import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss'
})
export class SimpleFormComponent {

  name: string = '';
  email: string = '';

  submitForm(formValue: {name: string, email: string}) {
    // console.log('Form submitted', {name: this.name, email: this.email});
    console.log('Form submitted', formValue);
  }

}

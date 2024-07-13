import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  reactiveForm: FormGroup;
  states: any;


  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onReset(): void {
    this.reactiveForm.reset();
  }
}

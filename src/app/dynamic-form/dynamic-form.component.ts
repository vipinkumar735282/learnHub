import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interface/form.interface';
import { log } from 'console';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { registerFormConfig } from '../constants/register-form.contant';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {

  @Input() form !: IForm;
  fb = inject(FormBuilder);
  registerForm = registerFormConfig as IForm;
  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    if (this.form?.FormControls) { 
      const formGroup: any = {};
      this.form.FormControls.forEach((control: IFormControl) => {
        const controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.email);
            if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minlength as number));
            if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
            if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxlength as number));
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit(): void {
    console.log(this.dynamicFormGroup.value);
  }
}

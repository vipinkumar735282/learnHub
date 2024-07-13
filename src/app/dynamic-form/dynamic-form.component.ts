import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interface/form.interface';
import { log } from 'console';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { admissionFormConfig } from '../constants/register-form.contant';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {

  @Input() form!: IForm;
  dynamicFormGroup: FormGroup;
  registerForm = admissionFormConfig;

  constructor(private fb: FormBuilder) {
    this.dynamicFormGroup = this.fb.group({});
  }

  ngOnInit(): void {
    if (this.form?.formControls) {
      let formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl) => {
        let controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.email);
            if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minlength as number));
            if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxlength as number));
            if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }

  resetForm() {
    this.dynamicFormGroup.reset();
  }

  getValidationErrors(control: IFormControl): string {
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = '';
    control.validators?.forEach((val: IValidator) => {
      if (myFormControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message as string;
      }
    });
    return errorMessage;
  }

  getErrorMessage(controlName: string): string {
    const control = this.dynamicFormGroup.get(controlName);
    if (control && control.touched && control.errors) {
      const errorKey = Object.keys(control.errors)[0];
      return control.errors[errorKey];
    }
    return '';
  }
}

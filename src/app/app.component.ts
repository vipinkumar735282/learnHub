import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./pages/register/register.component";
import { CallapiComponent } from "./pages/callapi/callapi.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { IForm } from './interface/form.interface';
// import { registerFormConfig } from './constants/register-form.contant';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RegisterComponent, CallapiComponent, DynamicFormComponent]
})
export class AppComponent {
  title = 'LearnHub';
  // registerForm = registerFormConfig as IForm
}

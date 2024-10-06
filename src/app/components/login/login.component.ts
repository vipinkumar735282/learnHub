import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //  userobj: any = {
  //   userName: '',
  //   password: ''
  // };

  // router = inject(Router);

  // onlogin() {
  //   if (this.userobj.userName === "vipin" && this.userobj.password === "vipin") {
  //     alert("login success");
  //     this.router.navigateByUrl('addemp');
  //   } else {
  //     alert('wrong credentials');
  //   }
  // }
}

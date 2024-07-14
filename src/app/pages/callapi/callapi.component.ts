import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-callapi',
  standalone: true,
  imports: [],
  templateUrl: './callapi.component.html',
  styleUrl: './callapi.component.scss'
})
export class CallapiComponent {
  customerslist: any [] = [];
  userlist: any [] = [];
  // private getcustomerlis = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient)
  //dependency injection
   constructor(private deptserv: ServiceService){

   }

   getAllDep(){
    this.deptserv.getAllDep().subscribe((res:any)=>{
      this.customerslist = res;
    })
   }

 
  //  getData(variable: string): Observable<any> {
  //   const url = `${this.apiUrl}/data?param=${variable}`;
  //   return this.http.get<any>(url);
  // }
  //  getAllcustomer(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((customerlist:any)=>{
  //     this.customerslist = customerlist;
  //   })
  //  }
  //  getAlluser(){
  //   debugger;
  //   this.http.get("https://projectapi.gerasim.in/index.html").subscribe((userlist:any)=>{
  //     this.userlist = userlist.data;
  //   })
  //  }
}

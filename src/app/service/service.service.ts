import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  ApiUrl:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
//concatenationm method
  getAllDep(){
    return this.http.get(this.ApiUrl +"user");
  }


  //templete litral
  saveNewDep(obj:any){
    return this.http.post(`${this.ApiUrl}user`,obj)
  }
}

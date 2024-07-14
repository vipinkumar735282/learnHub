import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllDep(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  
  saveNewDep(obj:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users",obj)
  }
}

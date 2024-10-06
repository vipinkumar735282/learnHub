import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  courseName:string = "Angular"

  inputType = "radio";
  rollNo:number = 1454;
  isIndian: boolean = false;
  stateName: string= "gaya";

  myclassName: string = "bg-primary";

  currentDAte: Date = new Date();
  restaurants = [
    {
      name: 'PizzaExpress',
      description: 'Pizza, Bakery, Salad, Beverages',
      price: 1200,
      location: 'Sector 67, Mohali',
      distance: '4.3 km',
      rating: '4.5★',
      image: '/assets/image/d1.jpg',
      offer: ''
    },
    {
      name: 'Dhaba By Amigos',
      description: 'North Indian, Mughlai, Rolls',
      price: '₹1,500',
      location: 'Phase 3, Mohali',
      distance: '898 m',
      rating: '4.5★',
      image: '/assets/image/d2.jpg',
      offer: 'Flat 10% OFF'
    },
    {
      name: 'Pirates Of Grill',
      description: 'BBQ, North Indian, Mughlai',
      price: '₹1,700',
      location: 'VR Punjab, Kharar Road, Mohali',
      distance: '4.2 km',
      rating: '4.5★',
      image: '/assets/image/d3.jpg',
      offer: ''
    }
  ];
  addProduct(restaurant: any): void {
    restaurant.price *= 2; // Double the price
  }

  constructor(){

  }
  changeCourseName(){
    this.courseName = "react Js"
  }

  showAlert(message:string){
    alert(message)
  }

}

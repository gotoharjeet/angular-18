import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {

  userName:string='John Doe';
  name:string='John Doe';
  today:Date=new Date();

  


  UpdateUserName(userInput:HTMLInputElement)
  {
    this.userName=userInput.value;
    console.log(this.userName);
  }

  keyFiltering()
  {
    console.log(this.name);
  }
}

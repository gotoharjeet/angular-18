import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {


  courseName:string="Angular18";
  inputType="radio";
  rollNo:number=123;

  isIndian:boolean=false;
  currentDate:Date=new Date();
  constructor()
  {
    
  }

  showAlert(arg0: string) {
    
    if(!arg0)
    {
      throw new Error('Method not implemented.');
    }
    alert(arg0); 
  }
  
  changeCourseName():void
  {
    this.courseName="React Ji";
  }
  
}

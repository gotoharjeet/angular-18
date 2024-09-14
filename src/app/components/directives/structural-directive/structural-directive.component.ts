import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean=true;
  idDiv1Visible:boolean=true;
  isSameDiv3Value:boolean=false;
  number1:string="";
  number2:string="";

  
  showDiv1(value:boolean):void
  {
    this.isDiv1Visible=value;
  }

  toggleDiv1()
  {
    this.idDiv1Visible=!this.idDiv1Visible;

    // if(this.idDiv1Visible == false)
    // {
    //   this.idDiv1Visible=false;
    // }
    // else
    // {
    //   this.idDiv1Visible=true;
    // }
  }

  

}

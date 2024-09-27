import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {


isDiv1Color:boolean=true;
isDiv2Color:boolean=true;
isLoggedIn:boolean=true;

num1:string='';
num2:string='';
searchText:string='';

  changeDiv1Color(divColor:boolean):void
  {
    this.isDiv1Color=divColor;
  }

  changeDiv2Color()
  {
    this.isDiv2Color=!this.isDiv2Color;
  }
}

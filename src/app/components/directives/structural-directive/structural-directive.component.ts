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
  isNumsSame:boolean=true;
  isCheckedBox:boolean=false;
  selectedState:string='';

  number1: string = '';
  number2: string = '';

  // Array
  cityArray:string []=['Delhi','Kolkota','Chennia','Mumbai'];


  // Object
  // studentObj:any[]=[
  //   {id:1,name:'AAA',city:'Hyd',zip:'11',isActive:false},
  //   {id:2,name:'BBB',city:'Mah',zip:'44',isActive:false},
  //   {id:3,name:'CCC',city:'Raj',zip:'33',isActive:false},
  //   {id:4,name:'DDD',city:'Guj',zip:'22',isActive:true},
  //   {id:5,name:'EEE',city:'MP',zip:'55',isActive:false},
  // ]

  
  studentObj:any[]=[
    {id:1,name:'AAA',city:'Hyd',isActive:false},
    {id:2,name:'BBB',city:'Mah',isActive:false},
    {id:3,name:'CCC',city:'Raj',isActive:false},
    {id:4,name:'DDD',city:'Guj',isActive:true},
    {id:5,name:'EEE',city:'MP',isActive:false},
  ]

  studentKey=Object.keys(this.studentObj[0]);
  studentVal=Object.values(this.studentObj);
  
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

  getStudentKeys(): string[]
  {
    const keys = new Set<string>();
    this.studentObj.forEach(student => {
      Object.keys(student).forEach(key => keys.add(key));
    });
    return Array.from(keys);
  }

}

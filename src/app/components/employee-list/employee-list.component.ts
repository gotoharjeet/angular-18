import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

    empdata = [
      {
        empName: "amol shindety",
        empId: 451,
        empCode: "CT-561",
        empDob: "1966",
        empEmailId: "amol@gmail.com",
        empDesignation: "Front end developer",
        role: "Super Admin"
      },
      {
        empName: "Karan mane",
        empId: 327,
        empCode: "CT-471",
        empDob: "1976",
        empEmailId: "karan@gmail.com",
        empDesignation: "Front end developer",
        role: "Admin"
      },
      {
        empName: "aradhana manee",
        empId: 294,
        empCode: "CT-421",
        empDob: "1967",
        empEmailId: "a@gmail.com",
        empDesignation: "Front end developer",
        role: "TL"
      },
      {
        empName: "Vaishnavi",
        empId: 291,
        empCode: "CT-421",
        empDob:"1986",
        empEmailId: "vaishnavi@gmail.com",
        empDesignation: "Back end developer",
        role: "Junior Developer"
      },
      {
        empName: "Conor233",
        empId: 270,
        empCode: "CT-351",
        empDob: "1966",
        empEmailId: "a@gmail.com",
        empDesignation: "UI/UX Designer",
        role: "Junior Developer"
      },
      {
        empName: "az1234",
        empId: 243,
        empCode: "CT-361",
        empDob: "1996",
        empEmailId: "a@gmail.com",
        empDesignation: "UI/UX Designer",
        role: "Super Admin"
      }
    ];
  }
  
  

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";

import { AttributeDirectivesComponent } from './components/directives/attribute-directives/attribute-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AttributeDirectivesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18';
}

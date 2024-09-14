import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, EmployeeListComponent, DatabindingComponent,StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18';
}

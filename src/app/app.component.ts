import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";

import { AttributeDirectivesComponent } from './components/directives/attribute-directives/attribute-directives.component';
import { SearchComponent } from "./components/directives/attribute-directives/search/search.component";
import { HomeComponent } from "./components/custom-property/home/home.component";
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { PostListComponent } from "./components/post-list/post-list.component";
import { CardComponent } from './components/card/card.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import { CompThreeComponent } from './components/comp-three/comp-three.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompOneComponent,CompTwoComponent,CompThreeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'angular-18: Mulit-slot-content-projection';
  // @ViewChild(PostListComponent) appChild!: PostListComponent;
  
  // childMessage:string='';
  // count:number=0;
  
  
  ngAfterViewInit(): void {
    // this.childMessage=this.appChild.childMessage;
    // console.log(this.childMessage+"at ngAfterViewInit()"+this.count++);
  }
  

  // name='ninja';
  // ninja={
  //   name:'Ryu',
  //   belt:'Red'
  // };

  currentComponent:any=CompOneComponent;

  // Available Components
  components = [
    {'name':'Component One', component:CompOneComponent},
    {'name':'Component Two', component:CompTwoComponent},
    {'name':'Component Three', component:CompThreeComponent},
  ];

  // method to change the selection of the componenet
  onChangeComp(event:any)
  {
    const selectedIndex=event.target.selectedIndex;
    this.currentComponent=this.components[selectedIndex].component;
  }

  // method to load the component
  loadComponent()
  {
    return PostListComponent;
  }
}

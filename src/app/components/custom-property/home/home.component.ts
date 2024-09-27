import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from "../../../../../bankloanapp/src/app/app.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  homeTitle="Welcome to the ninja directory";
  @Input() ninja: any;

  ngOnInit(): void {
  
  }

}

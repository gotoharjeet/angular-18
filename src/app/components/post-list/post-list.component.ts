import { Component, Input, viewChild } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
@Input() postTitle:string="";

childMessage:string="Hello From Child Component-Post-list";


// tsfrChildMessageParant(childMessage:string)
// {

// }
}

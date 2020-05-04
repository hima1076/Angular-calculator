import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  helloworld = '!Hello World';
}
export interface hero {
  id: number;
  name: string;
}
export interface hii
{
  id : number;
  name : string;
}
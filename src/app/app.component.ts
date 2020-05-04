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
/*function add(x:number,y:number):number
{
  return x+y;
}
const input1 = 5;
const input2 = 58;

const result = add(input1,input2);
console.log(result);
alert(result);*/
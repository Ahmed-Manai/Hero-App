import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  objectArray: Array<any> = [
    {id: 1, postTitle: 'Post 1'},
    {id: 2, postTitle: 'Post 2'},
    {id: 3, postTitle: 'Post 3'},
    {id: 4, postTitle: 'Post 4'},
    {id: 5, postTitle: 'Post 5'},
  ];

  stepForm:string = "Something Else";

  onClick(status: any){
    this.stepForm = status;
  }

  addNew(){
    this.objectArray.push({id: 6, postTitle: 'Post 6'});
  }

  OnDelete(index: any){
    this.objectArray.splice(index, 1);
  }
  isActive: boolean = true;
}


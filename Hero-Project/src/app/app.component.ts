import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string  = "Angular Pipe";
  
  count: number = 2856454;
  dcValue : number = 3.85344;

  price: number = 99.99;
  
  today: Date = new Date();

  postObj: object ={
    id: 1,
    postTitle: "Post 1"
  };

  postArray: Array<string> = [
    "post 1", "post 2","post 3", "post 4","post 5", "post 6"
  ];
  userdetails = {
    name: "User 1",
    city: "Tunis",
    countryCode: "TN"
  }

  dummyText: string = "It is a long established fact that a reader will distracted by the readable content of a page when looking at its layout";
  
}


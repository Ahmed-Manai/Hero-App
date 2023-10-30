import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  email!: string;
  address!: string;

  userArray: Array<any> = [];

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    });

    console.log(this.userArray);
  }

  onDelete(index: any){
    this.userArray.splice(index, 1);
  }
}


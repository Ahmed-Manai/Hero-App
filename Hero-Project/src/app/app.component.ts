import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string  = "Angular Pipe";

  onSubmit(fm: NgForm){
    console.log(fm.value); 
  }

  getValue(fullName: NgModel ){
    console.log(fullName);
  }
}


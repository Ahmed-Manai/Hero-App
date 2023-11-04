import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm, NgModel, Validators, FormArray, Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  title: string = "Angular Pipe";

  constructor(private router: Router){}
  ngOnInit() { 
    const obsTest$ = new Observable(observer => {
      //console.log('printed from observable');
      observer.next('Returned 1 From Oserverable');
      setTimeout(()=>{
        observer.next('Returned 2 From Oserverable');
      }, 2000);
     
      observer.next('Returned 3 From Oserverable');
    }).subscribe(value => {
      console.log(value);
    });
    
    obsTest$.unsubscribe();
  }

  onSubmit(){
    //this.router.navigate(['/posts']); // like routerLink
    //this.router.navigate(['/post', 1, 'postTitle']); //pass router parameters
    this.router.navigate(['/posts'],{queryParams: {page: 1, order: 'newest'}}); // pass query parameters
  }

}


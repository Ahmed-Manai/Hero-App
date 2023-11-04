import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm, NgModel, Validators, FormArray, Form, FormBuilder } from '@angular/forms';
import { noSpace } from './validators/nospace.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "Angular Pipe";

  form: any;


  constructor(fb: FormBuilder){
    this.form = fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), noSpace.noSpaceValidations]],
      password:['', Validators.required]
    })
  }


  get fb(){
    return this.form.controls;
  }
}


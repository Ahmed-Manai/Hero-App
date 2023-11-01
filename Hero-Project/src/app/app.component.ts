import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm, NgModel, Validators, FormArray, Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "Angular Pipe";


  form: any;

  emailRegex: string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
  contactRegex: string = "[789][0-9][9]";

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required, Validators.email]],
      contactDetails: fb.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        contactNum: ['', [Validators.required, Validators.pattern(this.contactRegex)]]
      }),
      skills:fb.array([])
    })

    // this.form = new FormGroup({
    //   fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl('', [Validators.required,
    //   //  Validators.pattern(this.emailRegex)
    //   Validators.email
    //   ]),
    //   contactDetails: new FormGroup({
    //     address: new FormControl('', [Validators.required]),
    //     shippingAddress: new FormControl('', [Validators.required]),
    //     contactNum: new FormControl('', [Validators.required, Validators.pattern(this.contactRegex)])
    //   }),
    //   skills: new FormArray([])
    // });
  }

  removeSkill(i: number){
this.Skills.removeAt(i); 
  }
  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkill(skill: HTMLInputElement) {
    (this.Skills).push(new FormControl(skill.value));
    skill.value = '';
    console.log(this.form.value);
  }
  get ShippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }
  get ContactNum() {
    return this.form.get('contactDetails.contactNum');
  }
  get Address() {
    return this.form.get('contactDetails.address');
  }
  get Email() {
    return this.form.get('email');
  }


  get fullname() {
    return this.form.get('fullName');
  }

  onSubmitReactiveForm() {
    console.log(this.form.value);
  }



  onSubmit(fm: NgForm) {
    console.log(fm.value);
  }

  getValue(fullName: NgModel) {
    console.log(fullName);
  }
}


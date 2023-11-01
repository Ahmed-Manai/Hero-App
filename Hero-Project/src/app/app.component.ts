import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm, NgModel, Validators } from '@angular/forms';

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

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required,
      //  Validators.pattern(this.emailRegex)
      Validators.email
      ]),

      contactDetails: new FormGroup({
        address: new FormControl('', [Validators.required]),
        shippingAddress: new FormControl('', [Validators.required]),
        contactNum: new FormControl('', [Validators.required, Validators.pattern(this.contactRegex)])
      })
    });
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


import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{
  signupForm: FormGroup;

  constructor(){
     this.signupForm = new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    })
  }
  
  onSubmit(){
    if(this.signupForm.valid){
      const formdata = this.signupForm.value;
      console.log("formdata",formdata);
    }
  }

}

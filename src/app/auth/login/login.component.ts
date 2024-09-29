import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  ngOnInit(): void {
      
  }
  onSubmit(){
    if(this.loginForm.valid){
      const formData = this.loginForm.value;
      console.log("formData",formData);
      
    }
  }
}

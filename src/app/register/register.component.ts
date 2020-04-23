import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent{
  hide=true
  registerForm:FormGroup
  submitted = false;

    credentials: TokenPayload = {
        id: 0,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',

        token_value : '',
        token_value1: ''
      }

      constructor(public auth : AuthenticationService, private router : Router, private fb: FormBuilder) { 
        this.createForm();
      }

      createForm(){
       this.registerForm = this.fb.group({
           first_name: ['', Validators.required],
           last_name: ['', Validators.required],
           email: ['', Validators.required],
           username: ['', Validators.required],
           password: ['', Validators.required]
       });
      }

      register() {
          this.auth.register(this.registerForm.value).subscribe(
              response => {
                console.log(response["message"])
                this.router.navigate(['/login']);  // define your component where you want to go
              },
              error => {
                console.error('error', error)
                alert(error)
                
              }
          )
      }
}




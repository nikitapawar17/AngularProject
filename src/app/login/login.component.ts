import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
    hide=true
    loginForm:FormGroup
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
     
       createForm() {
        this.loginForm = this.fb.group({
          username: ['', Validators.required],
          password:['', [Validators.required, Validators.minLength(8)]]
        });
    }

      login() {
          this.auth.login(this.loginForm.value).subscribe(
            response => {
                console.log(response["message"])
                this.router.navigate(['/dashboard'])
              },
              error => {
                  console.error(error["error"]["message"])
                  alert(error["error"]["message"])
              }
          )
      }
}

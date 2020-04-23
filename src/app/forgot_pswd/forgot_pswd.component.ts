import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-forgot_pswd',
    templateUrl: './forgot_pswd.component.html',
    styleUrls: ['./forgot_pswd.component.scss']})

export class ForgotPswdComponent{
    forgot_pswd_form : FormGroup;
    credentials: TokenPayload = {
        id: 0,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',

        token_value: '',
        token_value1: ''
      }

      constructor(public auth : AuthenticationService, private router : Router, private fb: FormBuilder) {
        this.createForm();
       }

       createForm(){
        this.forgot_pswd_form = this.fb.group({
            email: ['', Validators.required]
        });
       }

      forgot_password() {
          this.auth.forgot_password(this.forgot_pswd_form.value).subscribe(
            response => {
                console.log(response["message"])
                alert(response["message"])
              },
              error => {
                  console.error(error["error"]["message"])
                  alert(error["error"]["message"])
              }
          )
      }
}

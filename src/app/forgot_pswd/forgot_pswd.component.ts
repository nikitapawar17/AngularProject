import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


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

      constructor(public auth_service : AuthenticationService, private router : Router, private fb: FormBuilder, private snackbar: MatSnackBar) {
        this.createForm();
       }

       createForm(){
        this.forgot_pswd_form = this.fb.group({
            email: ['', Validators.required]
        });
       }

      forgot_password() {
          this.auth_service.forgot_password(this.forgot_pswd_form.value).subscribe(
            response => {
                console.log(response["message"])
                // alert(response["message"])
                this.snackbar.open(response["message"], '',{
                    duration:2000,
                    verticalPosition: 'top',
                    horizontalPosition:'center'});
                this.forgot_pswd_form.reset();
              },
              error => {
                console.error(error["error"]["message"])
                this.snackbar.open(error["error"]["message"], '',{
                    duration:2000,
                    verticalPosition: 'top',
                    horizontalPosition:'center'});
              }
          )
      }
}

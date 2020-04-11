import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent{
    loginForm : FormGroup;

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

    //   _formValidate() {
    //     // Here we have used a form builder and an array to allow for multiple validation rules on a form.
    //     this.loginForm = this.fb.group(
    //       {
    //         username: ['', Validators.required ],
    //         password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    //       }
    //     );
    //   }
     
       createForm() {
        this.loginForm = this.fb.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        });
    }
      // To initialize the form group and validations in the 'ngOnInit' lifecycle hook.
    //   ngOnInit() {
    //     this._formValidate();
    //   }


      login() {
          this.auth.login(this.loginForm.value).subscribe(
            response => {
                console.log(response["message"])
                // alert(response["message"])
                // alert("User" + " " + this.credentials.username + " " + "has logged in")
                  this.router.navigate(['/dashboard'])
              },
              error => {
                  console.error(error["error"]["message"])
                //   console.error('error', error)
                  alert(error["error"]["message"])
              }
          )
      }
}

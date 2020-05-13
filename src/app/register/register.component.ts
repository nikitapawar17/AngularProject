import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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

      constructor(public auth_service : AuthenticationService, private router : Router, private fb: FormBuilder, private snackbar: MatSnackBar) { 
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

          this.auth_service.register(this.registerForm.value).subscribe(
              response => {
                console.log(response["message"])
                this.snackbar.open(response["message"], '',{
                  duration:2000,
                  verticalPosition: 'top',
                  horizontalPosition:'center'});
                this.router.navigate(['/login']);  // define your component where you want to go
                this.registerForm.reset();
              },
              error => {
                console.error('error', error)
                // alert(error)
                this.snackbar.open(error, '',{
                  duration:2000,
                  verticalPosition: 'top',
                  horizontalPosition:'center'});
                
              }
          )
      }
}




import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload1 } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'app-reset_pswd',
    templateUrl: './reset_pswd.component.html',
    styleUrls: ['./reset_pswd.component.scss']

})
export class ResetPswdComponent{
  hide=true
  reset_pswd_form:FormGroup
  submitted = false;

    credentials: TokenPayload1 = {
        new_pswd: '',
        confirm_pswd: ''
      }

      constructor(public auth_service : AuthenticationService, private router : Router, public route: ActivatedRoute, private fb: FormBuilder, private snackbar: MatSnackBar) { 
        this.createForm();
      }

      // Custom validator to check that two fields match.
    matchPassword(ac: AbstractControl) {
      const new_pswd = ac.get('new_pswd');
      const confirm_pswd = ac.get('confirm_pswd');
      if (new_pswd.value === confirm_pswd.value) {
          return null;
      }

      ac.get('confirm_pswd').setErrors({ mustMatch: true });
      return true;
    }

      createForm(){
          this.reset_pswd_form = this.fb.group({
            new_pswd: ['', Validators.required],
            confirm_pswd: ['', Validators.required]
          },
          {
            validator: this.matchPassword
          }
          ); 
      }

      reset_password() {
        localStorage.setItem('access_token', this.route.snapshot.paramMap.get('token'))
        
        this.auth_service.reset_password(this.reset_pswd_form.value).subscribe(
        response => {
          this.snackbar.open(response["message"], '',{
            duration:2000,
            verticalPosition: 'top',
            horizontalPosition:'center'});
        // alert(response["message"])
        this.reset_pswd_form.reset();
        });

        error => {
            console.error('error', error)
            this.snackbar.open(error, '',{
              duration:2000,
              verticalPosition: 'top',
              horizontalPosition:'center'});
            // alert(error)
          }
      }
}

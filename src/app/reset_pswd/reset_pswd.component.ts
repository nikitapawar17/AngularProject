import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload1 } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Route } from '@angular/compiler/src/core';

@Component({
    templateUrl: './reset_pswd.component.html'
})
export class ResetPswdComponent{
    reset_pswd_form: FormGroup;

    credentials: TokenPayload1 = {
        new_pswd: '',
        confirm_pswd: ''
      }

      constructor(public auth : AuthenticationService, private router : Router, public route: ActivatedRoute, private fb: FormBuilder) { 
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
        
        this.auth.reset_password(this.reset_pswd_form.value).subscribe(
        response => {
        alert(response["message"])
        });

        error => {
            // console.error(error)
            console.error('error', error)
            alert(error)
          }
      }
}
//       constructor(private auth : AuthenticationService, private router : Router ) { }

//       reset_password() {
//           this.auth.reset_password(this.credentials).subscribe(
//               response => {
//                   console.log(response["message"])
//                   // alert(response)
//                   // this.router.navigateByUrl('/login')
//                   this.router.navigate(['/login']);  // define your component where you want to go

//               },
//               error => {
//                 // console.error(error)
//                 console.log(this.credentials)
//                 console.error('error', error)
//                 alert(error)
//               }
//           )
//       }
// }



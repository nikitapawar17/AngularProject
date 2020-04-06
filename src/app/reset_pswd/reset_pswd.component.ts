import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router, ActivatedRoute } from '@angular/router'
import {map} from 'rxjs/operators'

import { Route } from '@angular/compiler/src/core';

@Component({
    templateUrl: './reset_pswd.component.html'
})
export class ResetPswdComponent{
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

      get reset_token_value(){
        const token_val = this.route.snapshot.paramMap.get('token')
        console.log(token_val, "---------------->")
        return this.route.snapshot.paramMap.get('token')
      }

      constructor(private auth : AuthenticationService, private router : Router, public route: ActivatedRoute ) { }

        reset_password() {
        // const token_value = this.route.snapshot.paramMap.get('token')
        // console.log(token_value)

        // const token_value1 = this.route.paramMap.pipe(map(paramMap => paramMap.get('token') ))
        // console.log(token_value1)

        this.auth.reset_password(this.credentials).subscribe(
        response => {
        const token_value = this.route.snapshot.paramMap.get('token')
        console.log(token_value)
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



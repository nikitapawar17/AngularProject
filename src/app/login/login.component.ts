import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent{
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

      constructor(private auth : AuthenticationService, private router : Router ) { }

      login() {
          this.auth.login(this.credentials).subscribe(
            response => {
                console.log(response["message"])
                alert(response["message"])
                // alert("User" + " " + this.credentials.username + " " + "has logged in")
                //   this.router.navigate(['/profile'])
              },
              error => {
                  console.error(error["error"]["message"])
                //   console.error('error', error)
                  alert(error["error"]["message"])
              }
          )
      }
}

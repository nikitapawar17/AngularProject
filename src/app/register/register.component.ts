import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent{
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

      register() {
          this.auth.register(this.credentials).subscribe(
              response => {
                  console.log(response["message"])
                  // alert(response)

                  // alert("User"+ " " + this.credentials.username + " " +  "has registered")
                  // this.router.navigateByUrl('/login')
                  this.router.navigate(['/login']);  // define your component where you want to go

              },
              error => {
                // console.error(error)

                console.error('error', error)
                alert(error)
              }
          )
      }
}




import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

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
        password: ''
      }

      constructor(private auth : AuthenticationService, private router : Router ) { }

      reset_password() {
          this.auth.reset_password(this.credentials).subscribe(
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




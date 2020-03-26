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
        password: ''
      }

      constructor(private auth : AuthenticationService, private router : Router ) { }

      register() {
          this.auth.register(this.credentials).subscribe(
              response => {
                  console.log(response)
                  alert("User"+ " " + this.credentials.username + " " +  "has registered")
                //   this.router.navigateByUrl('/profile')
              },
              error => {
                console.error('error', error)
                alert(error)
            }
          )
      }
}

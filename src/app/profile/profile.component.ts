import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent{
    details : UserDetails

    // constructor(private auth : AuthenticationService ) { }

    // ngOnInit (){
    //     this.details = this.auth.getUserDetails()
    // }





      constructor(private auth : AuthenticationService, private router : Router ) { }

      profile() {
          this.auth.profile(this.details).subscribe(
            response => {
                console.log(response)
                // alert(response["message"])
                // alert("User" + " " + this.credentials.username + " " + "has logged in")
                  this.router.navigateByUrl('/profile')
              },
              error => {
                  console.error(error["error"])
                //   console.error('error', error)
                  alert(error["error"])
              }
          )
      }
}

import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent{
    details : UserDetails

    constructor(private auth : AuthenticationService ) { }

    ngOnInit (){
        this.details = this.auth.getUserDetails()
    }
}

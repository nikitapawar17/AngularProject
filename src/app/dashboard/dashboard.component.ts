import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  currentUser : UserDetails;
  users : UserDetails[] = [];

  constructor(private router: Router){
    // const user_obj = localStorage.getItem('token')

    // let payload 
    // payload = user_obj.split('.')[1]
    // payload = window.atob(payload)
    // const user_data = JSON.parse(payload)
    // console.log(user_data)
    // this.currentUser = user_data;
  }
  notes = [];

  name="FUNDOO";

  public logout(): void{
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

  get_notes()
  {
    this.name = "Notes";
    this.router.navigate(['/dashboard']);
  }

  get_trash_notes()
  {

    this.name="Trash";
    this.router.navigate(['/dashboard/trash']);
  }

}


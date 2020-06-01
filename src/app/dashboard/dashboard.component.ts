import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent{
  currentUser : UserDetails;
  listView = 1;
  users : UserDetails[] = [];

  constructor(private router: Router, private data_service: DataService){
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
  get_remainder_notes()
  {
    this.name="Remainder";
    this.router.navigate(['/dashboard/remainder']);
  }
  get_archived_notes()
  {
    this.name="Archive";
    this.router.navigate(['/dashboard/archive'])
  }

  ChangeView(value)
   {
     this.listView = value;
      this.data_service.changed_data(
      {
          type : "changeView",
          data : value
          // value
      })
   }

}


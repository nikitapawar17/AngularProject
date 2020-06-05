import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication.service';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { Router } from '@angular/router';
import { LabelService } from '../label-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  currentUser : UserDetails;
  listView = 1;
  users : UserDetails[] = [];

  constructor(private router: Router, private data_service: DataService, private dialog: MatDialog, private label_service: LabelService)
  { }
  notes = [];
  labels = [];
  name="FUNDOO";

  ngOnInit(){
    this.get_labels();
      
      this.data_service.current_data.subscribe(response =>
      { 
        if(response.type == "getLabels")
        {
          this.get_labels();
        } 
      })
  }

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

  get_labels()
  {
    this.label_service.get_labels().subscribe(response =>
      {
        this.labels = response['data'];
      })
  }

  edit_labels()
  {
    this.dialog.open(EditLabelComponent,
    {
      panelClass: 'myapp-no-padding-dialog',
      data : this.labels,
      // width : '280px'
    });
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


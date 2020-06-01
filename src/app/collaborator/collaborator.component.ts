import { Component, OnInit, EventEmitter, Inject, Output } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteService } from '../note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from "../data.service";


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  collabs = [];
  collaboratorsArray = [];
  note_id;
  firstName='';
  lastName='';
  emailId= '';
  ownerName='';
  collaborator='';
  persons =[];


  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private data_service: DataService, private note_service: NoteService, private snackbar: MatSnackBar)
  {  
    console.log(data, "DATA")
    if (data.id != undefined)
    {
       this.collaboratorsArray = data.collaborators
    }
    
    if (data.id == undefined)
    {
      this.collabs = data
    }
  }

  ngOnInit()
   {
    this.dialogRef.updateSize('50%','auto')

    this.data_service.changed_data(
      {
        type : 'getNotes'
      })
      
    let token = localStorage.getItem('token')
    let payload = token.split('.')[1]
    payload = window.atob(payload)
    let payload_data = JSON.parse(payload)

    this.firstName = payload_data["first_name"];
    this.lastName = payload_data['last_name'];
    this.emailId = payload_data['email'];
    this.ownerName = this.firstName + " " + this.lastName;    
  }

add_collaborator()
{
      let collabInfo = 
      {
        collaborate : this.collaborator
      }

      if(this.data.id != undefined)
      {
        this.note_service.add_collaborator(this.data.id, collabInfo).subscribe(response =>
        {          
          this.snackbar.open(response['message'],'',
          {
            duration : 2000,
            horizontalPosition :'start'
          })
          
          this.data_service.changed_data(
          {
            type : 'get_notes'
          });
        },
        error =>
        {
          console.log("Error",error);
          this.snackbar.open(error.error['message'],'',
          {
            duration : 2000,
            horizontalPosition :'center',
            verticalPosition : 'top'
          })
        })
      }
      else
      {
        console.log("6")

        this.collaboratorsArray.push(this.collaborator)

        this.data_service.changed_data(
        {
          type : 'add_collaborator',
          data : this.collaboratorsArray
        });
      }
    
    this.dialogRef.close();     
}

}
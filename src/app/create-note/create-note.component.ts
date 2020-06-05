import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';
import { MaterialModule } from '../material.module';
import { AuthenticationService, NoteInfo } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorComponent } from '../collaborator/collaborator.component';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  visible = true;

  id;
  title = '';
  description = '';
  color= '';
  is_pin = false;
  is_deleted= false;
  is_trash = false;
  is_archive = false;
  remainder = null;
  collaborators = [];


  notes=[];
  constructor(public dialog: MatDialog, private note_service:NoteService, private router:Router, private data_service: DataService, private snackbar: MatSnackBar) { }
  
  ngOnInit() 
  {
     this.data_service.current_data.subscribe(response =>
      {
        if(response.type == "changeColor")
        {
          this.color = response.data
        }
      })

      this.data_service.current_data.subscribe(response =>
        {
          if(response.type == "addCollaborator")
          {
            for(let i =0 ; i< response.data.length; i++)
            {
              this.collaborators.push(response.data[i])
            }
          }
        })
  }
  ReceiveReminder($event)
  {
    this.remainder = $event
  }

  Collaborator(collaborators)
  {
    this.dialog.open(CollaboratorComponent,
      {
        width : '500px',
        data : collaborators
      });
  }

  create_note(){
    this.visible = true

    if(this.title || this.description){

      let noteData = {
        id: this.id,
        title: this.title,
        description: this.description,
        color: this.color,
        is_pin: this.is_pin,
        is_trash: this.is_trash,
        is_deleted: this.is_deleted,
        is_archive: this.is_archive,
        remainder : this.remainder,
        collaborators : this.collaborators
      }

      this.title=''
      this.description=''
      this.is_pin = false
      this.is_trash = false
      this.is_deleted = false
      this.is_archive = false 
      this.color = "#fff"
      this.remainder = null
      this.collaborators = [];
      

    this.note_service.create_note(noteData).subscribe(
      response => {
        console.log(response["message"]);
        this.snackbar.open(response["message"], '',{
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition:'center'});
          
          // this.data_service.changed_data(response);
          this.data_service.changed_data({
          type : "getNotes",             
          })
        },   
  
      error => {
          console.error(error["error"]["message"]);
          this.snackbar.open(error(["error"]["message"]), '',{
            duration:2000,
            verticalPosition: 'top',
            horizontalPosition:'center'});
      })
    }
    else
    {
      this.is_pin = false
      console.error("Data required")
    }
  }

}



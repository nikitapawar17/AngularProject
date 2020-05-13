import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note-service.service';

import { MaterialModule } from '../material.module';
import { AuthenticationService, NoteInfo } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  selectable = true;
  removable = true;
  visible = true;

  title = '';
  description = '';
  is_pin = false;
  is_trash = false;
  is_archive = false;
  color = ''

  
  notes=[];
  constructor(private note_service:NoteService, private router:Router, private snackbar: MatSnackBar) { }

  create_note(){
    this.visible = true

    if(this.title || this.description){

      let noteData = {
        title: this.title,
        description: this.description,
        is_pin: this.is_pin
      }

      this.title=''
       this.description=''
       this.is_pin = false

    this.note_service.create_note(noteData).subscribe(
      response => {
        console.log(response["message"]);
        this.snackbar.open(response["message"], '',{
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition:'center'});
        // alert(response["message"]);
      },
      error => {
          console.error(error["error"]["message"]);
          // alert(error["error"]["message"]);
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



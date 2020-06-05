import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteService } from '../note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from "../data.service";
import { CollaboratorComponent } from '../collaborator/collaborator.component';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  selectable = true;
  removable = true;
  
  note_id
  title = '';
  description = '';
  is_pin;
  is_trash = false;
  is_deleted = false;
  is_archive = false;
  color = '';
  remainder 

  constructor(
    public dialogRef: MatDialogRef<EditNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private note_service :NoteService,
    private snackbar :MatSnackBar, private data_service : DataService, public dialog: MatDialog) 
    { 
      this.labelsArray = data.labels;
      console.log("array1 :",this.labelsArray)
    }

  ngOnInit(){ 

  }

  labelsArray =[];

  receive_label($event)
  {
    this.labelsArray.push($event)
    console.log("array2 :",this.labelsArray)
  }

  remove_label_event($event)
  {
    // console.log("array :",this.labelsArray)
    
    var find = this.labelsArray.find(function(item){return item.label === $event.label});
    var index = this.labelsArray.indexOf(find);
    this.labelsArray.splice(index);
   
    // console.log("array :",this.labelsArray)
  }

   receive_color($event)
   {
     this.data.color = $event
   }

    receive_remainder($event)
    {
      this.data.remainder = $event
      console.log("data.remainder", this.data.remainder) 
    }

  edit_note()
  {
    if(this.data.is_trash == false)
    {
      // console.log("data :",this.data);
      if(this.data.title || this.data.description)
      {    
        let noteData = 
        {
            title : this.data.title,
            description : this.data.description,
            color : this.data.color,
            is_archive : this.data.is_archive,
            is_pin : this.data.is_pin,
            remainder : this.data.remainder,
          };

        this.title = ''
        this.description = ''
        this.is_pin = false

        this.note_service.edit_note(this.data.noteID, noteData).subscribe(response =>
        {
            this.data_service.changed_data(
              {
                type : "getNotes",             
              })        
          },
          error =>
          {                
            console.log("Error", error);    
            this.snackbar.open(error['error']['message'] ,'Error Occured',
            { 
              duration:2000,    
              verticalPosition: 'top',
              horizontalPosition:'center' 
            })
          })
      }
      else
      {
        this.is_pin = false
        console.error("Data required");     
      }
    }
    else
    {
      this.data_service.changed_data(
      {
        type : "getNotes",             
      })  
        
      this.snackbar.open("Can't edit in trash" ,'Done',
      { 
        duration:2000,    
        verticalPosition: 'top',
        horizontalPosition:'center' 
      })
    }
    this.dialogRef.close();
  }
}

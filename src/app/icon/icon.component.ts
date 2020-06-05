import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {CollaboratorComponent } from '../collaborator/collaborator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NoteInfo, AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() is_trash;
  @Input() noteData;

  colors = ['#fff','#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#d7aefb',
              '#fdcfe8','#e6c9a8','#e8eaed'];
  
  constructor(private auth_service: AuthenticationService, private note_service: NoteService, private data_service: DataService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  date;
  time;
  note_id : any;

  delete_note()
  {
    this.note_id = this.noteData.id
    return this.note_service.delete_note(this.note_id).subscribe(response =>
    {
      // this.data_service.changed_data(response); 

      this.snackbar.open(response['message'] ,'Done',
      { 
        duration:2000,          
        horizontalPosition:'start' 
      }) 
      this.data_service.changed_data({
        type : "getNotes",             
        })
    },
    error=>
    {
      console.error("error",error);
    });
  }

  trash_note()
  {
    this.note_id = this.noteData.id
    return this.note_service.trash_note(this.note_id).subscribe(response =>
    {
      // this.data_service.changed_data(response); 

      this.snackbar.open(response['message'] ,'Done',
      { 
        duration:2000,          
        horizontalPosition:'start' 
      })
      this.data_service.changed_data({
        type : "getNotes",             
        }) 
    },
    error=>
    {
      console.error("error",error);
    });
  }

  change_color(color)
  {
    console.log(this.noteData)
    if(this.noteData != undefined)
    {

        this.note_id =this.noteData.id;
        console.log(this.noteData, this.note_id)

        let noteColor=
        {
          color : color
        }
        
        return this.note_service.change_color(this.note_id, noteColor).subscribe(response =>
        {       
          this.data_service.changed_data(
          {
              type :  'getNotes'
          })       
          this.snackbar.open(response['message'],'',
          {
            duration : 2000,
            horizontalPosition : 'start'
          })
        },
        error =>
        {
          console.log("Error", error);
        })
    }
    else
    {
       this.data_service.changed_data(
         {
           data : color,
           type : "changeColor"
         })
    }
  }

  GetTime()
  {
    this.date = new Date();
    this.time = this.date.getHours();
  }

  add_remainder(date)
  {
    this.note_id = this.noteData.id

      return this.note_service.add_remainder(this.note_id, date).subscribe(response => {

          this.data_service.changed_data(
            {
              type : "getNotes"
            });
        },
        error =>{
          console.log("Error", error);
        });
     }

  add_collaborator()
  {
     if(this.noteData != undefined)
     {
        this.dialog.open(CollaboratorComponent,
          {
            panelClass: 'myapp-no-padding-dialog',
            width : 'auto',
            data : this.noteData
          });
      }
     else
     {
        this.dialog.open(CollaboratorComponent,
          {
            panelClass: 'myapp-no-padding-dialog',
            width : 'auto',
            data : {}
          });
      }
    }
  
  // is_archive()
  // {  
  //   if(this.noteData != undefined)
  //   {
  //     this.note_id = this.noteData.note_id;
  //     return this.note_service.is_archive(this.note_id).subscribe(response => {
  //       // this.data_service.changed_data(response)
  //       this.data_service.changed_data({
  //         type : 'getNotes'
  //       })

  //       this.snackbar.open(response['message'], 'Done', {
  //         duration :2000,
  //         horizontalPosition : 'start'
  //       })
  
  //     },
  //     error =>
  //     {
  //       console.log("Error", error);
  //     })
  //   }
  //   else
  //   {
  //       console.log(this.noteData)
  //       this.archive_event.emit('true')
  //   }
     

}

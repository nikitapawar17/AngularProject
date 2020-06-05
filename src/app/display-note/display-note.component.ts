import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  notes;
  title=''
  description=''
  is_pin=false
  color : string;
  selectable = true;
  removable = true;
  // view = "1";
  view;
  is_note_checked = 0;
  remainder = null;
label

  @Input() childMessage : any;

  constructor(private note_service: NoteService, private data_service: DataService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data_service.current_data.subscribe(response =>
      {
        if(response.type == "changeView")
        {
          this.view = response.data
        }
      })
  }

  ReceiveColor($event)
  {
    this.color = $event
  }
  
  ReceiveReminder($event)
  {
    this.remainder = $event
  }

  remove_remainder(data){
    this.note_service.remove_remainder(data.id).subscribe(response=> {
      console.log(response["message"])
      this.snackbar.open(response['message'] ,'',
        { 
          duration: 2000,    
          horizontalPosition:'start' 
        })
        this.data_service.changed_data(
          {
            type : 'getNotes'
          });
      },
      error =>
      {
        this.snackbar.open(error['error'] ,'',
        { 
          duration:2000,    
          verticalPosition: 'top',
          horizontalPosition:'center' 
        })
      })
  }
 
  note_pin(note)
  {
    this.note_service.note_pin(note.id).subscribe(response =>
      {
        this.snackbar.open(response["message"], '',{
          duration:2000,
          verticalPosition: 'bottom',
          horizontalPosition:'start'});
        this.data_service.changed_data(
          {
           type :'getNotes' 
          });
      },
      error =>
      {
        this.snackbar.open(error["error"]["message"],'',
        {
          duration : 2000,
          verticalPosition :'bottom',
          horizontalPosition :'start'
        })
      })
  }

  note_unpin(note)
  {
    this.note_service.note_unpin(note.id).subscribe(response =>
      {
        this.snackbar.open(response["message"], '',{
          duration:2000,
          verticalPosition: 'bottom',
          horizontalPosition:'start'});
        this.data_service.changed_data(
          {
           type :'getNotes' 
          });
      },
      error =>
      {
        this.snackbar.open(error["error"]["message"],'',
        {
          duration : 2000,
          verticalPosition :'bottom',
          horizontalPosition :'start'
        })
      })
  }
  
  OpenDialog(noteInfo)
  {
    this.dialog.open(EditNoteComponent,
    {
      panelClass: 'myapp-no-padding-dialog',
      width: 'auto',
      data : noteInfo
    });
  }

}

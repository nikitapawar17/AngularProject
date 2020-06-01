import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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



  @Input() childMessage : any;

  constructor(private note_service: NoteService, private data_service: DataService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.data_service.current_data.subscribe(response =>
      {
        if(response.type == "changeView")
        {
          this.view = response.data
        }
      })
  }

  ReceiveReminder($event)
  {
    this.remainder = $event
  }

  remove_remainder(data){
    this.note_service.remove_remainder(data.id).subscribe(response=> {
      console.log(response["message"])
      this.snackbar.open(response['message'] ,'Done',
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
        this.snackbar.open(error['error']['message'] ,'Error Occured',
        { 
          duration:2000,    
          verticalPosition: 'top',
          horizontalPosition:'center' 
        })
      })
  }
 
  
}

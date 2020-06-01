import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  visible= false;
  trashNotes =[];

  constructor(private note_service: NoteService, private data_service: DataService, private snackbar: MatSnackBar, private dialog_box: MatDialog) { }
  parentMessage = [];

  ngOnInit(): void {
    this.get_trash_notes();
  }

  get_trash_notes(){
  this.note_service.get_trash_notes().subscribe(
    response => {
      console.log(response["data"]);
      this.trashNotes = response["data"]
      if(this.trashNotes.length == 0)
      {
        this.visible = false;
      }
      else
      {
         this.visible = true
      }
      console.log(this.trashNotes)

    },
    error => {
    console.log(error["error"]["message"]);
    alert(error["error"]["message"]);
    })
  }

  empty_trash(notes){
    this.note_service.empty_trash(notes).subscribe(response=>
      {
        this.dialog_box.open(TrashDialog)

        console.log(response["message"])
        this.data_service.changed_data(response);

        this.data_service.changed_data({
            type: "getNotes"
        })
        this.snackbar.open(response["message"], '', 
        {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
      },
      error =>
      {
        this.snackbar.open(error['error']['message'] ,'',
        { 
          duration:2000,    
          verticalPosition: 'top',
          horizontalPosition:'center' 
        })
      })
    }  
}




@Component({
  selector: 'trash_dialog',
  templateUrl: 'trash_dialog.html',
})
export class TrashDialog {}
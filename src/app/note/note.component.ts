import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private router : Router, private data_service:DataService, private note_service : NoteService ) { }

   parentMessage = [];
 
  ngOnInit() 
  {
    this.data_service.current_data.subscribe(response => this.get_notes());
    // this.get_notes();
  }

  get_notes(){

    this.note_service.get_notes().subscribe(
      response => {
        console.log(response["data"]);
        this.parentMessage = response["data"]
        console.log(this.parentMessage)

      },
      error => {
      console.log(error["error"]["message"]);
      alert(error["error"]["message"]);
      })
    }

    // this.note_service.get_trash_note().subscribe(
    //   response => {
    //     console.log(response["data"]);
    //     this.parentMessage = response["data"]
    //     console.log(this.parentMessage)
  
    //   },
    //   error => {
    //   console.log(error["error"]["message"]);
    //   alert(error["error"]["message"]);
    //   })
    // }
}
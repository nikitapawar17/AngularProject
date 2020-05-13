import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private router : Router, private note_service : NoteService ) { }

   parentMessage = [];
 
  ngOnInit() 
  {
    this.get_notes();
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
}
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  visible= false;
  trashNotes =[];


  constructor(private note_service: NoteService) { }
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

}

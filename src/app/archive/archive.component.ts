import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private note_service: NoteService) { }
  archiveNotes = [];

  ngOnInit(): void {
    this.get_archived_notes();
  }
  get_archived_notes(){
    this.note_service.get_archived_notes().subscribe(
      response => {
        console.log(response["data"]);
        this.archiveNotes = response["data"]
        console.log(this.archiveNotes)
  
      },
      error => {
      console.log(error["error"]["message"]);
      alert(error["error"]["message"]);
      })
    }
  

}

import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
  remainderNotes =[];

  constructor(private note_service: NoteService, private data_service: DataService) { }

  ngOnInit(): void {
    this.get_remainder_notes();
    this.data_service.current_data.subscribe(response =>{
      if(response.type == 'getNotes')
      {
        this.get_remainder_notes();
      }
    })
  }

  get_remainder_notes(){
    this.note_service.get_remainder_notes().subscribe(
      response => {
        console.log(response["data"]);
        this.remainderNotes = response["data"];
        console.log(this.remainderNotes);
      },
      error => {
      console.log(error["error"]["message"]);
      })
    }

}

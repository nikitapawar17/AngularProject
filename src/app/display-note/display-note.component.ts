import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note-service.service';

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

  @Input() childMessage : any;

  constructor(private note_service: NoteService) { }

  ngOnInit(): void {
  }

 
  
}

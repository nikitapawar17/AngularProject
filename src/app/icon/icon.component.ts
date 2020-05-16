import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() is_trash;

  colors = ['#fff','#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#d7aefb',
              '#fdcfe8','#e6c9a8','#e8eaed'];
  
   note_id : any;
   @Input() note_info;

  constructor(private note_service: NoteService) { }

  ngOnInit(): void {
  }

  
  is_archive()
  {  
    if(this.note_info != undefined)
    {
      console.log(this.note_info, "---->")
      this.note_id = this.note_info.note_id;

      return this.note_service.is_archive(this.note_id).subscribe(response => {
  
      },
      error =>
      {
        console.log("Error", error);
      })
    }
    else
    {
        console.log(this.note_info)
        alert("Invalid ")
    }
     
    }

}

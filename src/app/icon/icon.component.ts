import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() is_trash;


  colors = ['#fff','#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#d7aefb',
              '#fdcfe8','#e6c9a8','#e8eaed'];

  constructor() { }

  ngOnInit(): void {
  }

}

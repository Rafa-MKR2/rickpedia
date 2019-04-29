import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-audio',
  templateUrl: './card-audio.component.html',
  styleUrls: ['./card-audio.component.css']
})
export class CardAudioComponent implements OnInit {

  @Input() src=''
  @Input() name='';
  @Input() species=''
  @Input() gender=''
  @Input() status=''

  

  constructor() { }

  ngOnInit() {
  }

}

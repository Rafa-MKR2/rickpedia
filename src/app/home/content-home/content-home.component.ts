import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from 'src/app/models/cardaudio';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})


export class ContentHomeComponent implements OnInit {

  lista:Character[]=[];
  filter:string='';

  constructor(private ativetedRoute: ActivatedRoute) { }

  ngOnInit() {
  this.lista = this.ativetedRoute.snapshot.data.card.results;
  
  }

  searchInput(text: string){
   return this.filter = text;
  }
  


}

import { Component,  Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from '../models/cardaudio';

@Component({
    selector: 'app-card-lista',
    templateUrl: './lista.component.html'
})
export class ListaComponent implements OnChanges{
  
    


    
    @Input() Inputlista:Character[]=[]
    rows = []

    constructor(){}

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.Inputlista)
        this.rows = this.groupColumns(this.Inputlista)
    }
    groupColumns(card:Character[]){

        let newRow =[]
        for(let index = 0; index<card.length; index+=3){
            newRow.push(card.slice(index, index+3))
        }
        return newRow
    }
    
}
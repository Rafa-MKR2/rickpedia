import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{


    transform(listaCard: any[], descriptionQuery:string) {

        descriptionQuery = descriptionQuery
        .trim()
        .toLowerCase()

        if(descriptionQuery){
            return listaCard.filter(card=> 
                card.name.toLowerCase()
                .includes(descriptionQuery));
        }else{
            return listaCard
        }

    }

}
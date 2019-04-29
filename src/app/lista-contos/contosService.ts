import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRickMorty } from '../models/cardaudio';


@Injectable({ providedIn: 'root' })
export class ContosService{

    constructor(private http: HttpClient){}



    lista(){
       return this.http.get<ApiRickMorty>('https://rickandmortyapi.com/api/character')
    }
}
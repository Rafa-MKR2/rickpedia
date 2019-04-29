import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ContosService } from 'src/app/lista-contos/contosService';
import {  ApiRickMorty } from 'src/app/models/cardaudio';

@Injectable({providedIn: 'root'})

export class HomeResolver implements Resolve<Observable<ApiRickMorty>>{
   
    constructor(private service: ContosService){}


   
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
       return  this.service.lista()
    }
}
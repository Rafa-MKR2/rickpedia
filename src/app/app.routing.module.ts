import { NgModule } from '@angular/core';
import {  Routes, RouterModule} from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ContentHomeComponent } from './home/content-home/content-home.component';
import { HomeResolver } from './home/content-home/home.resolver';


const routes: Routes =[
    {path:'', component: ContentHomeComponent,
     resolve: {
         card:HomeResolver
     }
    },
    {path:'**', component: NotFoundComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardAudioComponent } from './card-audio/card-audio.component';
import { ListaComponent } from './lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListaComponent,
    CardAudioComponent,
    
  ],
  exports: [ ListaComponent]
})
export class ListaContosModule { }

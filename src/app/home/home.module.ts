import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentHomeComponent } from './content-home/content-home.component';
import { ListaContosModule } from '../lista-contos/lista-contos.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FilterByDescription } from '../lista-contos/filter-by-description.pipe';

@NgModule({
  imports: [
    CommonModule,
    ListaContosModule,
    NavbarModule
  ],
  declarations: [
    ContentHomeComponent,
    FilterByDescription
    
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent,
    SearchComponent
  ],
  exports:[ 
    MenuComponent,
    SearchComponent 
]
})
export class NavbarModule { }

import { Component,  Output, OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{
   
    @Output() onTyping = new EventEmitter<string>()
    debounce: Subject<string> =  new Subject<string>()


    ngOnInit(): void {
      this.debounce
      .pipe(debounceTime(500))
      .subscribe(filter => this.onTyping.emit(filter))
    }

    ngOnDestroy(){
      this.debounce.unsubscribe()
    }
    

}
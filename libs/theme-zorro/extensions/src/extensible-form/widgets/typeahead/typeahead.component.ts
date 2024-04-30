import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { filter, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './typeahead.component.html',
  styles: [],
})
export class TypeaheadComponent extends WidgetComponent{
  inputValue: string;
  constructor(injector: Injector) {
    super(injector);
  }

  filteredOptions$: Observable<string[]> = of([]);

  onChange(value) {
    this.filteredOptions$ = this.options$.pipe(map(o=>{
      return o.filter(x=>x.key.indexOf(value)!==-1).map(x=>x.key);
      
    }))
  }
}

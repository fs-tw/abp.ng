import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './date.component.html',
  styles: [
  ]
})
export class DateComponent extends WidgetComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
  }

}

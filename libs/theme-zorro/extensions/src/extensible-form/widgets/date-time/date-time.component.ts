import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './date-time.component.html',
  styles: [
  ]
})
export class DateTimeComponent extends WidgetComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
   }
   
  ngOnInit(): void {
  }

}

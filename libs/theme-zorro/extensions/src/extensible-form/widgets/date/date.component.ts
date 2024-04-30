import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './date.component.html',
  styles: [
  ]
})
export class DateComponent extends WidgetComponent {

  constructor(injector:Injector) {
    super(injector);
   }

}

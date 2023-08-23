import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './time.component.html',
  styles: [
  ]
})
export class TimeComponent extends WidgetComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
  }

}

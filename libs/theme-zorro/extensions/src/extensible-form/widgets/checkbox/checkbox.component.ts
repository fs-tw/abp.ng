import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './checkbox.component.html',
  styles: [
  ]
})
export class CheckboxComponent extends WidgetComponent implements OnInit {

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
  }

}

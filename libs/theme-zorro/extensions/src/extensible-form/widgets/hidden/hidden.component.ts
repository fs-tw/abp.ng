import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './hidden.component.html',
  styles: [],
})
export class HiddenComponent extends WidgetComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}

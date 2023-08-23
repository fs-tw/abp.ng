import { ABP } from '@abp/ng.core';
import { Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './select.component.html',
  styles: [],
})
export class SelectComponent extends WidgetComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  trackByValue(index, item: ABP.Option<any>) {
    return item.value;
  }

  ngOnInit(): void {}
}

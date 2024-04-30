import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  templateUrl: './textarea.component.html',
  styles: [
  ]
})
export class TextareaComponent extends WidgetComponent {

  constructor(injector:Injector) {
    super(injector);
   }

}

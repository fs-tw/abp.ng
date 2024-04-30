import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { ePropType, FormProp } from '@abp/ng.components/extensible';

@Component({
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent extends WidgetComponent {
  @ViewChild('field') field: ElementRef<HTMLElement>;
  constructor(injector: Injector) {
    super(injector);
  }

  getType(prop: FormProp): string {
    switch (prop.type) {
      case ePropType.Date:
      case ePropType.String:
        return 'text';
      case ePropType.Boolean:
        return 'checkbox';
      case ePropType.Number:
        return 'number';
      case ePropType.Email:
        return 'email';
      case ePropType.Password:
        return 'password';
      default:
        return 'hidden';
    }
  }
}

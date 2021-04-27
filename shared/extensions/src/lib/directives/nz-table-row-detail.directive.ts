import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[row-detail-template]',
})
export class NzTableRowDetailDirective {
  constructor(public template: TemplateRef<any>) {
   
  }
}

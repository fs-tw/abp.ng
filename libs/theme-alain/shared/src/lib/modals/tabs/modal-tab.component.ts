import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'fs-modal-tab',
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class ModalTabComponent {
  @Input() title: string;
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  isValid() {
    return true;
  }

  getValue() {
    return {};
  }

}

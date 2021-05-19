import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Injector,
} from '@angular/core';
import { ModalTabComponent } from '../modal-tab.component';
import { FormGroup } from '@angular/forms';
import { ModalComponent } from '../../modal.component';

@Component({
  selector: 'fs-modal-info-tab',
  templateUrl: './modal-info-tab.component.html',
  providers: [
    {
      provide: ModalTabComponent,
      useExisting: ModalInfoTabComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalInfoTabComponent extends ModalTabComponent {
  //title = 'NewPage';

  @Input() form: FormGroup;
  @Input() selectedRecord = {};

  constructor(public modal: ModalComponent) {
    super();
  }

  isValid() {
    return this.form.valid;
  }

  getValue() {
    return this.form.value;
  }
}

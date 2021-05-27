import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ModalTabComponent } from './tabs/modal-tab.component';

@Component({
  selector: 'fs-modal',
  templateUrl: './modal.component.html',
  styles: [
    `
      ::ng-deep .cdk-overlay-container {
        z-index: 2000;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();

  @ContentChildren(ModalTabComponent)
  tabs: QueryList<ModalTabComponent>;

  activeTab: number = 0;
  selectedInnerTab: ModalTabComponent;
  selectedInnerIndex: number;

  constructor() {}

  ngOnInit(): void {}

  onVisibleChange(event: boolean) {
    this.visible = event;
    this.visibleChange.emit(event);
  }

  shouldBeDisabled = () => {
    return !!this.tabs.some((tab) => !tab.isValid());
  };

  onSave() {
    if (!this.shouldBeDisabled()) {
      const value = this.tabs.reduce(
        (retVal, curr) => ({ ...retVal, ...curr.getValue() }),
        {}
      );
      this.save.emit(value);
    }
  }

  setInnerContext(
    outerIndex: number,
    tab: ModalTabComponent,
    innerIndex: number
  ) {
    this.activeTab = outerIndex;
    this.selectedInnerTab = tab;
    this.selectedInnerIndex = innerIndex;
  }
}

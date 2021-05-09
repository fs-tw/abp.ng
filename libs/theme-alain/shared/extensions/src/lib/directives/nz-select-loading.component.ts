import { Component, Input, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  template: `
   <ng-template #loading>
      <nz-spin *ngIf="isLoading$ | async"></nz-spin>
    </ng-template>  `,
})
export class NzSelectLoadingComponent {
  @Input() isLoading$: BehaviorSubject<boolean>;
  @ViewChild('loading') loading:TemplateRef<any>;
}

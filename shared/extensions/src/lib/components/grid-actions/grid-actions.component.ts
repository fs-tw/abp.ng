import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  TrackByFunction,
} from '@angular/core';
import { EntityAction, EntityActionList,GridActionsComponent as AbpGridActionsComponent } from '@abp/ng.theme.shared/extensions';
import { EXTENSIONS_ACTION_TYPE } from '@abp/ng.theme.shared/extensions';

@Component({
  exportAs: 'nzGridActions',
  selector: 'nz-grid-actions',
  templateUrl: './grid-actions.component.html',
  providers: [
    {
      provide: EXTENSIONS_ACTION_TYPE,
      useValue: 'entityActions',
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridActionsComponent<R = any> extends AbpGridActionsComponent<R> {
  @Input() icon = 'fa fa-cog';

  @Input() readonly index: number;

  @Input() text = '';

  readonly trackByFn: TrackByFunction<EntityAction<R>> = (_, item) => item.text;

  constructor(injector: Injector) {
    super(injector);
  }
}

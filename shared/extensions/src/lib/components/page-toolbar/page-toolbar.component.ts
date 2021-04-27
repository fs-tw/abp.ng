import {
  ChangeDetectionStrategy,
  Component,
  InjectFlags,
  InjectionToken,
  Injector,
  TrackByFunction,
  Type,
} from '@angular/core';
import { ToolbarActionList, ToolbarComponent } from '@abp/ng.theme.shared/extensions';
import {
  EXTENSIONS_ACTION_CALLBACK,
  EXTENSIONS_ACTION_DATA,
  EXTENSIONS_ACTION_TYPE,
} from '@abp/ng.theme.shared/extensions';
import { PageToolbarComponent as AbpPageToolbarComponent } from '@abp/ng.theme.shared/extensions';

@Component({
  exportAs: 'nzPageToolbar',
  selector: 'nz-page-toolbar',
  templateUrl: './page-toolbar.component.html',
  providers: [
    {
      provide: EXTENSIONS_ACTION_TYPE,
      useValue: 'toolbarActions',
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageToolbarComponent<R = any> extends AbpPageToolbarComponent<R> {
  readonly trackByFn: TrackByFunction<ToolbarComponent<R>> = (_, item) =>
    item.action || item.component;

  constructor(private readonly _injector: Injector) {
    super(_injector);
  }
}

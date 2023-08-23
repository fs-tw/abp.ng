import { CoreModule, TrackByService } from '@abp/ng.core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Optional,
  SkipSelf,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { ExtensionsService, EXTENSIONS_IDENTIFIER, UiExtensionsModule, ExtensibleFormComponent as AbpExtensibleFormComponent } from '@abp/ng.theme.shared/extensions';
import { selfFactory } from './factory.util';
import { ExtensibleFormPropComponent } from './extensible-form-prop.component';

@Component({
  exportAs: 'fsTwExtensibleForm',
  selector: 'fs-tw-extensible-form',
  templateUrl: './extensible-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: selfFactory,
      deps: [[new Optional(), new SkipSelf(), ControlContainer]],
    },
  ],
  standalone: true,
  imports: [CoreModule, UiExtensionsModule, ExtensibleFormPropComponent]
})
export class ExtensibleFormComponent<R = any> extends AbpExtensibleFormComponent<R> {

  constructor(
    public readonly _cdRef: ChangeDetectorRef,
    public readonly _track: TrackByService,
    private _container: ControlContainer,
    private _extensions: ExtensionsService,
    @Inject(EXTENSIONS_IDENTIFIER) private _identifier: string,
  ) {
    super(_cdRef, _track, _container, _extensions, _identifier);
  }
}

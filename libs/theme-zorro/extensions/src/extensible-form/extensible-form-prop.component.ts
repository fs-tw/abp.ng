import { ExtensibleModule } from '@abp/ng.components/extensible';
import { ConfigStateService, CoreModule, TrackByService } from '@abp/ng.core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from '@abp/ng.theme.shared';
import { TimeAdapter } from '@abp/ng.theme.shared';
import { selfFactory } from './factory.util';
import { ExtensibleFormPropComponent as AbpExtensibleFormPropComponent } from '@abp/ng.components/extensible';

@Component({
  selector: 'fs-tw-extensible-form-prop',
  templateUrl: './extensible-form-prop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: selfFactory,
      deps: [[new Optional(), new SkipSelf(), ControlContainer]],
    },
    { provide: NgbDateAdapter, useClass: DateAdapter },
    { provide: NgbTimeAdapter, useClass: TimeAdapter },
  ],
  standalone: true,
  imports: [CoreModule, ExtensibleModule]
})
export class ExtensibleFormPropComponent extends AbpExtensibleFormPropComponent {
  constructor(
    public readonly _cdRef: ChangeDetectorRef,
    public readonly _track: TrackByService,
    protected _configState: ConfigStateService,
    _groupDirective: FormGroupDirective,
    private _injector: Injector,
  ) {
    super();
  }
}

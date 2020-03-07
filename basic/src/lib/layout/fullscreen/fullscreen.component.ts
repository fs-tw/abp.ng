import { Component } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';
@Component({
    selector: 'layout-fullscreen',
    templateUrl: './fullscreen.component.html',
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[class.alain-fullscreen]': 'true',
    },
})
export class LayoutFullScreenComponent {
    static type = eLayoutType.empty;
}

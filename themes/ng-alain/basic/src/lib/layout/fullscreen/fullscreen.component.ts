import { Component, OnInit } from '@angular/core';
import { eLayoutType, AddReplaceableComponent } from '@abp/ng.core';
import { PageBarComponent } from '../../shared/components/page-bar/page-bar.component';
import { Store } from '@ngxs/store';

@Component({
    selector: 'layout-fullscreen',
    templateUrl: './fullscreen.component.html',
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[class.alain-fullscreen]': 'true',
    },
})
export class LayoutFullScreenComponent implements OnInit {
    static type = eLayoutType.empty;
    constructor(
        private store:Store,
    ){
    }
    ngOnInit() {
        this.store.dispatch(new AddReplaceableComponent({ component: PageBarComponent, key: 'Core.PageBarComponent' }));
    }
}

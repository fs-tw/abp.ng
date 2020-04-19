import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { PageBarComponent } from './components/page-bar/page-bar.component';
import { AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';

@NgModule({
    declarations: [
        PageBarComponent
    ],
    entryComponents: [
        PageBarComponent
    ],
    imports: [
        CoreModule,
        ThemeBasicModule,
        NgAlainSharedModule,
        LayoutModule,
        SharedModule
    ],
    exports: [
        ThemeBasicModule,
        NgAlainSharedModule,
        LayoutModule,
        SharedModule
    ]
})
export class NgAlainBasicModule {
    constructor(private store: Store) {
        store.dispatch(new AddReplaceableComponent({ component: PageBarComponent, key: 'Core.PageBarComponent' }));
    
      }
 }

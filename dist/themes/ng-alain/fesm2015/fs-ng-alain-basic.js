import { __decorate } from 'tslib';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent, LayoutModule } from '@fs/ng-alain/layout';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';

const BASIC_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
function configureStyles(store) {
    return () => {
        //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
            component: LayoutDefaultComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.AccountLayoutComponent" /* AccountLayout */,
            component: LayoutPassportComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
            component: LayoutFullScreenComponent,
        }),
    ]);
}

var NgAlainBasicModule_1;
let NgAlainBasicModule = NgAlainBasicModule_1 = class NgAlainBasicModule {
    static forRoot() {
        return {
            ngModule: NgAlainBasicModule_1,
            providers: [BASIC_THEME_STYLES_PROVIDERS],
        };
    }
};
NgAlainBasicModule = NgAlainBasicModule_1 = __decorate([
    NgModule({
        imports: [
            NgAlainSharedModule,
            ThemeBasicModule,
            LayoutModule
        ],
        exports: [
            NgAlainSharedModule,
            ThemeBasicModule
        ]
    })
], NgAlainBasicModule);

/**
 * Generated bundle index. Do not edit.
 */

export { BASIC_THEME_STYLES_PROVIDERS, NgAlainBasicModule, configureStyles };
//# sourceMappingURL=fs-ng-alain-basic.js.map

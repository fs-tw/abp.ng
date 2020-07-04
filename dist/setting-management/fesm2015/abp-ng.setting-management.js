import { __decorate, __metadata } from 'tslib';
import { SettingTabsService, DynamicLayoutComponent, AuthGuard, ReplaceableRouteContainerComponent, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Injectable, Component, NgModule } from '@angular/core';
import { Action, Selector, State, Store, NgxsModule } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

class SetSelectedSettingTab {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSelectedSettingTab.type = '[SettingManagement] Set Selected Tab';

let SettingManagementState = class SettingManagementState {
    static getSelectedTab({ selectedTab }) {
        return selectedTab;
    }
    settingManagementAction({ patchState }, { payload }) {
        patchState({
            selectedTab: payload,
        });
    }
};
__decorate([
    Action(SetSelectedSettingTab),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetSelectedSettingTab]),
    __metadata("design:returntype", void 0)
], SettingManagementState.prototype, "settingManagementAction", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingManagementState, "getSelectedTab", null);
SettingManagementState = __decorate([
    State({
        name: 'SettingManagementState',
        defaults: {},
    }),
    Injectable()
], SettingManagementState);

let SettingManagementComponent = class SettingManagementComponent {
    constructor(store, settingTabs) {
        this.store = store;
        this.settingTabs = settingTabs;
        this.subscription = new Subscription();
        this.settings = [];
        this.trackByFn = (_, item) => item.name;
    }
    set selected(value) {
        this.store.dispatch(new SetSelectedSettingTab(value));
    }
    get selected() {
        const value = this.store.selectSnapshot(SettingManagementState.getSelectedTab);
        return (value === null || value === void 0 ? void 0 : value.component) ? value : this.settings[0] || {};
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscription.add(this.settingTabs.visible$.subscribe(settings => {
            this.settings = settings;
            if (!this.selected)
                this.selected = this.settings[0];
        }));
    }
};
SettingManagementComponent = __decorate([
    Component({
        selector: 'abp-setting-management',
        template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\">\r\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\r\n  </div>\r\n  <div id=\"breadcrumb\" class=\"col-lg-auto pl-lg-0\">\r\n    <abp-breadcrumb></abp-breadcrumb>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"SettingManagementWrapper\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-3\">\r\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n            <li\r\n              *abpFor=\"let setting of settings; trackBy: trackByFn\"\r\n              (click)=\"selected = setting\"\r\n              class=\"nav-item pointer\"\r\n              [abpPermission]=\"setting.requiredPolicy\"\r\n            >\r\n              <a\r\n                class=\"nav-link\"\r\n                [id]=\"setting.name + '-tab'\"\r\n                role=\"tab\"\r\n                [class.active]=\"setting.name === selected.name\"\r\n                >{{ setting.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-12 col-md-9\">\r\n          <div *ngIf=\"settings.length\" class=\"tab-content\">\r\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\r\n              <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [Store, SettingTabsService])
], SettingManagementComponent);

const ɵ0 = {
    requiredPolicy: 'AbpAccount.SettingManagement',
    replaceableComponent: {
        key: "SettingManagement.SettingManagementComponent" /* SettingManagement */,
        defaultComponent: SettingManagementComponent,
    },
};
const routes = [
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
        ],
    },
];
let SettingManagementRoutingModule = class SettingManagementRoutingModule {
};
SettingManagementRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SettingManagementRoutingModule);

var SettingManagementModule_1;
let SettingManagementModule = SettingManagementModule_1 = class SettingManagementModule {
    static forChild() {
        return {
            ngModule: SettingManagementModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(SettingManagementModule_1.forChild());
    }
};
SettingManagementModule = SettingManagementModule_1 = __decorate([
    NgModule({
        declarations: [SettingManagementComponent],
        exports: [SettingManagementComponent],
        imports: [
            SettingManagementRoutingModule,
            CoreModule,
            ThemeSharedModule,
            NgxsModule.forFeature([SettingManagementState]),
        ],
    })
], SettingManagementModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementComponent, SettingManagementModule, SettingManagementRoutingModule as ɵa, SettingManagementState as ɵc, SetSelectedSettingTab as ɵd };
//# sourceMappingURL=abp-ng.setting-management.js.map

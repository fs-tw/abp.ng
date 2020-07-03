import { ɵɵtext, ɵɵpipe, ɵɵnextContext, ɵɵtextInterpolate2, ɵɵpipeBind1, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵstyleProp, ɵɵtextInterpolate1, ɵɵelementContainerStart, ɵɵtemplateRefExtractor, ɵɵelementContainerEnd, ɵɵreference, EventEmitter, ɵɵdirectiveInject, Renderer2, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵpureFunction1, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent as PermissionManagementComponent$1 } from '@abp/ng.permission-management';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { NzCheckboxWrapperComponent, NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NgControlStatus, NgModel } from '@angular/forms';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { LocalizationPipe, CoreModule } from '@abp/ng.core';
import { PermissionManagementWrapModule } from '@fs/permission-management/wrap';

function PermissionManagementComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const data_r1 = ɵɵnextContext().ngIf;
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(1, 2, "AbpPermissionManagement::Permissions"), " - ", data_r1.entityName, " ");
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 13);
    ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template_li_click_0_listener() { ɵɵrestoreView(_r13); const group_r11 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(3); return ctx_r12.onChangeGroup(group_r11); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵproperty("nzSelected", (ctx_r9.selectedGroup == null ? null : ctx_r9.selectedGroup.name) === (group_r11 == null ? null : group_r11.name));
    ɵɵadvance(1);
    ɵɵtextInterpolate(group_r11 == null ? null : group_r11.displayName);
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const provider_r17 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate2("", provider_r17.providerName, ": ", provider_r17.providerKey, "");
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "nz-checkbox-wrapper");
    ɵɵelementStart(2, "label", 14);
    ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template_label_ngModelChange_2_listener() { ɵɵrestoreView(_r19); const permission_r14 = ctx.$implicit; const ctx_r18 = ɵɵnextContext(3); return ctx_r18.onClickCheckbox(permission_r14); });
    ɵɵtext(3);
    ɵɵtemplate(4, PermissionManagementComponent_ng_container_0_ng_template_4_div_16_span_4_Template, 2, 2, "span", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const permission_r14 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵstyleProp("margin-left", permission_r14.margin + "px");
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r10.getChecked(permission_r14.name))("nzDisabled", ctx_r10.isGrantedByOtherProviderName(permission_r14.grantedProviders));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", permission_r14.displayName, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", permission_r14.grantedProviders);
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-checkbox-wrapper");
    ɵɵelementStart(1, "label", 5);
    ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.selectAllTab = $event; })("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_1_listener() { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.onClickSelectAll(); });
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "div", 7);
    ɵɵelementStart(6, "ul", 8);
    ɵɵtemplate(7, PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template, 2, 2, "li", 9);
    ɵɵpipe(8, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 10);
    ɵɵelementStart(10, "div", 11);
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "nz-checkbox-wrapper");
    ɵɵelementStart(13, "label", 5);
    ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_13_listener($event) { ɵɵrestoreView(_r21); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.selectThisTab = $event; })("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_13_listener() { ɵɵrestoreView(_r21); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.onClickSelectThisTab(); });
    ɵɵtext(14);
    ɵɵpipe(15, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(16, PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template, 5, 6, "div", 12);
    ɵɵpipe(17, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r5.selectAllTab)("nzIndeterminate", ctx_r5.selectAllIndeterminate);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 11, "AbpPermissionManagement::SelectAllInAllTabs"), " ");
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(8, 13, ctx_r5.groups$))("ngForTrackBy", ctx_r5.trackByFn);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r5.selectedGroup == null ? null : ctx_r5.selectedGroup.displayName);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r5.selectThisTab)("nzIndeterminate", ctx_r5.selectAllThisTabIndeterminate);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 15, "AbpPermissionManagement::SelectAllInThisTab"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(17, 17, ctx_r5.selectedGroupPermissions$))("ngForTrackBy", ctx_r5.trackByFn);
} }
function PermissionManagementComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_6_Template_button_click_0_listener() { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(2); return ctx_r25.visible = false; });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 17);
    ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_6_Template_button_click_3_listener() { ɵɵrestoreView(_r26); const ctx_r27 = ɵɵnextContext(2); return ctx_r27.submit(); });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "AbpIdentity::Save"), " ");
} }
function PermissionManagementComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "nz-modal", 1);
    ɵɵlistener("nzVisibleChange", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzVisibleChange_1_listener($event) { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(); return ctx_r28.visible = $event; })("nzAfterOpen", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzAfterOpen_1_listener() { ɵɵrestoreView(_r29); const ctx_r30 = ɵɵnextContext(); return ctx_r30.initModal(); })("nzOnCancel", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzOnCancel_1_listener() { ɵɵrestoreView(_r29); const ctx_r31 = ɵɵnextContext(); return ctx_r31.visible = false; });
    ɵɵtemplate(2, PermissionManagementComponent_ng_container_0_ng_template_2_Template, 2, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, PermissionManagementComponent_ng_container_0_ng_template_4_Template, 18, 19, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PermissionManagementComponent_ng_container_0_ng_template_6_Template, 6, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r2 = ɵɵreference(3);
    const _r4 = ɵɵreference(5);
    const _r6 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzVisible", ctx_r0.visible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
} }
const _c0 = function (a0) { return { entityName: a0 }; };
class PermissionManagementComponent extends PermissionManagementComponent$1 {
    constructor(_store, _renderer) {
        super(_store, _renderer);
        this._store = _store;
        this._renderer = _renderer;
        this.hideBadges = false;
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this.selectAllIndeterminate = false;
        this.selectAllThisTabIndeterminate = false;
        console.log('yc');
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (value === this._visible)
            return;
        if (value) {
            this.openModal().subscribe(() => {
                this._visible = true;
                this.visibleChange.emit(true);
            });
        }
        else {
            this.selectedGroup = null;
            this._visible = false;
            this.visibleChange.emit(false);
        }
    }
    isGrantedByOtherProviderName(grantedProviders) {
        if (grantedProviders.length) {
            return grantedProviders.findIndex(p => p.providerName !== this.providerName) > -1;
        }
        return false;
    }
    onClickSelectAll() {
        this.selectAllIndeterminate = false;
        this.permissions = this.permissions.map(permission => (Object.assign(Object.assign({}, permission), { isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || this.selectAllTab })));
        this.selectThisTab = this.selectAllTab;
    }
    onClickSelectThisTab() {
        this.selectAllThisTabIndeterminate = false;
        this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
            permissions.forEach(permission => {
                if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                const index = this.permissions.findIndex(per => per.name === permission.name);
                this.permissions = [
                    ...this.permissions.slice(0, index),
                    Object.assign(Object.assign({}, this.permissions[index]), { isGranted: this.selectThisTab }),
                    ...this.permissions.slice(index + 1)
                ];
            });
        });
        this.setGrantCheckboxState();
    }
    onClickCheckbox(clickedPermission) {
        if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout(() => {
            this.permissions = this.permissions.map(per => {
                if (clickedPermission.name === per.name) {
                    return Object.assign(Object.assign({}, per), { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return Object.assign(Object.assign({}, per), { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return Object.assign(Object.assign({}, per), { isGranted: true });
                }
                return per;
            });
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
        }, 0);
    }
    setTabCheckboxState() {
        this.selectedGroupPermissions$.pipe(take(1)).subscribe(permissions => {
            const selectedPermissions = permissions.filter(per => per.isGranted);
            if (selectedPermissions.length === permissions.length) {
                this.selectAllThisTabIndeterminate = false;
                this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                this.selectAllThisTabIndeterminate = false;
                this.selectThisTab = false;
            }
            else {
                this.selectAllThisTabIndeterminate = true;
            }
        });
    }
    setGrantCheckboxState() {
        const selectedAllPermissions = this.permissions.filter(per => per.isGranted);
        if (selectedAllPermissions.length === this.permissions.length) {
            this.selectAllIndeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            this.selectAllIndeterminate = false;
            this.selectAllTab = false;
        }
        else {
            this.selectAllIndeterminate = true;
        }
    }
}
PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(t) { return new (t || PermissionManagementComponent)(ɵɵdirectiveInject(Store), ɵɵdirectiveInject(Renderer2)); };
PermissionManagementComponent.ɵcmp = ɵɵdefineComponent({ type: PermissionManagementComponent, selectors: [["ng-alain-permission-management"]], inputs: { providerName: "providerName", providerKey: "providerKey", hideBadges: "hideBadges", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[4, "ngIf"], ["nzWidth", "1040", 3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzAfterOpen", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [1, "main"], [1, "menu"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "content"], [1, "title"], [3, "margin-left", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function PermissionManagementComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PermissionManagementComponent_ng_container_0_Template, 8, 4, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpureFunction1(3, _c0, ɵɵpipeBind1(1, 1, ctx.entityName$)));
    } }, directives: [NgIf, NzModalComponent, NzCheckboxWrapperComponent, NzCheckboxComponent, NgControlStatus, NgModel, NzMenuDirective, NgForOf, ɵNzTransitionPatchDirective, NzMenuItemDirective, NzButtonComponent, NzWaveDirective], pipes: [AsyncPipe, LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;padding-top:24px}.main[_ngcontent-%COMP%]{background-color:#fff;display:flex;overflow:auto;width:100%}.menu[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0;width:224px}.menu[_ngcontent-%COMP%]     .ant-menu-inline{border:none}.menu[_ngcontent-%COMP%]     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content[_ngcontent-%COMP%]{flex:1;padding:8px 40px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content[_ngcontent-%COMP%]     .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content[_ngcontent-%COMP%]     .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main[_ngcontent-%COMP%]{flex-direction:column}.main[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{border:none;width:100%}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PermissionManagementComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-permission-management',
                styleUrls: ['./permission-management.component.less'],
                templateUrl: './permission-management.component.html'
            }]
    }], function () { return [{ type: Store }, { type: Renderer2 }]; }, { providerName: [{
            type: Input
        }], providerKey: [{
            type: Input
        }], hideBadges: [{
            type: Input
        }], visible: [{
            type: Input
        }], visibleChange: [{
            type: Output
        }] }); })();

//import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'
class PermissionManagementNgAlainModule {
}
PermissionManagementNgAlainModule.ɵmod = ɵɵdefineNgModule({ type: PermissionManagementNgAlainModule });
PermissionManagementNgAlainModule.ɵinj = ɵɵdefineInjector({ factory: function PermissionManagementNgAlainModule_Factory(t) { return new (t || PermissionManagementNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PermissionManagementNgAlainModule, { declarations: [PermissionManagementComponent], imports: [CoreModule,
        NgAlainBasicModule,
        PermissionManagementWrapModule], exports: [PermissionManagementComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PermissionManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [PermissionManagementComponent],
                entryComponents: [PermissionManagementComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    PermissionManagementWrapModule
                ],
                exports: [
                    PermissionManagementComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PermissionManagementComponent, PermissionManagementNgAlainModule };
//# sourceMappingURL=fs-permission-management-ng-alain.js.map

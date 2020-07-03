import { PermissionManagementComponent as AbpPermissionManagementComponent } from '@abp/ng.permission-management';
import { Component, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/modal";
import * as i4 from "ng-zorro-antd/checkbox";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/menu";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/button";
import * as i9 from "ng-zorro-antd/core/wave";
import * as i10 from "@abp/ng.core";
function PermissionManagementComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const data_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(1, 2, "AbpPermissionManagement::Permissions"), " - ", data_r1.entityName, " ");
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r13); const group_r11 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.onChangeGroup(group_r11); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r11 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzSelected", (ctx_r9.selectedGroup == null ? null : ctx_r9.selectedGroup.name) === (group_r11 == null ? null : group_r11.name));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(group_r11 == null ? null : group_r11.displayName);
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const provider_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", provider_r17.providerName, ": ", provider_r17.providerKey, "");
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "nz-checkbox-wrapper");
    i0.ɵɵelementStart(2, "label", 14);
    i0.ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template_label_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r19); const permission_r14 = ctx.$implicit; const ctx_r18 = i0.ɵɵnextContext(3); return ctx_r18.onClickCheckbox(permission_r14); });
    i0.ɵɵtext(3);
    i0.ɵɵtemplate(4, PermissionManagementComponent_ng_container_0_ng_template_4_div_16_span_4_Template, 2, 2, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const permission_r14 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("margin-left", permission_r14.margin + "px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r10.getChecked(permission_r14.name))("nzDisabled", ctx_r10.isGrantedByOtherProviderName(permission_r14.grantedProviders));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", permission_r14.displayName, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", permission_r14.grantedProviders);
} }
function PermissionManagementComponent_ng_container_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-checkbox-wrapper");
    i0.ɵɵelementStart(1, "label", 5);
    i0.ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.selectAllTab = $event; })("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onClickSelectAll(); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "ul", 8);
    i0.ɵɵtemplate(7, PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template, 2, 2, "li", 9);
    i0.ɵɵpipe(8, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵelementStart(10, "div", 11);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "nz-checkbox-wrapper");
    i0.ɵɵelementStart(13, "label", 5);
    i0.ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.selectThisTab = $event; })("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r21); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onClickSelectThisTab(); });
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template, 5, 6, "div", 12);
    i0.ɵɵpipe(17, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.selectAllTab)("nzIndeterminate", ctx_r5.selectAllIndeterminate);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 11, "AbpPermissionManagement::SelectAllInAllTabs"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 13, ctx_r5.groups$))("ngForTrackBy", ctx_r5.trackByFn);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r5.selectedGroup == null ? null : ctx_r5.selectedGroup.displayName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r5.selectThisTab)("nzIndeterminate", ctx_r5.selectAllThisTabIndeterminate);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 15, "AbpPermissionManagement::SelectAllInThisTab"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(17, 17, ctx_r5.selectedGroupPermissions$))("ngForTrackBy", ctx_r5.trackByFn);
} }
function PermissionManagementComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.visible = false; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 17);
    i0.ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.submit(); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpIdentity::Cancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpIdentity::Save"), " ");
} }
function PermissionManagementComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-modal", 1);
    i0.ɵɵlistener("nzVisibleChange", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzVisibleChange_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.visible = $event; })("nzAfterOpen", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzAfterOpen_1_listener() { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.initModal(); })("nzOnCancel", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzOnCancel_1_listener() { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.visible = false; });
    i0.ɵɵtemplate(2, PermissionManagementComponent_ng_container_0_ng_template_2_Template, 2, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PermissionManagementComponent_ng_container_0_ng_template_4_Template, 18, 19, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(6, PermissionManagementComponent_ng_container_0_ng_template_6_Template, 6, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(3);
    const _r4 = i0.ɵɵreference(5);
    const _r6 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzVisible", ctx_r0.visible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
} }
const _c0 = function (a0) { return { entityName: a0 }; };
export class PermissionManagementComponent extends AbpPermissionManagementComponent {
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
PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(t) { return new (t || PermissionManagementComponent)(i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PermissionManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PermissionManagementComponent, selectors: [["ng-alain-permission-management"]], inputs: { providerName: "providerName", providerKey: "providerKey", hideBadges: "hideBadges", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[4, "ngIf"], ["nzWidth", "1040", 3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzAfterOpen", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [1, "main"], [1, "menu"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "content"], [1, "title"], [3, "margin-left", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function PermissionManagementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PermissionManagementComponent_ng_container_0_Template, 8, 4, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction1(3, _c0, i0.ɵɵpipeBind1(1, 1, ctx.entityName$)));
    } }, directives: [i2.NgIf, i3.NzModalComponent, i4.NzCheckboxWrapperComponent, i4.NzCheckboxComponent, i5.NgControlStatus, i5.NgModel, i6.NzMenuDirective, i2.NgForOf, i7.ɵNzTransitionPatchDirective, i6.NzMenuItemDirective, i8.NzButtonComponent, i9.NzWaveDirective], pipes: [i2.AsyncPipe, i10.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;padding-top:24px}.main[_ngcontent-%COMP%]{background-color:#fff;display:flex;overflow:auto;width:100%}.menu[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0;width:224px}.menu[_ngcontent-%COMP%]     .ant-menu-inline{border:none}.menu[_ngcontent-%COMP%]     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content[_ngcontent-%COMP%]{flex:1;padding:8px 40px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content[_ngcontent-%COMP%]     .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content[_ngcontent-%COMP%]     .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main[_ngcontent-%COMP%]{flex-direction:column}.main[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{border:none;width:100%}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PermissionManagementComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-permission-management',
                styleUrls: ['./permission-management.component.less'],
                templateUrl: './permission-management.component.html'
            }]
    }], function () { return [{ type: i1.Store }, { type: i0.Renderer2 }]; }, { providerName: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsNkJBQTZCLElBQUksZ0NBQWdDLEVBQXdCLE1BQU0sK0JBQStCLENBQUM7QUFDeEksT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNRaEMsWUFDRjs7OztJQURFLHdIQUNGOzs7O0lBYVEsOEJBQTZKO0lBQS9CLDBRQUE4QjtJQUFDLFlBQXdCO0lBQUEsaUJBQUs7Ozs7SUFBL0csOElBQWtEO0lBQWdDLGVBQXdCO0lBQXhCLHNFQUF3Qjs7O0lBbUJqTCw0QkFBMkQ7SUFBQSxZQUF1RDtJQUFBLGlCQUFPOzs7SUFBOUQsZUFBdUQ7SUFBdkQsd0ZBQXVEOzs7O0lBVHhILDJCQUVFO0lBQUEsMkNBQ0U7SUFBQSxpQ0FLRTtJQUZLLDJTQUE2QztJQUVsRCxZQUNBO0lBQUEscUhBQTJEO0lBQzdELGlCQUFRO0lBQ1YsaUJBQXNCO0lBQ3hCLGlCQUFNOzs7O0lBWEQsMkRBQThDO0lBR3hDLGVBQXVDO0lBQXZDLGlFQUF1Qyxx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LENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDSCxDQUFDOzswR0ExSFUsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7UUNUMUMsZ0dBQ0U7OztRQURZLHdGQUFtRDs7a0REU3BELDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7Z0JBQ3JELFdBQVcsRUFBRSx3Q0FBd0M7YUFDdEQ7O2tCQUtFLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQW9CTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQgYXMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnQsIFBlcm1pc3Npb25NYW5hZ2VtZW50IH0gZnJvbSAnQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXBlcm1pc3Npb24tbWFuYWdlbWVudCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50IGV4dGVuZHMgQWJwUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRJbnB1dHMsXHJcbiAgUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRPdXRwdXRzIHtcclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IHByb3ZpZGVyTmFtZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IHByb3ZpZGVyS2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgaGlkZUJhZGdlcyA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fdmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEdyb3VwID0gbnVsbDtcclxuICAgICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIHNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmU6IFN0b3JlLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihfc3RvcmUsIF9yZW5kZXJlcik7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3ljJyk7XHJcbiAgfVxyXG4gIGlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUoZ3JhbnRlZFByb3ZpZGVyczogUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyW10pOiBib29sZWFuIHtcclxuICAgIGlmIChncmFudGVkUHJvdmlkZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZ3JhbnRlZFByb3ZpZGVycy5maW5kSW5kZXgocCA9PiBwLnByb3ZpZGVyTmFtZSAhPT0gdGhpcy5wcm92aWRlck5hbWUpID4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIG9uQ2xpY2tTZWxlY3RBbGwoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgIHRoaXMucGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLm1hcChwZXJtaXNzaW9uID0+ICh7XHJcbiAgICAgIC4uLnBlcm1pc3Npb24sXHJcbiAgICAgIGlzR3JhbnRlZDogdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykgfHwgdGhpcy5zZWxlY3RBbGxUYWIsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RUaGlzVGFiID0gdGhpcy5zZWxlY3RBbGxUYWI7XHJcbiAgfVxyXG4gIG9uQ2xpY2tTZWxlY3RUaGlzVGFiKCkge1xyXG4gICAgdGhpcy5zZWxlY3RBbGxUaGlzVGFiSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEdyb3VwUGVybWlzc2lvbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHBlcm1pc3Npb25zID0+IHtcclxuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgICBpZiAocGVybWlzc2lvbi5pc0dyYW50ZWQgJiYgdGhpcy5pc0dyYW50ZWRCeU90aGVyUHJvdmlkZXJOYW1lKHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBlcm1pc3Npb25zLmZpbmRJbmRleChwZXIgPT4gcGVyLm5hbWUgPT09IHBlcm1pc3Npb24ubmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBbXHJcbiAgICAgICAgICAuLi50aGlzLnBlcm1pc3Npb25zLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgIHsgLi4udGhpcy5wZXJtaXNzaW9uc1tpbmRleF0sIGlzR3JhbnRlZDogdGhpcy5zZWxlY3RUaGlzVGFiIH0sXHJcbiAgICAgICAgICAuLi50aGlzLnBlcm1pc3Npb25zLnNsaWNlKGluZGV4ICsgMSlcclxuICAgICAgICBdO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0R3JhbnRDaGVja2JveFN0YXRlKCk7XHJcbiAgfVxyXG4gIG9uQ2xpY2tDaGVja2JveChjbGlja2VkUGVybWlzc2lvbjogUGVybWlzc2lvbk1hbmFnZW1lbnQuUGVybWlzc2lvbikge1xyXG4gICAgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLmlzR3JhbnRlZCAmJiB0aGlzLmlzR3JhbnRlZEJ5T3RoZXJQcm92aWRlck5hbWUoY2xpY2tlZFBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVycykpIHJldHVybjtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb25zID0gdGhpcy5wZXJtaXNzaW9ucy5tYXAocGVyID0+IHtcclxuICAgICAgICBpZiAoY2xpY2tlZFBlcm1pc3Npb24ubmFtZSA9PT0gcGVyLm5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiAhcGVyLmlzR3JhbnRlZCB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2xpY2tlZFBlcm1pc3Npb24ubmFtZSA9PT0gcGVyLnBhcmVudE5hbWUgJiYgY2xpY2tlZFBlcm1pc3Npb24uaXNHcmFudGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5wZXIsIGlzR3JhbnRlZDogZmFsc2UgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsaWNrZWRQZXJtaXNzaW9uLnBhcmVudE5hbWUgPT09IHBlci5uYW1lICYmICFjbGlja2VkUGVybWlzc2lvbi5pc0dyYW50ZWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLnBlciwgaXNHcmFudGVkOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGVyO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0VGFiQ2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnNldEdyYW50Q2hlY2tib3hTdGF0ZSgpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIHNldFRhYkNoZWNrYm94U3RhdGUoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocGVybWlzc2lvbnMgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMuZmlsdGVyKHBlciA9PiBwZXIuaXNHcmFudGVkKTtcclxuICAgICAgaWYgKHNlbGVjdGVkUGVybWlzc2lvbnMubGVuZ3RoID09PSBwZXJtaXNzaW9ucy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaGlzVGFiID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRoaXNUYWIgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbFRoaXNUYWJJbmRldGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNldEdyYW50Q2hlY2tib3hTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkQWxsUGVybWlzc2lvbnMgPSB0aGlzLnBlcm1pc3Npb25zLmZpbHRlcihwZXIgPT4gcGVyLmlzR3JhbnRlZCk7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkQWxsUGVybWlzc2lvbnMubGVuZ3RoID09PSB0aGlzLnBlcm1pc3Npb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxUYWIgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFsbFBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RBbGxUYWIgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwieyBlbnRpdHlOYW1lOiBlbnRpdHlOYW1lJCB8IGFzeW5jIH0gYXMgZGF0YVwiPlxyXG4gIDxuei1tb2RhbCBbKG56VmlzaWJsZSldPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICAgIChuekFmdGVyT3Blbik9XCJpbml0TW9kYWwoKVwiXHJcbiAgICAgICAgICAgIFtuelRpdGxlXT1cIm1vZGFsVGl0bGVcIlxyXG4gICAgICAgICAgICBbbnpDb250ZW50XT1cIm1vZGFsQ29udGVudFwiXHJcbiAgICAgICAgICAgIFtuekZvb3Rlcl09XCJtb2RhbEZvb3RlclwiXHJcbiAgICAgICAgICAgIChuek9uQ2FuY2VsKT1cInZpc2libGU9ZmFsc2VcIlxyXG4gICAgICAgICAgICBueldpZHRoPVwiMTA0MFwiXHJcbiAgPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbW9kYWxUaXRsZT5cclxuICAgICAge3sgJ0FicFBlcm1pc3Npb25NYW5hZ2VtZW50OjpQZXJtaXNzaW9ucycgfCBhYnBMb2NhbGl6YXRpb24gfX0gLSB7eyBkYXRhLmVudGl0eU5hbWUgfX1cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNtb2RhbENvbnRlbnQ+XHJcbiAgICAgIDxuei1jaGVja2JveC13cmFwcGVyID5cclxuICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RBbGxUYWJcIiAobmdNb2RlbENoYW5nZSk9XCJvbkNsaWNrU2VsZWN0QWxsKClcIiBbbnpJbmRldGVybWluYXRlXT1cInNlbGVjdEFsbEluZGV0ZXJtaW5hdGVcIj5cclxuICAgICAgICAgIHt7J0FicFBlcm1pc3Npb25NYW5hZ2VtZW50OjpTZWxlY3RBbGxJbkFsbFRhYnMnIHwgYWJwTG9jYWxpemF0aW9ufX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L256LWNoZWNrYm94LXdyYXBwZXI+XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVwiPlxyXG4gICAgICAgICAgPHVsIG56LW1lbnUgbnpNb2RlPVwiaW5saW5lXCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgZ3JvdXBzJCB8IGFzeW5jOyB0cmFja0J5OiB0cmFja0J5Rm5cIiBuei1tZW51LWl0ZW0gW256U2VsZWN0ZWRdPVwic2VsZWN0ZWRHcm91cD8ubmFtZSA9PT0gZ3JvdXA/Lm5hbWVcIiAoY2xpY2spPVwib25DaGFuZ2VHcm91cChncm91cClcIj57eyBncm91cD8uZGlzcGxheU5hbWUgfX08L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgc2VsZWN0ZWRHcm91cD8uZGlzcGxheU5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgIDxuei1jaGVja2JveC13cmFwcGVyPlxyXG4gICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzZWxlY3RUaGlzVGFiXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DbGlja1NlbGVjdFRoaXNUYWIoKVwiIFtuekluZGV0ZXJtaW5hdGVdPVwic2VsZWN0QWxsVGhpc1RhYkluZGV0ZXJtaW5hdGVcIj5cclxuICAgICAgICAgICAgICB7eydBYnBQZXJtaXNzaW9uTWFuYWdlbWVudDo6U2VsZWN0QWxsSW5UaGlzVGFiJyB8IGFicExvY2FsaXphdGlvbn19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L256LWNoZWNrYm94LXdyYXBwZXI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwZXJtaXNzaW9uIG9mIHNlbGVjdGVkR3JvdXBQZXJtaXNzaW9ucyQgfCBhc3luYzsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeUZuXCJcclxuICAgICAgICAgICAgICAgW3N0eWxlLm1hcmdpbi1sZWZ0XT1cInBlcm1pc3Npb24ubWFyZ2luICsgJ3B4J1wiPlxyXG4gICAgICAgICAgICA8bnotY2hlY2tib3gtd3JhcHBlcj5cclxuICAgICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZ2V0Q2hlY2tlZChwZXJtaXNzaW9uLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRdPVwiaXNHcmFudGVkQnlPdGhlclByb3ZpZGVyTmFtZShwZXJtaXNzaW9uLmdyYW50ZWRQcm92aWRlcnMpXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DbGlja0NoZWNrYm94KHBlcm1pc3Npb24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgcGVybWlzc2lvbi5kaXNwbGF5TmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHByb3ZpZGVyIG9mIHBlcm1pc3Npb24uZ3JhbnRlZFByb3ZpZGVyc1wiPnt7IHByb3ZpZGVyLnByb3ZpZGVyTmFtZSB9fToge3sgcHJvdmlkZXIucHJvdmlkZXJLZXkgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uei1jaGVja2JveC13cmFwcGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNtb2RhbEZvb3Rlcj5cclxuICAgICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwiZGVmYXVsdFwiIChjbGljayk9XCJ2aXNpYmxlPWZhbHNlXCI+XHJcbiAgICAgICAge3sgJ0FicElkZW50aXR5OjpDYW5jZWwnIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInN1Ym1pdCgpXCI+XHJcbiAgICAgICAge3tcclxuICAgICAgJ0FicElkZW50aXR5OjpTYXZlJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgICAgIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcblxyXG4gIDwvbnotbW9kYWw+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=
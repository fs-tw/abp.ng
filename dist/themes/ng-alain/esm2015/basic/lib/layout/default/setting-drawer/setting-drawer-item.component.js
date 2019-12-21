/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/setting-drawer/setting-drawer-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.format = (/**
         * @param {?} value
         * @return {?}
         */
        value => `${value} px`);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    pxChange(val) {
        this.i.value = `${val}px`;
    }
}
SettingDrawerItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'setting-drawer-item',
                template: "<span\r\n  >{{ i.label }}<span class=\"pl-sm text-grey\">{{ i.tip }}</span></span\r\n>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input\r\n      nz-input\r\n      type=\"color\"\r\n      style=\"min-width: 88px\"\r\n      [(ngModel)]=\"i.value\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number\r\n      [(ngModel)]=\"pxVal\"\r\n      (ngModelChange)=\"pxChange($event)\"\r\n      [nzMin]=\"i.min\"\r\n      [nzMax]=\"i.max\"\r\n      [nzStep]=\"i.step || 2\"\r\n      [nzFormatter]=\"format\"\r\n    ></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n",
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.setting-drawer__body-item]': 'true',
                }
            }] }
];
SettingDrawerItemComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SettingDrawerItemComponent.prototype.i;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.pxVal;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVdqRCxNQUFNLE9BQU8sMEJBQTBCO0lBVHZDO1FBVUUsTUFBQyxHQUFRLEVBQUUsQ0FBQztRQWFaLFdBQU07Ozs7UUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFiQyxJQUNJLElBQUksQ0FBQyxHQUFRO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDYixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsK29DQUFtRDs7Z0JBRW5ELElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxNQUFNO2lCQUM1QzthQUNGOzs7bUJBR0UsS0FBSzs7OztJQUROLHVDQUFZOztJQVNaLDJDQUFjOztJQUlkLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NldHRpbmctZHJhd2VyLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyX19ib2R5LWl0ZW1dJzogJ3RydWUnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VySXRlbUNvbXBvbmVudCB7XHJcbiAgaTogYW55ID0ge307XHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5pID0gdmFsO1xyXG4gICAgaWYgKHZhbC50eXBlID09PSAncHgnKSB7XHJcbiAgICAgIHRoaXMucHhWYWwgPSArdmFsLnZhbHVlLnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHhWYWw6IG51bWJlcjtcclxuICBweENoYW5nZSh2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5pLnZhbHVlID0gYCR7dmFsfXB4YDtcclxuICB9XHJcbiAgZm9ybWF0ID0gdmFsdWUgPT4gYCR7dmFsdWV9IHB4YDtcclxufVxyXG4iXX0=
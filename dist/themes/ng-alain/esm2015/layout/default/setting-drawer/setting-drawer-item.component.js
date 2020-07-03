import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let SettingDrawerItemComponent = class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.format = value => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SettingDrawerItemComponent.prototype, "data", null);
SettingDrawerItemComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'setting-drawer-item',
        template: "<span\r\n  >{{ i.label }}<span class=\"pl-sm text-grey\">{{ i.tip }}</span></span\r\n>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input\r\n      nz-input\r\n      type=\"color\"\r\n      style=\"min-width: 88px\"\r\n      [(ngModel)]=\"i.value\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number\r\n      [(ngModel)]=\"pxVal\"\r\n      (ngModelChange)=\"pxChange($event)\"\r\n      [nzMin]=\"i.min\"\r\n      [nzMax]=\"i.max\"\r\n      [nzStep]=\"i.step || 2\"\r\n      [nzFormatter]=\"format\"\r\n    ></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n",
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.setting-drawer__body-item]': 'true',
        }
    })
], SettingDrawerItemComponent);
export { SettingDrawerItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVdqRCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUF2QztRQUNFLE1BQUMsR0FBUSxFQUFFLENBQUM7UUFhWixXQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFaQyxJQUFJLElBQUksQ0FBQyxHQUFRO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDYixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBR0QsUUFBUSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0NBRUYsQ0FBQTtBQVpDO0lBREMsS0FBSyxFQUFFOzs7c0RBTVA7QUFSVSwwQkFBMEI7SUFUdEMsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsK29DQUFtRDtRQUNuRCxzREFBc0Q7UUFDdEQsSUFBSSxFQUFFO1lBQ0osbUNBQW1DLEVBQUUsTUFBTTtTQUM1QztLQUNGLENBQUM7R0FDVywwQkFBMEIsQ0FldEM7U0FmWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlci1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlcl9fYm9keS1pdGVtXSc6ICd0cnVlJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckl0ZW1Db21wb25lbnQge1xyXG4gIGk6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGEodmFsOiBhbnkpIHtcclxuICAgIHRoaXMuaSA9IHZhbDtcclxuICAgIGlmICh2YWwudHlwZSA9PT0gJ3B4Jykge1xyXG4gICAgICB0aGlzLnB4VmFsID0gK3ZhbC52YWx1ZS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB4VmFsOiBudW1iZXI7XHJcbiAgcHhDaGFuZ2UodmFsOiBudW1iZXIpIHtcclxuICAgIHRoaXMuaS52YWx1ZSA9IGAke3ZhbH1weGA7XHJcbiAgfVxyXG4gIGZvcm1hdCA9IHZhbHVlID0+IGAke3ZhbHVlfSBweGA7XHJcbn1cclxuIl19
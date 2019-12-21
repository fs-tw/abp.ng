/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/storage.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    /**
     * @return {?}
     */
    HeaderStorageComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: (/**
             * @return {?}
             */
            function () {
                localStorage.clear();
                _this.messageSrv.success('Clear Finished!');
            }),
        });
    };
    HeaderStorageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-storage',
                    template: "\n    <i nz-icon nzType=\"tool\"></i>\n    {{ 'menu.clear.local.storage' | translate }}\n  ",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.d-block]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderStorageComponent.ctorParameters = function () { return [
        { type: NzModalService },
        { type: NzMessageService }
    ]; };
    HeaderStorageComponent.propDecorators = {
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return HeaderStorageComponent;
}());
export { HeaderStorageComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderStorageComponent.prototype.modalSrv;
    /**
     * @type {?}
     * @private
     */
    HeaderStorageComponent.prototype.messageSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvc3RvcmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFO0lBYUUsZ0NBQW9CLFFBQXdCLEVBQVUsVUFBNEI7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7Ozs7SUFHdEYsdUNBQU07OztJQUROO1FBQUEsaUJBU0M7UUFQQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNwQixPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLE1BQU07OztZQUFFO2dCQUNOLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw2RkFHVDs7b0JBRUQsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLE1BQU07cUJBQzFCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFiUSxjQUFjO2dCQUFFLGdCQUFnQjs7O3lCQWlCdEMsWUFBWSxTQUFDLE9BQU87O0lBVXZCLDZCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FiWSxzQkFBc0I7Ozs7OztJQUNyQiwwQ0FBZ0M7Ozs7O0lBQUUsNENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1zdG9yYWdlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJ0b29sXCI+PC9pPlxyXG4gICAge3sgJ21lbnUuY2xlYXIubG9jYWwuc3RvcmFnZScgfCB0cmFuc2xhdGUgfX1cclxuICBgLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZC1ibG9ja10nOiAndHJ1ZScsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclN0b3JhZ2VDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlLCBwcml2YXRlIG1lc3NhZ2VTcnY6IE56TWVzc2FnZVNlcnZpY2UpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICB0aGlzLm1vZGFsU3J2LmNvbmZpcm0oe1xyXG4gICAgICBuelRpdGxlOiAnTWFrZSBzdXJlIGNsZWFyIGFsbCBsb2NhbCBzdG9yYWdlPycsXHJcbiAgICAgIG56T25PazogKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNydi5zdWNjZXNzKCdDbGVhciBGaW5pc2hlZCEnKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
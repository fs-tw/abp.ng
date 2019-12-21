/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import * as screenfull from 'screenfull';
export class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    /**
     * @private
     * @return {?}
     */
    get sf() {
        return (/** @type {?} */ (screenfull));
    }
    /**
     * @return {?}
     */
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    /**
     * @return {?}
     */
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
}
HeaderFullScreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'header-fullscreen',
                template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
HeaderFullScreenComponent.propDecorators = {
    _resize: [{ type: HostListener, args: ['window:resize',] }],
    _click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    HeaderFullScreenComponent.prototype.status;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQWN6QyxNQUFNLE9BQU8seUJBQXlCO0lBWnRDO1FBYUUsV0FBTSxHQUFHLEtBQUssQ0FBQztJQWdCakIsQ0FBQzs7Ozs7SUFmQyxJQUFZLEVBQUU7UUFDWixPQUFPLG1CQUFBLFVBQVUsRUFBeUIsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7OztJQUdELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7O0dBR1Q7O2dCQUVELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxNQUFNO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3NCQU9FLFlBQVksU0FBQyxlQUFlO3FCQUs1QixZQUFZLFNBQUMsT0FBTzs7OztJQVZyQiwyQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBzY3JlZW5mdWxsIGZyb20gJ3NjcmVlbmZ1bGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItZnVsbHNjcmVlbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJzdGF0dXMgPyAnZnVsbHNjcmVlbi1leGl0JyA6ICdmdWxsc2NyZWVuJ1wiPjwvaT5cclxuICAgIHt7IChzdGF0dXMgPyAnbWVudS5mdWxsc2NyZWVuLmV4aXQnIDogJ21lbnUuZnVsbHNjcmVlbicpIHwgdHJhbnNsYXRlIH19XHJcbiAgYCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmQtYmxvY2tdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJGdWxsU2NyZWVuQ29tcG9uZW50IHtcclxuICBzdGF0dXMgPSBmYWxzZTtcclxuICBwcml2YXRlIGdldCBzZigpOiBzY3JlZW5mdWxsLlNjcmVlbmZ1bGwge1xyXG4gICAgcmV0dXJuIHNjcmVlbmZ1bGwgYXMgc2NyZWVuZnVsbC5TY3JlZW5mdWxsO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXHJcbiAgX3Jlc2l6ZSgpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zZi5pc0Z1bGxzY3JlZW47XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuc2YuaXNFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuc2YudG9nZ2xlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
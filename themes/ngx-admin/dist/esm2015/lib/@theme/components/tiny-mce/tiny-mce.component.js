/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/tiny-mce/tiny-mce.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
export class TinyMCEComponent {
    /**
     * @param {?} host
     * @param {?} locationStrategy
     */
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            editor => {
                this.editor = editor;
                editor.on('keyup', (/**
                 * @return {?}
                 */
                () => {
                    this.editorKeyup.emit(editor.getContent());
                }));
            }),
            height: '320',
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
TinyMCEComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tiny-mce',
                template: ''
            }] }
];
/** @nocollapse */
TinyMCEComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: LocationStrategy }
];
TinyMCEComponent.propDecorators = {
    editorKeyup: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TinyMCEComponent.prototype.editorKeyup;
    /** @type {?} */
    TinyMCEComponent.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    TinyMCEComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    TinyMCEComponent.prototype.locationStrategy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvY29tcG9uZW50cy90aW55LW1jZS90aW55LW1jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU9uRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQU0zQixZQUNVLElBQWdCLEVBQ2hCLGdCQUFrQztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFObEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTzVDLENBQUM7Ozs7SUFFTCxlQUFlO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDL0IsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDbkMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSx3QkFBd0I7WUFDeEUsS0FBSzs7OztZQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU87OztnQkFBRSxHQUFHLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtZQUNELE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBUG1FLFVBQVU7WUFDckUsZ0JBQWdCOzs7MEJBU3RCLE1BQU07Ozs7SUFBUCx1Q0FBZ0Q7O0lBRWhELGtDQUFZOzs7OztJQUdWLGdDQUF3Qjs7Ozs7SUFDeEIsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5kZWNsYXJlIGNvbnN0IHRpbnltY2U6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LXRpbnktbWNlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW55TUNFQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQE91dHB1dCgpIGVkaXRvcktleXVwID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGVkaXRvcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbG9jYXRpb25TdHJhdGVneTogTG9jYXRpb25TdHJhdGVneSxcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aW55bWNlLmluaXQoe1xyXG4gICAgICB0YXJnZXQ6IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBwbHVnaW5zOiBbJ2xpbmsnLCAncGFzdGUnLCAndGFibGUnXSxcclxuICAgICAgc2tpbl91cmw6IGAke3RoaXMubG9jYXRpb25TdHJhdGVneS5nZXRCYXNlSHJlZigpfWFzc2V0cy9za2lucy9saWdodGdyYXlgLFxyXG4gICAgICBzZXR1cDogZWRpdG9yID0+IHtcclxuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcclxuICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3JLZXl1cC5lbWl0KGVkaXRvci5nZXRDb250ZW50KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBoZWlnaHQ6ICczMjAnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuZWRpdG9yKTtcclxuICB9XHJcbn1cclxuIl19
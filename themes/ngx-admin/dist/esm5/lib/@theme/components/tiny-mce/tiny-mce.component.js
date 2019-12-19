/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/tiny-mce/tiny-mce.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TinyMCEComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: this.locationStrategy.getBaseHref() + "assets/skins/lightgray",
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                _this.editor = editor;
                editor.on('keyup', (/**
                 * @return {?}
                 */
                function () {
                    _this.editorKeyup.emit(editor.getContent());
                }));
            }),
            height: '320',
        });
    };
    /**
     * @return {?}
     */
    TinyMCEComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        tinymce.remove(this.editor);
    };
    TinyMCEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-tiny-mce',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    TinyMCEComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LocationStrategy }
    ]; };
    TinyMCEComponent.propDecorators = {
        editorKeyup: [{ type: Output }]
    };
    return TinyMCEComponent;
}());
export { TinyMCEComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueS1tY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvY29tcG9uZW50cy90aW55LW1jZS90aW55LW1jZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUduRDtJQVVFLDBCQUNVLElBQWdCLEVBQ2hCLGdCQUFrQztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFObEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTzVDLENBQUM7Ozs7SUFFTCwwQ0FBZTs7O0lBQWY7UUFBQSxpQkFhQztRQVpDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQy9CLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1lBQ25DLFFBQVEsRUFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLDJCQUF3QjtZQUN4RSxLQUFLOzs7O1lBQUUsVUFBQSxNQUFNO2dCQUNYLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU87OztnQkFBRTtvQkFDakIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBUG1FLFVBQVU7Z0JBQ3JFLGdCQUFnQjs7OzhCQVN0QixNQUFNOztJQTJCVCx1QkFBQztDQUFBLEFBakNELElBaUNDO1NBN0JZLGdCQUFnQjs7O0lBRTNCLHVDQUFnRDs7SUFFaEQsa0NBQVk7Ozs7O0lBR1YsZ0NBQXdCOzs7OztJQUN4Qiw0Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmRlY2xhcmUgY29uc3QgdGlueW1jZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtdGlueS1tY2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbnlNQ0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBAT3V0cHV0KCkgZWRpdG9yS2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgZWRpdG9yOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvblN0cmF0ZWd5OiBMb2NhdGlvblN0cmF0ZWd5LFxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRpbnltY2UuaW5pdCh7XHJcbiAgICAgIHRhcmdldDogdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHBsdWdpbnM6IFsnbGluaycsICdwYXN0ZScsICd0YWJsZSddLFxyXG4gICAgICBza2luX3VybDogYCR7dGhpcy5sb2NhdGlvblN0cmF0ZWd5LmdldEJhc2VIcmVmKCl9YXNzZXRzL3NraW5zL2xpZ2h0Z3JheWAsXHJcbiAgICAgIHNldHVwOiBlZGl0b3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xyXG4gICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVkaXRvcktleXVwLmVtaXQoZWRpdG9yLmdldENvbnRlbnQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhlaWdodDogJzMyMCcsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGlueW1jZS5yZW1vdmUodGhpcy5lZGl0b3IpO1xyXG4gIH1cclxufVxyXG4iXX0=
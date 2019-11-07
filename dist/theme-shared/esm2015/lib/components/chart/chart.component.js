/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ChangeDetectorRef, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { chartJsLoaded$ } from '../../utils/widget-utils';
export class ChartComponent {
    /**
     * @param {?} el
     * @param {?} cdRef
     */
    constructor(el, cdRef) {
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new EventEmitter();
        this.initialized = new BehaviorSubject(this);
        this.onCanvasClick = (/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.chart) {
                /** @type {?} */
                const element = this.chart.getElementAtEvent(event);
                /** @type {?} */
                const dataset = this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset,
                    });
                }
            }
        });
        this.initChart = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const opts = this.options || {};
            opts.responsive = this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (this.height || this.width)) {
                opts.maintainAspectRatio = false;
            }
            this.chart = new Chart(this.canvas, {
                type: this.type,
                data: this.data,
                options: this.options,
                plugins: this.plugins,
            });
            this.cdRef.detectChanges();
        });
        this.generateLegend = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        });
        this.refresh = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                this.chart.update();
                this.cdRef.detectChanges();
            }
        });
        this.reinit = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        });
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = val;
        this.reinit();
    }
    /**
     * @return {?}
     */
    get canvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    /**
     * @return {?}
     */
    get base64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        chartJsLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.testChartJs();
            this.initChart();
            this._initialized = true;
        }));
    }
    /**
     * @return {?}
     */
    testChartJs() {
        try {
            // tslint:disable-next-line: no-unused-expression
            Chart;
        }
        catch (error) {
            throw new Error(`Chart is not found. Import the Chart from app.module like shown below:
      import('chart.js');
      `);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-chart',
                template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
ChartComponent.propDecorators = {
    type: [{ type: Input }],
    options: [{ type: Input }],
    plugins: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    responsive: [{ type: Input }],
    onDataSelect: [{ type: Output }],
    initialized: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ChartComponent.prototype.type;
    /** @type {?} */
    ChartComponent.prototype.options;
    /** @type {?} */
    ChartComponent.prototype.plugins;
    /** @type {?} */
    ChartComponent.prototype.width;
    /** @type {?} */
    ChartComponent.prototype.height;
    /** @type {?} */
    ChartComponent.prototype.responsive;
    /** @type {?} */
    ChartComponent.prototype.onDataSelect;
    /** @type {?} */
    ChartComponent.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype._initialized;
    /** @type {?} */
    ChartComponent.prototype._data;
    /** @type {?} */
    ChartComponent.prototype.chart;
    /** @type {?} */
    ChartComponent.prototype.onCanvasClick;
    /** @type {?} */
    ChartComponent.prototype.initChart;
    /** @type {?} */
    ChartComponent.prototype.generateLegend;
    /** @type {?} */
    ChartComponent.prototype.refresh;
    /** @type {?} */
    ChartComponent.prototype.reinit;
    /** @type {?} */
    ChartComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU8xRCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUF3QnpCLFlBQW1CLEVBQWMsRUFBVSxLQUF3QjtRQUFoRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFyQjFELFlBQU8sR0FBUSxFQUFFLENBQUM7UUFFbEIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQU1wQixlQUFVLEdBQUcsSUFBSSxDQUFDOztRQUdSLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFckQsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQStDM0Qsa0JBQWE7Ozs7UUFBRyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O3NCQUNSLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQzs7c0JBQzdDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztnQkFDbkQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO3dCQUNyQixhQUFhLEVB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T0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7WUE5SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4WEFBcUM7YUFDdEM7Ozs7WUFkQyxVQUFVO1lBS1YsaUJBQWlCOzs7bUJBV2hCLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUdMLE1BQU07MEJBRU4sTUFBTTttQkFVTixLQUFLOzs7O0lBekJOLDhCQUFzQjs7SUFFdEIsaUNBQTJCOztJQUUzQixpQ0FBNkI7O0lBRTdCLCtCQUF1Qjs7SUFFdkIsZ0NBQXdCOztJQUV4QixvQ0FBMkI7O0lBRzNCLHNDQUF3RTs7SUFFeEUscUNBQTJEOzs7OztJQUUzRCxzQ0FBOEI7O0lBRTlCLCtCQUFXOztJQUVYLCtCQUFXOztJQXlDWCx1Q0FZRTs7SUFFRixtQ0FpQkU7O0lBRUYsd0NBSUU7O0lBRUYsaUNBS0U7O0lBRUYsZ0NBS0U7O0lBMUZVLDRCQUFxQjs7Ozs7SUFBRSwrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjaGFydEpzTG9hZGVkJCB9IGZyb20gJy4uLy4uL3V0aWxzL3dpZGdldC11dGlscyc7XHJcbmRlY2xhcmUgY29uc3QgQ2hhcnQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XHJcblxyXG4gIEBJbnB1dCgpIHBsdWdpbnM6IGFueVtdID0gW107XHJcblxyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSByZXNwb25zaXZlID0gdHJ1ZTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uRGF0YVNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbml0aWFsaXplZCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcyk7XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuO1xyXG5cclxuICBfZGF0YTogYW55O1xyXG5cclxuICBjaGFydDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBASW5wdXQoKSBnZXQgZGF0YSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG5cclxuICBzZXQgZGF0YSh2YWw6IGFueSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IHZhbDtcclxuICAgIHRoaXMucmVpbml0KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FudmFzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcclxuICB9XHJcblxyXG4gIGdldCBiYXNlNjRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0LnRvQmFzZTY0SW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNoYXJ0SnNMb2FkZWQkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudGVzdENoYXJ0SnMoKTtcclxuXHJcbiAgICAgIHRoaXMuaW5pdENoYXJ0KCk7XHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGVzdENoYXJ0SnMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICAgIENoYXJ0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaGFydCBpcyBub3QgZm91bmQuIEltcG9ydCB0aGUgQ2hhcnQgZnJvbSBhcHAubW9kdWxlIGxpa2Ugc2hvd24gYmVsb3c6XHJcbiAgICAgIGltcG9ydCgnY2hhcnQuanMnKTtcclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbnZhc0NsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY2hhcnQuZ2V0RWxlbWVudEF0RXZlbnQoZXZlbnQpO1xyXG4gICAgICBjb25zdCBkYXRhc2V0ID0gdGhpcy5jaGFydC5nZXREYXRhc2V0QXRFdmVudChldmVudCk7XHJcbiAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoICYmIGRhdGFzZXQpIHtcclxuICAgICAgICB0aGlzLm9uRGF0YVNlbGVjdC5lbWl0KHtcclxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudFswXSxcclxuICAgICAgICAgIGRhdGFzZXQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpbml0Q2hhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zIHx8IHt9O1xyXG4gICAgb3B0cy5yZXNwb25zaXZlID0gdGhpcy5yZXNwb25zaXZlO1xyXG5cclxuICAgIC8vIGFsbG93cyBjaGFydCB0byByZXNpemUgaW4gcmVzcG9uc2l2ZSBtb2RlXHJcbiAgICBpZiAob3B0cy5yZXNwb25zaXZlICYmICh0aGlzLmhlaWdodCB8fCB0aGlzLndpZHRoKSkge1xyXG4gICAgICBvcHRzLm1haW50YWluQXNwZWN0UmF0aW8gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMuY2FudmFzLCB7XHJcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxyXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXHJcbiAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG4gIGdlbmVyYXRlTGVnZW5kID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2hhcnQuZ2VuZXJhdGVMZWdlbmQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZWZyZXNoID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcclxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVpbml0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuaW5pdENoYXJ0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
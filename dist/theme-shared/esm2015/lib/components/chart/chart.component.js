import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ChangeDetectorRef, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { chartJsLoaded$ } from '../../utils/widget-utils';
let ChartComponent = class ChartComponent {
    constructor(el, cdRef) {
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new EventEmitter();
        this.initialized = new BehaviorSubject(this);
        this.onCanvasClick = event => {
            if (this.chart) {
                const element = this.chart.getElementAtEvent(event);
                const dataset = this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset,
                    });
                }
            }
        };
        this.initChart = () => {
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
        };
        this.generateLegend = () => {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        };
        this.refresh = () => {
            if (this.chart) {
                this.chart.update();
                this.cdRef.detectChanges();
            }
        };
        this.reinit = () => {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        };
    }
    get data() {
        return this._data;
    }
    set data(val) {
        this._data = val;
        this.reinit();
    }
    get canvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    get base64Image() {
        return this.chart.toBase64Image();
    }
    ngAfterViewInit() {
        chartJsLoaded$.subscribe(() => {
            this.testChartJs();
            this.initChart();
            this._initialized = true;
        });
    }
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
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ChartComponent.prototype, "plugins", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "responsive", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponent.prototype, "onDataSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "initialized", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ChartComponent.prototype, "data", null);
ChartComponent = __decorate([
    Component({
        selector: 'abp-chart',
        template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU8xRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBd0J6QixZQUFtQixFQUFjLEVBQVUsS0FBd0I7UUFBaEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBckIxRCxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWxCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFNcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUUzQixnREFBZ0Q7UUFDN0IsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRCxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBK0MzRCxrQkFBYSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtv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O1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FDRixDQUFBO0FBMUhVO0lBQVIsS0FBSyxFQUFFOzs0Q0FBYztBQUViO0lBQVIsS0FBSyxFQUFFOzsrQ0FBbUI7QUFFbEI7SUFBUixLQUFLLEVBQUU7OytDQUFxQjtBQUVwQjtJQUFSLEtBQUssRUFBRTs7NkNBQWU7QUFFZDtJQUFSLEtBQUssRUFBRTs7OENBQWdCO0FBRWY7SUFBUixLQUFLLEVBQUU7O2tEQUFtQjtBQUdqQjtJQUFULE1BQU0sRUFBRTs4QkFBd0IsWUFBWTtvREFBMkI7QUFFOUQ7SUFBVCxNQUFNLEVBQUU7O21EQUFrRDtBQVVsRDtJQUFSLEtBQUssRUFBRTs7OzBDQUVQO0FBNUJVLGNBQWM7SUFKMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsOFhBQXFDO0tBQ3RDLENBQUM7cUNBeUJ1QixVQUFVLEVBQWlCLGlCQUFpQjtHQXhCeEQsY0FBYyxDQTJIMUI7U0EzSFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNoYXJ0SnNMb2FkZWQkIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2lkZ2V0LXV0aWxzJztcclxuZGVjbGFyZSBjb25zdCBDaGFydDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KCkgcGx1Z2luczogYW55W10gPSBbXTtcclxuXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmUgPSB0cnVlO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1vbi1wcmVmaXhcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25EYXRhU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGluaXRpYWxpemVkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzKTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcblxyXG4gIF9kYXRhOiBhbnk7XHJcblxyXG4gIGNoYXJ0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIEBJbnB1dCgpIGdldCBkYXRhKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHNldCBkYXRhKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLl9kYXRhID0gdmFsO1xyXG4gICAgdGhpcy5yZWluaXQoKTtcclxuICB9XHJcblxyXG4gIGdldCBjYW52YXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJhc2U2NEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnQudG9CYXNlNjRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY2hhcnRKc0xvYWRlZCQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy50ZXN0Q2hhcnRKcygpO1xyXG5cclxuICAgICAgdGhpcy5pbml0Q2hhcnQoKTtcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0ZXN0Q2hhcnRKcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgICAgQ2hhcnQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENoYXJ0IGlzIG5vdCBmb3VuZC4gSW1wb3J0IHRoZSBDaGFydCBmcm9tIGFwcC5tb2R1bGUgbGlrZSBzaG93biBiZWxvdzpcclxuICAgICAgaW1wb3J0KCdjaGFydC5qcycpO1xyXG4gICAgICBgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2FudmFzQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jaGFydC5nZXRFbGVtZW50QXRFdmVudChldmVudCk7XHJcbiAgICAgIGNvbnN0IGRhdGFzZXQgPSB0aGlzLmNoYXJ0LmdldERhdGFzZXRBdEV2ZW50KGV2ZW50KTtcclxuICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5sZW5ndGggJiYgZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMub25EYXRhU2VsZWN0LmVtaXQoe1xyXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXHJcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50WzBdLFxyXG4gICAgICAgICAgZGF0YXNldCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGluaXRDaGFydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICBvcHRzLnJlc3BvbnNpdmUgPSB0aGlzLnJlc3BvbnNpdmU7XHJcblxyXG4gICAgLy8gYWxsb3dzIGNoYXJ0IHRvIHJlc2l6ZSBpbiByZXNwb25zaXZlIG1vZGVcclxuICAgIGlmIChvcHRzLnJlc3BvbnNpdmUgJiYgKHRoaXMuaGVpZ2h0IHx8IHRoaXMud2lkdGgpKSB7XHJcbiAgICAgIG9wdHMubWFpbnRhaW5Bc3BlY3RSYXRpbyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5jYW52YXMsIHtcclxuICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcclxuICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2VuZXJhdGVMZWdlbmQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jaGFydC5nZW5lcmF0ZUxlZ2VuZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlZnJlc2ggPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZWluaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5pbml0Q2hhcnQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
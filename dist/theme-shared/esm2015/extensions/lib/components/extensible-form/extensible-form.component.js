import { __decorate, __metadata, __param } from "tslib";
import { TrackByService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, Optional, QueryList, SkipSelf, ViewChildren, } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EXTRA_PROPERTIES_KEY } from '../../constants/extra-properties';
import { ExtensionsService } from '../../services/extensions.service';
import { EXTENSIONS_IDENTIFIER } from '../../tokens/extensions.token';
import { selfFactory } from '../../utils/factory.util';
import { ExtensibleFormPropComponent } from './extensible-form-prop.component';
const ɵ0 = selfFactory;
let ExtensibleFormComponent = class ExtensibleFormComponent {
    constructor(cdRef, track, container, extensions, identifier) {
        this.cdRef = cdRef;
        this.track = track;
        this.container = container;
        this.extensions = extensions;
        this.identifier = identifier;
        this.subscription = new Subscription();
        this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
    }
    set selectedRecord(record) {
        const type = !record || JSON.stringify(record) === '{}' ? 'create' : 'edit';
        this.propList = this.extensions[`${type}FormProps`].get(this.identifier).props;
        this.record = record;
    }
    get form() {
        return (this.container ? this.container.control : { controls: {} });
    }
    get extraProperties() {
        return (this.form.controls.extraProperties || { controls: {} });
    }
    ngAfterViewInit() {
        this.subscription.add(this.form.statusChanges.pipe(debounceTime(0)).subscribe(() => {
            this.formProps.forEach(prop => prop.cdRef.markForCheck());
            this.cdRef.detectChanges();
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
__decorate([
    ViewChildren(ExtensibleFormPropComponent),
    __metadata("design:type", QueryList)
], ExtensibleFormComponent.prototype, "formProps", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ExtensibleFormComponent.prototype, "selectedRecord", null);
ExtensibleFormComponent = __decorate([
    Component({
        exportAs: 'abpExtensibleForm',
        selector: 'abp-extensible-form',
        template: "<ng-container *ngIf=\"form\">\r\n  <ng-container *abpPropData=\"let data; fromList: propList; withRecord: record\">\r\n    <ng-container *ngFor=\"let prop of propList; trackBy: track.by('name')\">\r\n      <ng-container *ngIf=\"prop.visible(data)\">\r\n        <ng-container\r\n          [formGroupName]=\"extraPropertiesKey\"\r\n          *ngIf=\"extraProperties.controls[prop.name]; else tempDefault\"\r\n        >\r\n          <abp-extensible-form-prop [prop]=\"prop\" [data]=\"data\"></abp-extensible-form-prop>\r\n        </ng-container>\r\n\r\n        <ng-template #tempDefault>\r\n          <abp-extensible-form-prop\r\n            *ngIf=\"form.get(prop.name)\"\r\n            [prop]=\"prop\"\r\n            [data]=\"data\"\r\n          ></abp-extensible-form-prop>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        viewProviders: [
            {
                provide: ControlContainer,
                useFactory: ɵ0,
                deps: [[new Optional(), new SkipSelf(), ControlContainer]],
            },
        ]
    }),
    __param(4, Inject(EXTENSIONS_IDENTIFIER)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        TrackByService,
        ControlContainer,
        ExtensionsService, String])
], ExtensibleFormComponent);
export { ExtensibleFormComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9leHRlbnNpYmxlLWZvcm0vZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO1dBVTdELFdBQVc7QUFLN0IsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUF3QmxDLFlBQ2tCLEtBQXdCLEVBQ3hCLEtBQXFCLEVBQzdCLFNBQTJCLEVBQzNCLFVBQTZCLEVBQ0UsVUFBa0I7UUFKekMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDRSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBbEJuRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFrQnZDLENBQUM7SUF6QkosSUFBSSxjQUFjLENBQUMsTUFBUztRQUMxQixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBT0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBYyxDQUFDO0lBQ25GLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBYyxDQUFDO0lBQy9FLENBQUM7SUFVRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTtBQTFDQztJQURDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQzs4QkFDL0IsU0FBUzswREFBOEI7QUFHbEQ7SUFEQyxLQUFLLEVBQUU7Ozs2REFLUDtBQVRVLHVCQUF1QjtJQWJuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsczRCQUErQztRQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUU7WUFDYjtnQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixVQUFVLElBQWE7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDM0Q7U0FDRjtLQUNGLENBQUM7SUE4QkcsV0FBQSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQTtxQ0FKUCxpQkFBaUI7UUFDakIsY0FBYztRQUNsQixnQkFBZ0I7UUFDZixpQkFBaUI7R0E1QjVCLHVCQUF1QixDQTRDbkM7U0E1Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhY2tCeVNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNraXBTZWxmLFxyXG4gIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBFWFRSQV9QUk9QRVJUSUVTX0tFWSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9leHRyYS1wcm9wZXJ0aWVzJztcclxuaW1wb3J0IHsgRm9ybVByb3BMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0tcHJvcHMnO1xyXG5pbXBvcnQgeyBFeHRlbnNpb25zU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V4dGVuc2lvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVYVEVOU0lPTlNfSURFTlRJRklFUiB9IGZyb20gJy4uLy4uL3Rva2Vucy9leHRlbnNpb25zLnRva2VuJztcclxuaW1wb3J0IHsgc2VsZkZhY3RvcnkgfSBmcm9tICcuLi8uLi91dGlscy9mYWN0b3J5LnV0aWwnO1xyXG5pbXBvcnQgeyBFeHRlbnNpYmxlRm9ybVByb3BDb21wb25lbnQgfSBmcm9tICcuL2V4dGVuc2libGUtZm9ybS1wcm9wLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBleHBvcnRBczogJ2FicEV4dGVuc2libGVGb3JtJyxcclxuICBzZWxlY3RvcjogJ2FicC1leHRlbnNpYmxlLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leHRlbnNpYmxlLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcclxuICAgICAgdXNlRmFjdG9yeTogc2VsZkZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBDb250cm9sQ29udGFpbmVyXV0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRm9ybUNvbXBvbmVudDxSID0gYW55PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZHJlbihFeHRlbnNpYmxlRm9ybVByb3BDb21wb25lbnQpXHJcbiAgZm9ybVByb3BzOiBRdWVyeUxpc3Q8RXh0ZW5zaWJsZUZvcm1Qcm9wQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRSZWNvcmQocmVjb3JkOiBSKSB7XHJcbiAgICBjb25zdCB0eXBlID0gIXJlY29yZCB8fCBKU09OLnN0cmluZ2lmeShyZWNvcmQpID09PSAne30nID8gJ2NyZWF0ZScgOiAnZWRpdCc7XHJcbiAgICB0aGlzLnByb3BMaXN0ID0gdGhpcy5leHRlbnNpb25zW2Ake3R5cGV9Rm9ybVByb3BzYF0uZ2V0KHRoaXMuaWRlbnRpZmllcikucHJvcHM7XHJcbiAgICB0aGlzLnJlY29yZCA9IHJlY29yZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG4gIGV4dHJhUHJvcGVydGllc0tleSA9IEVYVFJBX1BST1BFUlRJRVNfS0VZO1xyXG4gIHByb3BMaXN0OiBGb3JtUHJvcExpc3Q8Uj47XHJcbiAgcmVjb3JkOiBSO1xyXG5cclxuICBnZXQgZm9ybSgpOiBGb3JtR3JvdXAge1xyXG4gICAgcmV0dXJuICh0aGlzLmNvbnRhaW5lciA/IHRoaXMuY29udGFpbmVyLmNvbnRyb2wgOiB7IGNvbnRyb2xzOiB7fSB9KSBhcyBGb3JtR3JvdXA7XHJcbiAgfVxyXG5cclxuICBnZXQgZXh0cmFQcm9wZXJ0aWVzKCk6IEZvcm1Hcm91cCB7XHJcbiAgICByZXR1cm4gKHRoaXMuZm9ybS5jb250cm9scy5leHRyYVByb3BlcnRpZXMgfHwgeyBjb250cm9sczoge30gfSkgYXMgRm9ybUdyb3VwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHRyYWNrOiBUcmFja0J5U2VydmljZSxcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgcHJpdmF0ZSBleHRlbnNpb25zOiBFeHRlbnNpb25zU2VydmljZSxcclxuICAgIEBJbmplY3QoRVhURU5TSU9OU19JREVOVElGSUVSKSBwcml2YXRlIGlkZW50aWZpZXI6IHN0cmluZyxcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgdGhpcy5mb3JtLnN0YXR1c0NoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mb3JtUHJvcHMuZm9yRWFjaChwcm9wID0+IHByb3AuY2RSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
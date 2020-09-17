import { __decorate, __metadata, __param } from "tslib";
import { TrackByService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, Optional, QueryList, SkipSelf, ViewChildren, } from '@angular/core';
import { ControlContainer } from '@angular/forms';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9leHRlbnNpYmxlLWZvcm0vZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO1dBVTdELFdBQVc7QUFLN0IsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUF1QmxDLFlBQ2tCLEtBQXdCLEVBQ3hCLEtBQXFCLEVBQzdCLFNBQTJCLEVBQzNCLFVBQTZCLEVBQ0UsVUFBa0I7UUFKekMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDRSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBakIzRCx1QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztJQWtCdkMsQ0FBQztJQXhCSixJQUFJLGNBQWMsQ0FBQyxNQUFTO1FBQzFCLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9FLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFNRCxJQUFJLElBQUk7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFjLENBQUM7SUFDbkYsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFjLENBQUM7SUFDL0UsQ0FBQztDQVNGLENBQUE7QUE1QkM7SUFEQyxZQUFZLENBQUMsMkJBQTJCLENBQUM7OEJBQy9CLFNBQVM7MERBQThCO0FBR2xEO0lBREMsS0FBSyxFQUFFOzs7NkRBS1A7QUFUVSx1QkFBdUI7SUFibkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLHM0QkFBK0M7UUFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFO1lBQ2I7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsVUFBVSxJQUFhO2dCQUN2QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzNEO1NBQ0Y7S0FDRixDQUFDO0lBNkJHLFdBQUEsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7cUNBSlAsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDbEIsZ0JBQWdCO1FBQ2YsaUJBQWlCO0dBM0I1Qix1QkFBdUIsQ0E4Qm5DO1NBOUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWNrQnlTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTa2lwU2VsZixcclxuICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRVhUUkFfUFJPUEVSVElFU19LRVkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZXh0cmEtcHJvcGVydGllcyc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wTGlzdCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLXByb3BzJztcclxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHRlbnNpb25zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFWFRFTlNJT05TX0lERU5USUZJRVIgfSBmcm9tICcuLi8uLi90b2tlbnMvZXh0ZW5zaW9ucy50b2tlbic7XHJcbmltcG9ydCB7IHNlbGZGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZmFjdG9yeS51dGlsJztcclxuaW1wb3J0IHsgRXh0ZW5zaWJsZUZvcm1Qcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZXhwb3J0QXM6ICdhYnBFeHRlbnNpYmxlRm9ybScsXHJcbiAgc2VsZWN0b3I6ICdhYnAtZXh0ZW5zaWJsZS1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB2aWV3UHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNlbGZGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgQ29udHJvbENvbnRhaW5lcl1dLFxyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUZvcm1Db21wb25lbnQ8UiA9IGFueT4ge1xyXG4gIEBWaWV3Q2hpbGRyZW4oRXh0ZW5zaWJsZUZvcm1Qcm9wQ29tcG9uZW50KVxyXG4gIGZvcm1Qcm9wczogUXVlcnlMaXN0PEV4dGVuc2libGVGb3JtUHJvcENvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkUmVjb3JkKHJlY29yZDogUikge1xyXG4gICAgY29uc3QgdHlwZSA9ICFyZWNvcmQgfHwgSlNPTi5zdHJpbmdpZnkocmVjb3JkKSA9PT0gJ3t9JyA/ICdjcmVhdGUnIDogJ2VkaXQnO1xyXG4gICAgdGhpcy5wcm9wTGlzdCA9IHRoaXMuZXh0ZW5zaW9uc1tgJHt0eXBlfUZvcm1Qcm9wc2BdLmdldCh0aGlzLmlkZW50aWZpZXIpLnByb3BzO1xyXG4gICAgdGhpcy5yZWNvcmQgPSByZWNvcmQ7XHJcbiAgfVxyXG5cclxuICBleHRyYVByb3BlcnRpZXNLZXkgPSBFWFRSQV9QUk9QRVJUSUVTX0tFWTtcclxuICBwcm9wTGlzdDogRm9ybVByb3BMaXN0PFI+O1xyXG4gIHJlY29yZDogUjtcclxuXHJcbiAgZ2V0IGZvcm0oKTogRm9ybUdyb3VwIHtcclxuICAgIHJldHVybiAodGhpcy5jb250YWluZXIgPyB0aGlzLmNvbnRhaW5lci5jb250cm9sIDogeyBjb250cm9sczoge30gfSkgYXMgRm9ybUdyb3VwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGV4dHJhUHJvcGVydGllcygpOiBGb3JtR3JvdXAge1xyXG4gICAgcmV0dXJuICh0aGlzLmZvcm0uY29udHJvbHMuZXh0cmFQcm9wZXJ0aWVzIHx8IHsgY29udHJvbHM6IHt9IH0pIGFzIEZvcm1Hcm91cDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyByZWFkb25seSB0cmFjazogVHJhY2tCeVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogQ29udHJvbENvbnRhaW5lcixcclxuICAgIHByaXZhdGUgZXh0ZW5zaW9uczogRXh0ZW5zaW9uc1NlcnZpY2UsXHJcbiAgICBASW5qZWN0KEVYVEVOU0lPTlNfSURFTlRJRklFUikgcHJpdmF0ZSBpZGVudGlmaWVyOiBzdHJpbmcsXHJcbiAgKSB7fVxyXG59XHJcbiJdfQ==
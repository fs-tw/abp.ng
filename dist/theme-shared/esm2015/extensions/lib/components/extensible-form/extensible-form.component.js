import { TrackByService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, Optional, QueryList, SkipSelf, ViewChildren, } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { EXTRA_PROPERTIES_KEY } from '../../constants/extra-properties';
import { ExtensionsService } from '../../services/extensions.service';
import { EXTENSIONS_IDENTIFIER } from '../../tokens/extensions.token';
import { selfFactory } from '../../utils/factory.util';
import { ExtensibleFormPropComponent } from './extensible-form-prop.component';
const ɵ0 = selfFactory;
export class ExtensibleFormComponent {
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
}
ExtensibleFormComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
ExtensibleFormComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TrackByService },
    { type: ControlContainer },
    { type: ExtensionsService },
    { type: String, decorators: [{ type: Inject, args: [EXTENSIONS_IDENTIFIER,] }] }
];
ExtensibleFormComponent.propDecorators = {
    formProps: [{ type: ViewChildren, args: [ExtensibleFormPropComponent,] }],
    selectedRecord: [{ type: Input }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9leHRlbnNpYmxlLWZvcm0vZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7V0FVN0QsV0FBVztBQUs3QixNQUFNLE9BQU8sdUJBQXVCO0lBdUJsQyxZQUNrQixLQUF3QixFQUN4QixLQUFxQixFQUM3QixTQUEyQixFQUMzQixVQUE2QixFQUNFLFVBQWtCO1FBSnpDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQ0UsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQWpCM0QsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFrQnZDLENBQUM7SUF6QkosSUFDSSxjQUFjLENBQUMsTUFBUztRQUMxQixNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDNUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBTUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBYyxDQUFDO0lBQ25GLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBYyxDQUFDO0lBQy9FLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsczRCQUErQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRTtvQkFDYjt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixVQUFVLElBQWE7d0JBQ3ZCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7cUJBQzNEO2lCQUNGO2FBQ0Y7OztZQTdCQyxpQkFBaUI7WUFIVixjQUFjO1lBWWQsZ0JBQWdCO1lBR2hCLGlCQUFpQjt5Q0E4Q3JCLE1BQU0sU0FBQyxxQkFBcUI7Ozt3QkEzQjlCLFlBQVksU0FBQywyQkFBMkI7NkJBR3hDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFja0J5U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVYVFJBX1BST1BFUlRJRVNfS0VZIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2V4dHJhLXByb3BlcnRpZXMnO1xyXG5pbXBvcnQgeyBGb3JtUHJvcExpc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS1wcm9wcyc7XHJcbmltcG9ydCB7IEV4dGVuc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXh0ZW5zaW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRVhURU5TSU9OU19JREVOVElGSUVSIH0gZnJvbSAnLi4vLi4vdG9rZW5zL2V4dGVuc2lvbnMudG9rZW4nO1xyXG5pbXBvcnQgeyBzZWxmRmFjdG9yeSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZhY3RvcnkudXRpbCc7XHJcbmltcG9ydCB7IEV4dGVuc2libGVGb3JtUHJvcENvbXBvbmVudCB9IGZyb20gJy4vZXh0ZW5zaWJsZS1mb3JtLXByb3AuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGV4cG9ydEFzOiAnYWJwRXh0ZW5zaWJsZUZvcm0nLFxyXG4gIHNlbGVjdG9yOiAnYWJwLWV4dGVuc2libGUtZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4dGVuc2libGUtZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdmlld1Byb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZWxmRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIENvbnRyb2xDb250YWluZXJdXSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVGb3JtQ29tcG9uZW50PFIgPSBhbnk+IHtcclxuICBAVmlld0NoaWxkcmVuKEV4dGVuc2libGVGb3JtUHJvcENvbXBvbmVudClcclxuICBmb3JtUHJvcHM6IFF1ZXJ5TGlzdDxFeHRlbnNpYmxlRm9ybVByb3BDb21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZFJlY29yZChyZWNvcmQ6IFIpIHtcclxuICAgIGNvbnN0IHR5cGUgPSAhcmVjb3JkIHx8IEpTT04uc3RyaW5naWZ5KHJlY29yZCkgPT09ICd7fScgPyAnY3JlYXRlJyA6ICdlZGl0JztcclxuICAgIHRoaXMucHJvcExpc3QgPSB0aGlzLmV4dGVuc2lvbnNbYCR7dHlwZX1Gb3JtUHJvcHNgXS5nZXQodGhpcy5pZGVudGlmaWVyKS5wcm9wcztcclxuICAgIHRoaXMucmVjb3JkID0gcmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgZXh0cmFQcm9wZXJ0aWVzS2V5ID0gRVhUUkFfUFJPUEVSVElFU19LRVk7XHJcbiAgcHJvcExpc3Q6IEZvcm1Qcm9wTGlzdDxSPjtcclxuICByZWNvcmQ6IFI7XHJcblxyXG4gIGdldCBmb3JtKCk6IEZvcm1Hcm91cCB7XHJcbiAgICByZXR1cm4gKHRoaXMuY29udGFpbmVyID8gdGhpcy5jb250YWluZXIuY29udHJvbCA6IHsgY29udHJvbHM6IHt9IH0pIGFzIEZvcm1Hcm91cDtcclxuICB9XHJcblxyXG4gIGdldCBleHRyYVByb3BlcnRpZXMoKTogRm9ybUdyb3VwIHtcclxuICAgIHJldHVybiAodGhpcy5mb3JtLmNvbnRyb2xzLmV4dHJhUHJvcGVydGllcyB8fCB7IGNvbnRyb2xzOiB7fSB9KSBhcyBGb3JtR3JvdXA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHJhY2s6IFRyYWNrQnlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICBwcml2YXRlIGV4dGVuc2lvbnM6IEV4dGVuc2lvbnNTZXJ2aWNlLFxyXG4gICAgQEluamVjdChFWFRFTlNJT05TX0lERU5USUZJRVIpIHByaXZhdGUgaWRlbnRpZmllcjogc3RyaW5nLFxyXG4gICkge31cclxufVxyXG4iXX0=
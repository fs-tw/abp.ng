import { __decorate, __metadata } from "tslib";
import { TrackByService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, SkipSelf, } from '@angular/core';
import { ControlContainer, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from '../../adapters/date.adapter';
import { TimeAdapter } from '../../adapters/time.adapter';
import { FormProp } from '../../models/form-props';
import { PropData } from '../../models/props';
import { selfFactory } from '../../utils/factory.util';
const ɵ0 = selfFactory;
let ExtensibleFormPropComponent = class ExtensibleFormPropComponent {
    constructor(cdRef, track) {
        this.cdRef = cdRef;
        this.track = track;
    }
    getAsterisk(prop, data) {
        return prop.validators(data).some(validator => validator === Validators.required) ? '*' : '';
    }
    getComponent(prop) {
        if (prop.options)
            return 'select';
        switch (prop.type) {
            case "boolean" /* Boolean */:
                return 'checkbox';
            case "date" /* Date */:
                return 'date';
            case "dateTime" /* DateTime */:
                return 'dateTime';
            case "text" /* Text */:
                return 'textarea';
            case "time" /* Time */:
                return 'time';
            default:
                return 'input';
        }
    }
    getType(prop) {
        switch (prop.type) {
            case "date" /* Date */:
            case "string" /* String */:
                return 'text';
            case "boolean" /* Boolean */:
                return 'checkbox';
            case "number" /* Number */:
                return 'number';
            case "email" /* Email */:
                return 'email';
            case "password" /* Password */:
                return 'password';
            default:
                return 'hidden';
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", PropData)
], ExtensibleFormPropComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormProp)
], ExtensibleFormPropComponent.prototype, "prop", void 0);
ExtensibleFormPropComponent = __decorate([
    Component({
        selector: 'abp-extensible-form-prop',
        template: "<div class=\"form-group\" [abpPermission]=\"prop.permission\" [ngSwitch]=\"getComponent(prop)\">\r\n  <ng-template ngSwitchCase=\"input\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [autocomplete]=\"prop.autocomplete\"\r\n      [type]=\"getType(prop)\"\r\n      [abpDisabled]=\"prop.disabled(data)\"\r\n      [readonly]=\"prop.readonly(data)\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"checkbox\">\r\n    <div class=\"custom-checkbox custom-control\" validationTarget>\r\n      <input\r\n        [id]=\"prop.id\"\r\n        [formControlName]=\"prop.name\"\r\n        [abpDisabled]=\"prop.disabled(data)\"\r\n        type=\"checkbox\"\r\n        class=\"custom-control-input\"\r\n      />\r\n      <label [htmlFor]=\"prop.id\" class=\"custom-control-label\"\r\n        >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"select\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <select\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"prop.disabled(data)\"\r\n      class=\"custom-select form-control\"\r\n    >\r\n      <option\r\n        *ngFor=\"let option of prop.options(data) | async; trackBy: track.by('value')\"\r\n        [ngValue]=\"option.value\"\r\n        >{{ option.key }}</option\r\n      >\r\n    </select>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"date\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      (click)=\"datepicker.open()\"\r\n      (keyup.space)=\"datepicker.open()\"\r\n      ngbDatepicker\r\n      #datepicker=\"ngbDatepicker\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"time\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <ngb-timepicker [formControlName]=\"prop.name\"></ngb-timepicker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"dateTime\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <abp-date-time-picker [prop]=\"prop\"></abp-date-time-picker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"textarea\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <textarea\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"prop.disabled(data)\"\r\n      [readonly]=\"prop.readonly(data)\"\r\n      class=\"form-control\"\r\n    ></textarea>\r\n  </ng-template>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        viewProviders: [
            {
                provide: ControlContainer,
                useFactory: ɵ0,
                deps: [[new Optional(), new SkipSelf(), ControlContainer]],
            },
            { provide: NgbDateAdapter, useClass: DateAdapter },
            { provide: NgbTimeAdapter, useClass: TimeAdapter },
        ]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TrackByService])
], ExtensibleFormPropComponent);
export { ExtensibleFormPropComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS1mb3JtLXByb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9jb21wb25lbnRzL2V4dGVuc2libGUtZm9ybS9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7V0FTckMsV0FBVztBQU83QixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUt0QyxZQUE0QixLQUF3QixFQUFrQixLQUFxQjtRQUEvRCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFrQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFHLENBQUM7SUFFL0YsV0FBVyxDQUFDLElBQWMsRUFBRSxJQUFjO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvRixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sUUFBUSxDQUFDO1FBRWxDLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxPQUFPLE1BQU0sQ0FBQztZQUNoQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxPQUFPLE1BQU0sQ0FBQztZQUNoQjtnQkFDRSxPQUFPLE9BQU8sQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsSUFBYztRQUNwQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsdUJBQW9CO1lBQ3BCO2dCQUNFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sUUFBUSxDQUFDO1lBQ2xCO2dCQUNFLE9BQU8sT0FBTyxDQUFDO1lBQ2pCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sUUFBUSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE5Q1U7SUFBUixLQUFLLEVBQUU7OEJBQU8sUUFBUTt5REFBQztBQUVmO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFFBQVE7eURBQUM7QUFIYiwyQkFBMkI7SUFkdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQywwb0dBQW9EO1FBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLGFBQWEsRUFBRTtZQUNiO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFVBQVUsSUFBYTtnQkFDdkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUMzRDtZQUNELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO1lBQ2xELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO1NBQ25EO0tBQ0YsQ0FBQztxQ0FNbUMsaUJBQWlCLEVBQXlCLGNBQWM7R0FMaEYsMkJBQTJCLENBK0N2QztTQS9DWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFja0J5U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNraXBTZWxmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ2JEYXRlQWRhcHRlciwgTmdiVGltZUFkYXB0ZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvZGF0ZS5hZGFwdGVyJztcclxuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9hZGFwdGVycy90aW1lLmFkYXB0ZXInO1xyXG5pbXBvcnQgeyBlUHJvcFR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy9wcm9wcy5lbnVtJztcclxuaW1wb3J0IHsgRm9ybVByb3AgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS1wcm9wcyc7XHJcbmltcG9ydCB7IFByb3BEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb3BzJztcclxuaW1wb3J0IHsgc2VsZkZhY3RvcnkgfSBmcm9tICcuLi8uLi91dGlscy9mYWN0b3J5LnV0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZXh0ZW5zaWJsZS1mb3JtLXByb3AnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdmlld1Byb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZWxmRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIENvbnRyb2xDb250YWluZXJdXSxcclxuICAgIH0sXHJcbiAgICB7IHByb3ZpZGU6IE5nYkRhdGVBZGFwdGVyLCB1c2VDbGFzczogRGF0ZUFkYXB0ZXIgfSxcclxuICAgIHsgcHJvdmlkZTogTmdiVGltZUFkYXB0ZXIsIHVzZUNsYXNzOiBUaW1lQWRhcHRlciB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRm9ybVByb3BDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFByb3BEYXRhO1xyXG5cclxuICBASW5wdXQoKSBwcm9wOiBGb3JtUHJvcDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHJlYWRvbmx5IHRyYWNrOiBUcmFja0J5U2VydmljZSkge31cclxuXHJcbiAgZ2V0QXN0ZXJpc2socHJvcDogRm9ybVByb3AsIGRhdGE6IFByb3BEYXRhKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBwcm9wLnZhbGlkYXRvcnMoZGF0YSkuc29tZSh2YWxpZGF0b3IgPT4gdmFsaWRhdG9yID09PSBWYWxpZGF0b3JzLnJlcXVpcmVkKSA/ICcqJyA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KHByb3A6IEZvcm1Qcm9wKTogc3RyaW5nIHtcclxuICAgIGlmIChwcm9wLm9wdGlvbnMpIHJldHVybiAnc2VsZWN0JztcclxuXHJcbiAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5Cb29sZWFuOlxyXG4gICAgICAgIHJldHVybiAnY2hlY2tib3gnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5EYXRlOlxyXG4gICAgICAgIHJldHVybiAnZGF0ZSc7XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLkRhdGVUaW1lOlxyXG4gICAgICAgIHJldHVybiAnZGF0ZVRpbWUnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5UZXh0OlxyXG4gICAgICAgIHJldHVybiAndGV4dGFyZWEnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5UaW1lOlxyXG4gICAgICAgIHJldHVybiAndGltZSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdpbnB1dCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlKHByb3A6IEZvcm1Qcm9wKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLkRhdGU6XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLlN0cmluZzpcclxuICAgICAgICByZXR1cm4gJ3RleHQnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5Cb29sZWFuOlxyXG4gICAgICAgIHJldHVybiAnY2hlY2tib3gnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5OdW1iZXI6XHJcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5FbWFpbDpcclxuICAgICAgICByZXR1cm4gJ2VtYWlsJztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuUGFzc3dvcmQ6XHJcbiAgICAgICAgcmV0dXJuICdwYXNzd29yZCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
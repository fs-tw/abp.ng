import { TrackByService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, SkipSelf, } from '@angular/core';
import { ControlContainer, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { DateAdapter } from '../../adapters/date.adapter';
import { TimeAdapter } from '../../adapters/time.adapter';
import { FormProp } from '../../models/form-props';
import { PropData } from '../../models/props';
import { selfFactory } from '../../utils/factory.util';
const ɵ0 = selfFactory;
export class ExtensibleFormPropComponent {
    constructor(cdRef, track) {
        this.cdRef = cdRef;
        this.track = track;
        this.options$ = of([]);
        this.validators = [];
    }
    get asterisk() {
        return this.validators.some(validator => validator === Validators.required) ? '*' : '';
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
    ngOnChanges({ prop }) {
        const options = prop.currentValue.options;
        const readonly = prop.currentValue.readonly;
        const disabled = prop.currentValue.disabled;
        const validators = prop.currentValue.validators;
        if (options)
            this.options$ = options(this.data);
        if (readonly)
            this.readonly = readonly(this.data);
        if (disabled)
            this.disabled = disabled(this.data);
        if (validators)
            this.validators = validators(this.data);
    }
}
ExtensibleFormPropComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-extensible-form-prop',
                template: "<div class=\"form-group\" [abpPermission]=\"prop.permission\" [ngSwitch]=\"getComponent(prop)\">\r\n  <ng-template ngSwitchCase=\"input\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [autocomplete]=\"prop.autocomplete\"\r\n      [type]=\"getType(prop)\"\r\n      [abpDisabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"checkbox\">\r\n    <div class=\"custom-checkbox custom-control\" validationTarget>\r\n      <input\r\n        [id]=\"prop.id\"\r\n        [formControlName]=\"prop.name\"\r\n        [abpDisabled]=\"disabled\"\r\n        type=\"checkbox\"\r\n        class=\"custom-control-input\"\r\n      />\r\n      <label [htmlFor]=\"prop.id\" class=\"custom-control-label\"\r\n        >{{ prop.displayName | abpLocalization }} {{ asterisk }}</label\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"select\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <select\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"disabled\"\r\n      class=\"custom-select form-control\"\r\n    >\r\n      <option\r\n        *ngFor=\"let option of options$ | async; trackBy: track.by('value')\"\r\n        [ngValue]=\"option.value\"\r\n        >{{ option.key }}</option\r\n      >\r\n    </select>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"date\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      (click)=\"datepicker.open()\"\r\n      (keyup.space)=\"datepicker.open()\"\r\n      ngbDatepicker\r\n      #datepicker=\"ngbDatepicker\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"time\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <ngb-timepicker [formControlName]=\"prop.name\"></ngb-timepicker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"dateTime\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <abp-date-time-picker [prop]=\"prop\"></abp-date-time-picker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"textarea\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <textarea\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      class=\"form-control\"\r\n    ></textarea>\r\n  </ng-template>\r\n</div>\r\n",
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
            },] }
];
ExtensibleFormPropComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TrackByService }
];
ExtensibleFormPropComponent.propDecorators = {
    data: [{ type: Input }],
    prop: [{ type: Input }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS1mb3JtLXByb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9jb21wb25lbnRzL2V4dGVuc2libGUtZm9ybS9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFPLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFFUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO1dBU3JDLFdBQVc7QUFPN0IsTUFBTSxPQUFPLDJCQUEyQjtJQWF0QyxZQUE0QixLQUF3QixFQUFrQixLQUFxQjtRQUEvRCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFrQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVIzRixhQUFRLEdBQWtDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqRCxlQUFVLEdBQWtCLEVBQUUsQ0FBQztJQU0rRCxDQUFDO0lBRS9GLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sUUFBUSxDQUFDO1FBRWxDLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxPQUFPLE1BQU0sQ0FBQztZQUNoQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxPQUFPLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxPQUFPLE1BQU0sQ0FBQztZQUNoQjtnQkFDRSxPQUFPLE9BQU8sQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsSUFBYztRQUNwQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsdUJBQW9CO1lBQ3BCO2dCQUNFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sUUFBUSxDQUFDO1lBQ2xCO2dCQUNFLE9BQU8sT0FBTyxDQUFDO1lBQ2pCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sUUFBUSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBaUI7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDNUMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFFaEQsSUFBSSxPQUFPO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxVQUFVO1lBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMseTJGQUFvRDtnQkFDcEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRTtvQkFDYjt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixVQUFVLElBQWE7d0JBQ3ZCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7cUJBQzNEO29CQUNELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO29CQUNsRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtpQkFDbkQ7YUFDRjs7O1lBL0JDLGlCQUFpQjtZQUhMLGNBQWM7OzttQkFvQ3pCLEtBQUs7bUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCwgVHJhY2tCeVNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNraXBTZWxmLFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgVmFsaWRhdG9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nYkRhdGVBZGFwdGVyLCBOZ2JUaW1lQWRhcHRlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9hZGFwdGVycy9kYXRlLmFkYXB0ZXInO1xyXG5pbXBvcnQgeyBUaW1lQWRhcHRlciB9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3RpbWUuYWRhcHRlcic7XHJcbmltcG9ydCB7IGVQcm9wVHlwZSB9IGZyb20gJy4uLy4uL2VudW1zL3Byb3BzLmVudW0nO1xyXG5pbXBvcnQgeyBGb3JtUHJvcCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLXByb3BzJztcclxuaW1wb3J0IHsgUHJvcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvcHMnO1xyXG5pbXBvcnQgeyBzZWxmRmFjdG9yeSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZhY3RvcnkudXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1leHRlbnNpYmxlLWZvcm0tcHJvcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4dGVuc2libGUtZm9ybS1wcm9wLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB2aWV3UHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNlbGZGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgQ29udHJvbENvbnRhaW5lcl1dLFxyXG4gICAgfSxcclxuICAgIHsgcHJvdmlkZTogTmdiRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBEYXRlQWRhcHRlciB9LFxyXG4gICAgeyBwcm92aWRlOiBOZ2JUaW1lQWRhcHRlciwgdXNlQ2xhc3M6IFRpbWVBZGFwdGVyIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVGb3JtUHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgZGF0YTogUHJvcERhdGE7XHJcblxyXG4gIEBJbnB1dCgpIHByb3A6IEZvcm1Qcm9wO1xyXG5cclxuICBvcHRpb25zJDogT2JzZXJ2YWJsZTxBQlAuT3B0aW9uPGFueT5bXT4gPSBvZihbXSk7XHJcblxyXG4gIHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcclxuXHJcbiAgcmVhZG9ubHk6IGJvb2xlYW47XHJcblxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgcmVhZG9ubHkgdHJhY2s6IFRyYWNrQnlTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXQgYXN0ZXJpc2soKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMuc29tZSh2YWxpZGF0b3IgPT4gdmFsaWRhdG9yID09PSBWYWxpZGF0b3JzLnJlcXVpcmVkKSA/ICcqJyA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KHByb3A6IEZvcm1Qcm9wKTogc3RyaW5nIHtcclxuICAgIGlmIChwcm9wLm9wdGlvbnMpIHJldHVybiAnc2VsZWN0JztcclxuXHJcbiAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5Cb29sZWFuOlxyXG4gICAgICAgIHJldHVybiAnY2hlY2tib3gnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5EYXRlOlxyXG4gICAgICAgIHJldHVybiAnZGF0ZSc7XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLkRhdGVUaW1lOlxyXG4gICAgICAgIHJldHVybiAnZGF0ZVRpbWUnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5UZXh0OlxyXG4gICAgICAgIHJldHVybiAndGV4dGFyZWEnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5UaW1lOlxyXG4gICAgICAgIHJldHVybiAndGltZSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdpbnB1dCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUeXBlKHByb3A6IEZvcm1Qcm9wKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLkRhdGU6XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLlN0cmluZzpcclxuICAgICAgICByZXR1cm4gJ3RleHQnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5Cb29sZWFuOlxyXG4gICAgICAgIHJldHVybiAnY2hlY2tib3gnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5OdW1iZXI6XHJcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5FbWFpbDpcclxuICAgICAgICByZXR1cm4gJ2VtYWlsJztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuUGFzc3dvcmQ6XHJcbiAgICAgICAgcmV0dXJuICdwYXNzd29yZCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoeyBwcm9wIH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBwcm9wLmN1cnJlbnRWYWx1ZS5vcHRpb25zO1xyXG4gICAgY29uc3QgcmVhZG9ubHkgPSBwcm9wLmN1cnJlbnRWYWx1ZS5yZWFkb25seTtcclxuICAgIGNvbnN0IGRpc2FibGVkID0gcHJvcC5jdXJyZW50VmFsdWUuZGlzYWJsZWQ7XHJcbiAgICBjb25zdCB2YWxpZGF0b3JzID0gcHJvcC5jdXJyZW50VmFsdWUudmFsaWRhdG9ycztcclxuXHJcbiAgICBpZiAob3B0aW9ucykgdGhpcy5vcHRpb25zJCA9IG9wdGlvbnModGhpcy5kYXRhKTtcclxuICAgIGlmIChyZWFkb25seSkgdGhpcy5yZWFkb25seSA9IHJlYWRvbmx5KHRoaXMuZGF0YSk7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZCh0aGlzLmRhdGEpO1xyXG4gICAgaWYgKHZhbGlkYXRvcnMpIHRoaXMudmFsaWRhdG9ycyA9IHZhbGlkYXRvcnModGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIl19
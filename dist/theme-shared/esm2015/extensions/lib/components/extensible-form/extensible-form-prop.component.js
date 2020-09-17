import { __decorate, __metadata } from "tslib";
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
let ExtensibleFormPropComponent = class ExtensibleFormPropComponent {
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
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TrackByService])
], ExtensibleFormPropComponent);
export { ExtensibleFormPropComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS1mb3JtLXByb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9jb21wb25lbnRzL2V4dGVuc2libGUtZm9ybS9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBTyxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEVBRVIsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztXQVNyQyxXQUFXO0FBTzdCLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBYXRDLFlBQTRCLEtBQXdCLEVBQWtCLEtBQXFCO1FBQS9ELFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQWtCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUjNGLGFBQVEsR0FBa0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpELGVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBTStELENBQUM7SUFFL0YsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pGLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxRQUFRLENBQUM7UUFFbEMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sVUFBVSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFjO1FBQ3BCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQix1QkFBb0I7WUFDcEI7Z0JBQ0UsT0FBTyxNQUFNLENBQUM7WUFDaEI7Z0JBQ0UsT0FBTyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsT0FBTyxRQUFRLENBQUM7WUFDbEI7Z0JBQ0UsT0FBTyxPQUFPLENBQUM7WUFDakI7Z0JBQ0UsT0FBTyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsT0FBTyxRQUFRLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFpQjtRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVoRCxJQUFJLE9BQU87WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLFVBQVU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7QUFsRVU7SUFBUixLQUFLLEVBQUU7OEJBQU8sUUFBUTt5REFBQztBQUVmO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFFBQVE7eURBQUM7QUFIYiwyQkFBMkI7SUFkdkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyx5MkZBQW9EO1FBQ3BELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLGFBQWEsRUFBRTtZQUNiO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFVBQVUsSUFBYTtnQkFDdkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUMzRDtZQUNELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO1lBQ2xELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO1NBQ25EO0tBQ0YsQ0FBQztxQ0FjbUMsaUJBQWlCLEVBQXlCLGNBQWM7R0FiaEYsMkJBQTJCLENBbUV2QztTQW5FWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIFRyYWNrQnlTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBTa2lwU2VsZixcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIsIFZhbGlkYXRvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ2JEYXRlQWRhcHRlciwgTmdiVGltZUFkYXB0ZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvZGF0ZS5hZGFwdGVyJztcclxuaW1wb3J0IHsgVGltZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9hZGFwdGVycy90aW1lLmFkYXB0ZXInO1xyXG5pbXBvcnQgeyBlUHJvcFR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy9wcm9wcy5lbnVtJztcclxuaW1wb3J0IHsgRm9ybVByb3AgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS1wcm9wcyc7XHJcbmltcG9ydCB7IFByb3BEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb3BzJztcclxuaW1wb3J0IHsgc2VsZkZhY3RvcnkgfSBmcm9tICcuLi8uLi91dGlscy9mYWN0b3J5LnV0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZXh0ZW5zaWJsZS1mb3JtLXByb3AnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdmlld1Byb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZWxmRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIENvbnRyb2xDb250YWluZXJdXSxcclxuICAgIH0sXHJcbiAgICB7IHByb3ZpZGU6IE5nYkRhdGVBZGFwdGVyLCB1c2VDbGFzczogRGF0ZUFkYXB0ZXIgfSxcclxuICAgIHsgcHJvdmlkZTogTmdiVGltZUFkYXB0ZXIsIHVzZUNsYXNzOiBUaW1lQWRhcHRlciB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRm9ybVByb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFByb3BEYXRhO1xyXG5cclxuICBASW5wdXQoKSBwcm9wOiBGb3JtUHJvcDtcclxuXHJcbiAgb3B0aW9ucyQ6IE9ic2VydmFibGU8QUJQLk9wdGlvbjxhbnk+W10+ID0gb2YoW10pO1xyXG5cclxuICB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XHJcblxyXG4gIHJlYWRvbmx5OiBib29sZWFuO1xyXG5cclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHVibGljIHJlYWRvbmx5IHRyYWNrOiBUcmFja0J5U2VydmljZSkge31cclxuXHJcbiAgZ2V0IGFzdGVyaXNrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzLnNvbWUodmFsaWRhdG9yID0+IHZhbGlkYXRvciA9PT0gVmFsaWRhdG9ycy5yZXF1aXJlZCkgPyAnKicgOiAnJztcclxuICB9XHJcblxyXG4gIGdldENvbXBvbmVudChwcm9wOiBGb3JtUHJvcCk6IHN0cmluZyB7XHJcbiAgICBpZiAocHJvcC5vcHRpb25zKSByZXR1cm4gJ3NlbGVjdCc7XHJcblxyXG4gICAgc3dpdGNoIChwcm9wLnR5cGUpIHtcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuQm9vbGVhbjpcclxuICAgICAgICByZXR1cm4gJ2NoZWNrYm94JztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuRGF0ZTpcclxuICAgICAgICByZXR1cm4gJ2RhdGUnO1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5EYXRlVGltZTpcclxuICAgICAgICByZXR1cm4gJ2RhdGVUaW1lJztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuVGV4dDpcclxuICAgICAgICByZXR1cm4gJ3RleHRhcmVhJztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuVGltZTpcclxuICAgICAgICByZXR1cm4gJ3RpbWUnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnaW5wdXQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VHlwZShwcm9wOiBGb3JtUHJvcCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5EYXRlOlxyXG4gICAgICBjYXNlIGVQcm9wVHlwZS5TdHJpbmc6XHJcbiAgICAgICAgcmV0dXJuICd0ZXh0JztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuQm9vbGVhbjpcclxuICAgICAgICByZXR1cm4gJ2NoZWNrYm94JztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuTnVtYmVyOlxyXG4gICAgICAgIHJldHVybiAnbnVtYmVyJztcclxuICAgICAgY2FzZSBlUHJvcFR5cGUuRW1haWw6XHJcbiAgICAgICAgcmV0dXJuICdlbWFpbCc7XHJcbiAgICAgIGNhc2UgZVByb3BUeXBlLlBhc3N3b3JkOlxyXG4gICAgICAgIHJldHVybiAncGFzc3dvcmQnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHsgcHJvcCB9OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gcHJvcC5jdXJyZW50VmFsdWUub3B0aW9ucztcclxuICAgIGNvbnN0IHJlYWRvbmx5ID0gcHJvcC5jdXJyZW50VmFsdWUucmVhZG9ubHk7XHJcbiAgICBjb25zdCBkaXNhYmxlZCA9IHByb3AuY3VycmVudFZhbHVlLmRpc2FibGVkO1xyXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IHByb3AuY3VycmVudFZhbHVlLnZhbGlkYXRvcnM7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMpIHRoaXMub3B0aW9ucyQgPSBvcHRpb25zKHRoaXMuZGF0YSk7XHJcbiAgICBpZiAocmVhZG9ubHkpIHRoaXMucmVhZG9ubHkgPSByZWFkb25seSh0aGlzLmRhdGEpO1xyXG4gICAgaWYgKGRpc2FibGVkKSB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQodGhpcy5kYXRhKTtcclxuICAgIGlmICh2YWxpZGF0b3JzKSB0aGlzLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
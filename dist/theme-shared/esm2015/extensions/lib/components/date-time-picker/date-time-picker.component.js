import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, SkipSelf, ViewChild, } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { NgbDateAdapter, NgbInputDatepicker, NgbTimeAdapter, NgbTimepicker, } from '@ng-bootstrap/ng-bootstrap';
import { DateTimeAdapter } from '../../adapters/date-time.adapter';
import { FormProp } from '../../models/form-props';
import { selfFactory } from '../../utils/factory.util';
const ɵ0 = selfFactory;
export class DateTimePickerComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    setDate(datestr) {
        this.date.writeValue(datestr);
    }
    setTime(datestr) {
        this.time.writeValue(datestr);
    }
}
DateTimePickerComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'abpDateTimePicker',
                selector: 'abp-date-time-picker',
                template: `
    <input
      [id]="prop.id"
      [formControlName]="prop.name"
      (ngModelChange)="setTime($event)"
      (click)="datepicker.open()"
      (keyup.space)="datepicker.open()"
      ngbDatepicker
      #datepicker="ngbDatepicker"
      type="text"
      class="form-control"
    />
    <ngb-timepicker
      #timepicker
      [formControlName]="prop.name"
      (ngModelChange)="setDate($event)"
    ></ngb-timepicker>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                viewProviders: [
                    {
                        provide: ControlContainer,
                        useFactory: ɵ0,
                        deps: [[new Optional(), new SkipSelf(), ControlContainer]],
                    },
                    {
                        provide: NgbDateAdapter,
                        useClass: DateTimeAdapter,
                    },
                    {
                        provide: NgbTimeAdapter,
                        useClass: DateTimeAdapter,
                    },
                ]
            },] }
];
DateTimePickerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DateTimePickerComponent.propDecorators = {
    prop: [{ type: Input }],
    date: [{ type: ViewChild, args: [NgbInputDatepicker,] }],
    time: [{ type: ViewChild, args: [NgbTimepicker,] }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvZXh0ZW5zaW9ucy9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxhQUFhLEdBQ2QsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztXQTJCckMsV0FBVztBQWE3QixNQUFNLE9BQU8sdUJBQXVCO0lBTWxDLFlBQTRCLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO0lBQUcsQ0FBQztJQUV4RCxPQUFPLENBQUMsT0FBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUU7b0JBQ2I7d0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsVUFBVSxJQUFhO3dCQUN2QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUMzRDtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLGVBQWU7cUJBQzFCO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxjQUFjO3dCQUN2QixRQUFRLEVBQUUsZUFBZTtxQkFDMUI7aUJBQ0Y7YUFDRjs7O1lBdkRDLGlCQUFpQjs7O21CQXlEaEIsS0FBSzttQkFFTCxTQUFTLFNBQUMsa0JBQWtCO21CQUM1QixTQUFTLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNraXBTZWxmLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBOZ2JEYXRlQWRhcHRlcixcclxuICBOZ2JJbnB1dERhdGVwaWNrZXIsXHJcbiAgTmdiVGltZUFkYXB0ZXIsXHJcbiAgTmdiVGltZXBpY2tlcixcclxufSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2RhdGUtdGltZS5hZGFwdGVyJztcclxuaW1wb3J0IHsgRm9ybVByb3AgfSBmcm9tICcuLi8uLi9tb2RlbHMvZm9ybS1wcm9wcyc7XHJcbmltcG9ydCB7IHNlbGZGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZmFjdG9yeS51dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGV4cG9ydEFzOiAnYWJwRGF0ZVRpbWVQaWNrZXInLFxyXG4gIHNlbGVjdG9yOiAnYWJwLWRhdGUtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXRcclxuICAgICAgW2lkXT1cInByb3AuaWRcIlxyXG4gICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cInByb3AubmFtZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFRpbWUoJGV2ZW50KVwiXHJcbiAgICAgIChjbGljayk9XCJkYXRlcGlja2VyLm9wZW4oKVwiXHJcbiAgICAgIChrZXl1cC5zcGFjZSk9XCJkYXRlcGlja2VyLm9wZW4oKVwiXHJcbiAgICAgIG5nYkRhdGVwaWNrZXJcclxuICAgICAgI2RhdGVwaWNrZXI9XCJuZ2JEYXRlcGlja2VyXCJcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAvPlxyXG4gICAgPG5nYi10aW1lcGlja2VyXHJcbiAgICAgICN0aW1lcGlja2VyXHJcbiAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5uYW1lXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0RGF0ZSgkZXZlbnQpXCJcclxuICAgID48L25nYi10aW1lcGlja2VyPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdmlld1Byb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZWxmRmFjdG9yeSxcclxuICAgICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIENvbnRyb2xDb250YWluZXJdXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5nYkRhdGVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogRGF0ZVRpbWVBZGFwdGVyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTmdiVGltZUFkYXB0ZXIsXHJcbiAgICAgIHVzZUNsYXNzOiBEYXRlVGltZUFkYXB0ZXIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcHJvcDogRm9ybVByb3A7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTmdiSW5wdXREYXRlcGlja2VyKSBkYXRlOiBOZ2JJbnB1dERhdGVwaWNrZXI7XHJcbiAgQFZpZXdDaGlsZChOZ2JUaW1lcGlja2VyKSB0aW1lOiBOZ2JUaW1lcGlja2VyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBzZXREYXRlKGRhdGVzdHI6IHN0cmluZykge1xyXG4gICAgdGhpcy5kYXRlLndyaXRlVmFsdWUoZGF0ZXN0cik7XHJcbiAgfVxyXG5cclxuICBzZXRUaW1lKGRhdGVzdHI6IHN0cmluZykge1xyXG4gICAgdGhpcy50aW1lLndyaXRlVmFsdWUoZGF0ZXN0cik7XHJcbiAgfVxyXG59XHJcbiJdfQ==
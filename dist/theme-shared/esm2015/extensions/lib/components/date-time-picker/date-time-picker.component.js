import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, SkipSelf, ViewChild, } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { NgbDateAdapter, NgbInputDatepicker, NgbTimeAdapter, NgbTimepicker, } from '@ng-bootstrap/ng-bootstrap';
import { DateTimeAdapter } from '../../adapters/date-time.adapter';
import { FormProp } from '../../models/form-props';
import { selfFactory } from '../../utils/factory.util';
const ɵ0 = selfFactory;
let DateTimePickerComponent = class DateTimePickerComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    setDate(datestr) {
        this.date.writeValue(datestr);
    }
    setTime(datestr) {
        this.time.writeValue(datestr);
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormProp)
], DateTimePickerComponent.prototype, "prop", void 0);
__decorate([
    ViewChild(NgbInputDatepicker),
    __metadata("design:type", NgbInputDatepicker)
], DateTimePickerComponent.prototype, "date", void 0);
__decorate([
    ViewChild(NgbTimepicker),
    __metadata("design:type", NgbTimepicker)
], DateTimePickerComponent.prototype, "time", void 0);
DateTimePickerComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], DateTimePickerComponent);
export { DateTimePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvZXh0ZW5zaW9ucy9zcmMvbGliL2NvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxHQUNkLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7V0EyQnJDLFdBQVc7QUFhN0IsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFNbEMsWUFBNEIsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFBRyxDQUFDO0lBRXhELE9BQU8sQ0FBQyxPQUFlO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQWRVO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFFBQVE7cURBQUM7QUFFTztJQUE5QixTQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQU8sa0JBQWtCO3FEQUFDO0FBQzlCO0lBQXpCLFNBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQU8sYUFBYTtxREFBQztBQUpuQyx1QkFBdUI7SUF0Q25DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFO1lBQ2I7Z0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsVUFBVSxJQUFhO2dCQUN2QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzNEO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLFFBQVEsRUFBRSxlQUFlO2FBQzFCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLFFBQVEsRUFBRSxlQUFlO2FBQzFCO1NBQ0Y7S0FDRixDQUFDO3FDQU9tQyxpQkFBaUI7R0FOekMsdUJBQXVCLENBZW5DO1NBZlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gIE5nYkRhdGVBZGFwdGVyLFxyXG4gIE5nYklucHV0RGF0ZXBpY2tlcixcclxuICBOZ2JUaW1lQWRhcHRlcixcclxuICBOZ2JUaW1lcGlja2VyLFxyXG59IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvZGF0ZS10aW1lLmFkYXB0ZXInO1xyXG5pbXBvcnQgeyBGb3JtUHJvcCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLXByb3BzJztcclxuaW1wb3J0IHsgc2VsZkZhY3RvcnkgfSBmcm9tICcuLi8uLi91dGlscy9mYWN0b3J5LnV0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZXhwb3J0QXM6ICdhYnBEYXRlVGltZVBpY2tlcicsXHJcbiAgc2VsZWN0b3I6ICdhYnAtZGF0ZS10aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dFxyXG4gICAgICBbaWRdPVwicHJvcC5pZFwiXHJcbiAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwicHJvcC5uYW1lXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VGltZSgkZXZlbnQpXCJcclxuICAgICAgKGNsaWNrKT1cImRhdGVwaWNrZXIub3BlbigpXCJcclxuICAgICAgKGtleXVwLnNwYWNlKT1cImRhdGVwaWNrZXIub3BlbigpXCJcclxuICAgICAgbmdiRGF0ZXBpY2tlclxyXG4gICAgICAjZGF0ZXBpY2tlcj1cIm5nYkRhdGVwaWNrZXJcIlxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgIC8+XHJcbiAgICA8bmdiLXRpbWVwaWNrZXJcclxuICAgICAgI3RpbWVwaWNrZXJcclxuICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJwcm9wLm5hbWVcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXREYXRlKCRldmVudClcIlxyXG4gICAgPjwvbmdiLXRpbWVwaWNrZXI+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB2aWV3UHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNlbGZGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgQ29udHJvbENvbnRhaW5lcl1dLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTmdiRGF0ZUFkYXB0ZXIsXHJcbiAgICAgIHVzZUNsYXNzOiBEYXRlVGltZUFkYXB0ZXIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOZ2JUaW1lQWRhcHRlcixcclxuICAgICAgdXNlQ2xhc3M6IERhdGVUaW1lQWRhcHRlcixcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwcm9wOiBGb3JtUHJvcDtcclxuXHJcbiAgQFZpZXdDaGlsZChOZ2JJbnB1dERhdGVwaWNrZXIpIGRhdGU6IE5nYklucHV0RGF0ZXBpY2tlcjtcclxuICBAVmlld0NoaWxkKE5nYlRpbWVwaWNrZXIpIHRpbWU6IE5nYlRpbWVwaWNrZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHNldERhdGUoZGF0ZXN0cjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRhdGUud3JpdGVWYWx1ZShkYXRlc3RyKTtcclxuICB9XHJcblxyXG4gIHNldFRpbWUoZGF0ZXN0cjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRpbWUud3JpdGVWYWx1ZShkYXRlc3RyKTtcclxuICB9XHJcbn1cclxuIl19
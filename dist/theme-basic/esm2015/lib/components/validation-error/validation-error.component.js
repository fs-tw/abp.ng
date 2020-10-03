import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ValidationErrorComponent as ErrorComponent } from '@ngx-validate/core';
export class ValidationErrorComponent extends ErrorComponent {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
}
ValidationErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-validation-error',
                template: `
    <div class="invalid-feedback" *ngFor="let error of abpErrors; trackBy: trackByFn">
      {{ error.message | abpLocalization: error.interpoliteParams }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1iYXNpYy9zcmMvbGliL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBYyx3QkFBd0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVk1RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsY0FBYztJQUMxRCxJQUFJLFNBQVM7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBRWpDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLHVDQUNLLEtBQUssS0FDUixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUN0QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFDdEY7YUFDSDtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb24sIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCBhcyBFcnJvckNvbXBvbmVudCB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC12YWxpZGF0aW9uLWVycm9yJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgYWJwRXJyb3JzOyB0cmFja0J5OiB0cmFja0J5Rm5cIj5cclxuICAgICAge3sgZXJyb3IubWVzc2FnZSB8IGFicExvY2FsaXphdGlvbjogZXJyb3IuaW50ZXJwb2xpdGVQYXJhbXMgfX1cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCBleHRlbmRzIEVycm9yQ29tcG9uZW50IHtcclxuICBnZXQgYWJwRXJyb3JzKCk6IFZhbGlkYXRpb24uRXJyb3JbXSAmIHsgaW50ZXJwb2xpdGVQYXJhbXM/OiBzdHJpbmdbXSB9IHtcclxuICAgIGlmICghdGhpcy5lcnJvcnMgfHwgIXRoaXMuZXJyb3JzLmxlbmd0aCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmVycm9ycy5tYXAoZXJyb3IgPT4ge1xyXG4gICAgICBpZiAoIWVycm9yLm1lc3NhZ2UpIHJldHVybiBlcnJvcjtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZXJyb3IubWVzc2FnZS5pbmRleE9mKCdbJyk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5lcnJvcixcclxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2Uuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgaW50ZXJwb2xpdGVQYXJhbXM6IGVycm9yLm1lc3NhZ2Uuc2xpY2UoaW5kZXggKyAxLCBlcnJvci5tZXNzYWdlLmxlbmd0aCAtIDEpLnNwbGl0KCcsJyksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
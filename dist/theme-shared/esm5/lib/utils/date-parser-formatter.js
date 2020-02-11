/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-parser-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */
function toInteger(value) {
    return parseInt("" + value, 10);
}
var DateParserFormatter = /** @class */ (function (_super) {
    tslib_1.__extends(DateParserFormatter, _super);
    function DateParserFormatter(datePipe) {
        var _this = _super.call(this) || this;
        _this.datePipe = datePipe;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DateParserFormatter.prototype.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 &&
                isNumber(dateParts[0]) &&
                isNumber(dateParts[1]) &&
                isNumber(dateParts[2])) {
                return {
                    year: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    day: toInteger(dateParts[2]),
                };
            }
        }
        return null;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateParserFormatter.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date && this.datePipe) {
            return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'shortDate');
        }
        else {
            return date
                ? date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '')
                : '';
        }
    };
    DateParserFormatter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DateParserFormatter.ctorParameters = function () { return [
        { type: DatePipe, decorators: [{ type: Optional }] }
    ]; };
    return DateParserFormatter;
}(NgbDateParserFormatter));
export { DateParserFormatter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateParserFormatter.prototype.datePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXJzZXItZm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZGF0ZS1wYXJzZXItZm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBRTNDLFNBQVMsU0FBUyxDQUFDLEtBQWE7SUFDOUIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxDQUFBLE1BQUksS0FBTyxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUI7U0FBTTtRQUNMLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDOzs7OztBQUVELFNBQVMsUUFBUSxDQUFDLEtBQVU7SUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQVU7SUFDM0IsT0FBTyxRQUFRLENBQUMsS0FBRyxLQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVEO0lBQ3lDLCtDQUFzQjtJQUM3RCw2QkFBZ0MsUUFBa0I7UUFBbEQsWUFDRSxpQkFBTyxTQUNSO1FBRitCLGNBQVEsR0FBUixRQUFRLENBQVU7O0lBRWxELENBQUM7Ozs7O0lBRUQsbUNBQUs7Ozs7SUFBTCxVQUFNLEtBQWE7UUFDakIsSUFBSSxLQUFLLEVBQUU7O2dCQUNILFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN6QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEQsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDbEU7aUJBQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRixPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNyRjtpQkFBTSxJQUNMLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDdEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN0QjtnQkFDQSxPQUFPO29CQUNMLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixLQUFLLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdCLENBQUM7YUFDSDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxJQUFtQjtRQUN4QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDNUY7YUFBTTtZQUNMLE9BQU8sSUFBSTtnQkFDVCxDQUFDLENBQUksSUFBSSxDQUFDLElBQUksVUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQy9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDN0M7Z0JBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNSO0lBQ0gsQ0FBQzs7Z0JBdkNGLFVBQVU7Ozs7Z0JBbEJGLFFBQVEsdUJBb0JGLFFBQVE7O0lBc0N2QiwwQkFBQztDQUFBLEFBeENELENBQ3lDLHNCQUFzQixHQXVDOUQ7U0F2Q1ksbUJBQW1COzs7Ozs7SUFDbEIsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZnVuY3Rpb24gcGFkTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gYDAke3ZhbHVlfWAuc2xpY2UoLTIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICFpc05hTih0b0ludGVnZXIodmFsdWUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlOiBhbnkpOiBudW1iZXIge1xyXG4gIHJldHVybiBwYXJzZUludChgJHt2YWx1ZX1gLCAxMCk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGVQYXJzZXJGb3JtYXR0ZXIgZXh0ZW5kcyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBOZ2JEYXRlU3RydWN0IHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBkYXRlUGFydHMgPSB2YWx1ZS50cmltKCkuc3BsaXQoJy0nKTtcclxuICAgICAgaWYgKGRhdGVQYXJ0cy5sZW5ndGggPT09IDEgJiYgaXNOdW1iZXIoZGF0ZVBhcnRzWzBdKSkge1xyXG4gICAgICAgIHJldHVybiB7IHllYXI6IHRvSW50ZWdlcihkYXRlUGFydHNbMF0pLCBtb250aDogbnVsbCwgZGF5OiBudWxsIH07XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZVBhcnRzLmxlbmd0aCA9PT0gMiAmJiBpc051bWJlcihkYXRlUGFydHNbMF0pICYmIGlzTnVtYmVyKGRhdGVQYXJ0c1sxXSkpIHtcclxuICAgICAgICByZXR1cm4geyB5ZWFyOiB0b0ludGVnZXIoZGF0ZVBhcnRzWzBdKSwgbW9udGg6IHRvSW50ZWdlcihkYXRlUGFydHNbMV0pLCBkYXk6IG51bGwgfTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBkYXRlUGFydHMubGVuZ3RoID09PSAzICYmXHJcbiAgICAgICAgaXNOdW1iZXIoZGF0ZVBhcnRzWzBdKSAmJlxyXG4gICAgICAgIGlzTnVtYmVyKGRhdGVQYXJ0c1sxXSkgJiZcclxuICAgICAgICBpc051bWJlcihkYXRlUGFydHNbMl0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB5ZWFyOiB0b0ludGVnZXIoZGF0ZVBhcnRzWzBdKSxcclxuICAgICAgICAgIG1vbnRoOiB0b0ludGVnZXIoZGF0ZVBhcnRzWzFdKSxcclxuICAgICAgICAgIGRheTogdG9JbnRlZ2VyKGRhdGVQYXJ0c1syXSksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7XHJcbiAgICBpZiAoZGF0ZSAmJiB0aGlzLmRhdGVQaXBlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSksICdzaG9ydERhdGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRlXHJcbiAgICAgICAgPyBgJHtkYXRlLnllYXJ9LSR7aXNOdW1iZXIoZGF0ZS5tb250aCkgPyBwYWROdW1iZXIoZGF0ZS5tb250aCkgOiAnJ30tJHtcclxuICAgICAgICAgICAgaXNOdW1iZXIoZGF0ZS5kYXkpID8gcGFkTnVtYmVyKGRhdGUuZGF5KSA6ICcnXHJcbiAgICAgICAgICB9YFxyXG4gICAgICAgIDogJyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
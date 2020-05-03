/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/validation-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConfigState } from '@abp/ng.core';
import { validatePassword } from '@ngx-validate/core';
import { Validators } from '@angular/forms';
var minLength = Validators.minLength, maxLength = Validators.maxLength;
/**
 * @param {?} store
 * @return {?}
 */
export function getPasswordValidators(store) {
    /** @type {?} */
    var getRule = getRuleFn(store);
    /** @type {?} */
    var passwordRulesArr = (/** @type {?} */ ([]));
    /** @type {?} */
    var requiredLength = 1;
    if (getRule('RequireDigit') === 'true') {
        passwordRulesArr.push('number');
    }
    if (getRule('RequireLowercase') === 'true') {
        passwordRulesArr.push('small');
    }
    if (getRule('RequireUppercase') === 'true') {
        passwordRulesArr.push('capital');
    }
    if (getRule('RequireNonAlphanumeric') === 'true') {
        passwordRulesArr.push('special');
    }
    if (Number.isInteger(+getRule('RequiredLength'))) {
        requiredLength = +getRule('RequiredLength');
    }
    return [validatePassword(passwordRulesArr), minLength(requiredLength), maxLength(128)];
}
/**
 * @param {?} store
 * @return {?}
 */
function getRuleFn(store) {
    return (/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var passwordRules = store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        return (passwordRules["Abp.Identity.Password." + key] || '').toLowerCase();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3ZhbGlkYXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQU8sV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsSUFBQSxnQ0FBUyxFQUFFLGdDQUFTOzs7OztBQUU1QixNQUFNLFVBQVUscUJBQXFCLENBQUMsS0FBWTs7UUFDMUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7O1FBRTFCLGdCQUFnQixHQUFHLG1CQUFBLEVBQUUsRUFBaUI7O1FBQ3hDLGNBQWMsR0FBRyxDQUFDO0lBRXRCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUN0QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUMxQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUMxQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbEM7SUFFRCxJQUFJLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUNoRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbEM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO1FBQ2hELGNBQWMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQzdDO0lBRUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBWTtJQUM3Qjs7OztJQUFPLFVBQUMsR0FBVzs7WUFDWCxhQUFhLEdBQTJCLEtBQUssQ0FBQyxjQUFjLENBQ2hFLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FDN0M7UUFFRCxPQUFPLENBQUMsYUFBYSxDQUFDLDJCQUF5QixHQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RSxDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEFCUCwgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBQYXNzd29yZFJ1bGVzLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCB7IG1pbkxlbmd0aCwgbWF4TGVuZ3RoIH0gPSBWYWxpZGF0b3JzO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhc3N3b3JkVmFsaWRhdG9ycyhzdG9yZTogU3RvcmUpOiBWYWxpZGF0b3JGbltdIHtcclxuICBjb25zdCBnZXRSdWxlID0gZ2V0UnVsZUZuKHN0b3JlKTtcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRSdWxlc0FyciA9IFtdIGFzIFBhc3N3b3JkUnVsZXM7XHJcbiAgbGV0IHJlcXVpcmVkTGVuZ3RoID0gMTtcclxuXHJcbiAgaWYgKGdldFJ1bGUoJ1JlcXVpcmVEaWdpdCcpID09PSAndHJ1ZScpIHtcclxuICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnbnVtYmVyJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0UnVsZSgnUmVxdWlyZUxvd2VyY2FzZScpID09PSAndHJ1ZScpIHtcclxuICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnc21hbGwnKTtcclxuICB9XHJcblxyXG4gIGlmIChnZXRSdWxlKCdSZXF1aXJlVXBwZXJjYXNlJykgPT09ICd0cnVlJykge1xyXG4gICAgcGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdjYXBpdGFsJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0UnVsZSgnUmVxdWlyZU5vbkFscGhhbnVtZXJpYycpID09PSAndHJ1ZScpIHtcclxuICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnc3BlY2lhbCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKE51bWJlci5pc0ludGVnZXIoK2dldFJ1bGUoJ1JlcXVpcmVkTGVuZ3RoJykpKSB7XHJcbiAgICByZXF1aXJlZExlbmd0aCA9ICtnZXRSdWxlKCdSZXF1aXJlZExlbmd0aCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFt2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkUnVsZXNBcnIpLCBtaW5MZW5ndGgocmVxdWlyZWRMZW5ndGgpLCBtYXhMZW5ndGgoMTI4KV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJ1bGVGbihzdG9yZTogU3RvcmUpIHtcclxuICByZXR1cm4gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYXNzd29yZFJ1bGVzOiBBQlAuRGljdGlvbmFyeTxzdHJpbmc+ID0gc3RvcmUuc2VsZWN0U25hcHNob3QoXHJcbiAgICAgIENvbmZpZ1N0YXRlLmdldFNldHRpbmdzKCdJZGVudGl0eS5QYXNzd29yZCcpLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKHBhc3N3b3JkUnVsZXNbYEFicC5JZGVudGl0eS5QYXNzd29yZC4ke2tleX1gXSB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICB9O1xyXG59XHJcbiJdfQ==
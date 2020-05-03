/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/validation-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConfigState } from '@abp/ng.core';
import { validatePassword } from '@ngx-validate/core';
import { Validators } from '@angular/forms';
const { minLength, maxLength } = Validators;
/**
 * @param {?} store
 * @return {?}
 */
export function getPasswordValidators(store) {
    /** @type {?} */
    const getRule = getRuleFn(store);
    /** @type {?} */
    const passwordRulesArr = (/** @type {?} */ ([]));
    /** @type {?} */
    let requiredLength = 1;
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
    (key) => {
        /** @type {?} */
        const passwordRules = store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        return (passwordRules[`Abp.Identity.Password.${key}`] || '').toLowerCase();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3ZhbGlkYXRpb24tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQU8sV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7TUFFbkQsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsVUFBVTs7Ozs7QUFFM0MsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEtBQVk7O1VBQzFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDOztVQUUxQixnQkFBZ0IsR0FBRyxtQkFBQSxFQUFFLEVBQWlCOztRQUN4QyxjQUFjLEdBQUcsQ0FBQztJQUV0QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDdEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDMUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDMUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsSUFBSSxPQUFPLENBQUMsd0JBQXdCLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDaEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRTtRQUNoRCxjQUFjLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUM3QztJQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RixDQUFDOzs7OztBQUVELFNBQVMsU0FBUyxDQUFDLEtBQVk7SUFDN0I7Ozs7SUFBTyxDQUFDLEdBQVcsRUFBRSxFQUFFOztjQUNmLGFBQWEsR0FBMkIsS0FBSyxDQUFDLGNBQWMsQ0FDaEUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUM3QztRQUVELE9BQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0UsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBQlAsIENvbmZpZ1N0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgUGFzc3dvcmRSdWxlcywgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuY29uc3QgeyBtaW5MZW5ndGgsIG1heExlbmd0aCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXNzd29yZFZhbGlkYXRvcnMoc3RvcmU6IFN0b3JlKTogVmFsaWRhdG9yRm5bXSB7XHJcbiAgY29uc3QgZ2V0UnVsZSA9IGdldFJ1bGVGbihzdG9yZSk7XHJcblxyXG4gIGNvbnN0IHBhc3N3b3JkUnVsZXNBcnIgPSBbXSBhcyBQYXNzd29yZFJ1bGVzO1xyXG4gIGxldCByZXF1aXJlZExlbmd0aCA9IDE7XHJcblxyXG4gIGlmIChnZXRSdWxlKCdSZXF1aXJlRGlnaXQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ251bWJlcicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGdldFJ1bGUoJ1JlcXVpcmVMb3dlcmNhc2UnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NtYWxsJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0UnVsZSgnUmVxdWlyZVVwcGVyY2FzZScpID09PSAndHJ1ZScpIHtcclxuICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnY2FwaXRhbCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGdldFJ1bGUoJ1JlcXVpcmVOb25BbHBoYW51bWVyaWMnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NwZWNpYWwnKTtcclxuICB9XHJcblxyXG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKCtnZXRSdWxlKCdSZXF1aXJlZExlbmd0aCcpKSkge1xyXG4gICAgcmVxdWlyZWRMZW5ndGggPSArZ2V0UnVsZSgnUmVxdWlyZWRMZW5ndGgnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZFJ1bGVzQXJyKSwgbWluTGVuZ3RoKHJlcXVpcmVkTGVuZ3RoKSwgbWF4TGVuZ3RoKDEyOCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSdWxlRm4oc3RvcmU6IFN0b3JlKSB7XHJcbiAgcmV0dXJuIChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcGFzc3dvcmRSdWxlczogQUJQLkRpY3Rpb25hcnk8c3RyaW5nPiA9IHN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICBDb25maWdTdGF0ZS5nZXRTZXR0aW5ncygnSWRlbnRpdHkuUGFzc3dvcmQnKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChwYXNzd29yZFJ1bGVzW2BBYnAuSWRlbnRpdHkuUGFzc3dvcmQuJHtrZXl9YF0gfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgfTtcclxufVxyXG4iXX0=
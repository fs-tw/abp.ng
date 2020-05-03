/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/form-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isNumber } from './number-utils';
/**
 * @template T
 * @param {?} _enum
 * @return {?}
 */
export function mapEnumToOptions(_enum) {
    /** @type {?} */
    var options = [];
    for (var member in _enum)
        if (!isNumber(member))
            options.push({
                key: member,
                value: _enum[member],
            });
    return options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9mb3JtLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFMUMsTUFBTSxVQUFVLGdCQUFnQixDQUFJLEtBQVE7O1FBQ3BDLE9BQU8sR0FBb0IsRUFBRTtJQUVuQyxLQUFLLElBQU0sTUFBTSxJQUFJLEtBQUs7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDWCxHQUFHLEVBQUUsTUFBTTtnQkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNyQixDQUFDLENBQUM7SUFFUCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi9udW1iZXItdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcEVudW1Ub09wdGlvbnM8VD4oX2VudW06IFQpOiBBQlAuT3B0aW9uPFQ+W10ge1xyXG4gIGNvbnN0IG9wdGlvbnM6IEFCUC5PcHRpb248VD5bXSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IG1lbWJlciBpbiBfZW51bSlcclxuICAgIGlmICghaXNOdW1iZXIobWVtYmVyKSlcclxuICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICBrZXk6IG1lbWJlcixcclxuICAgICAgICB2YWx1ZTogX2VudW1bbWVtYmVyXSxcclxuICAgICAgfSk7XHJcblxyXG4gIHJldHVybiBvcHRpb25zO1xyXG59XHJcbiJdfQ==
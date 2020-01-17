/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/toast.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, query, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var toastInOut = trigger('toastInOut', [
    transition('* <=> *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate('350ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
        ], { optional: true }),
        query(':leave', animate('450ms ease', style({ opacity: 0 })), {
            optional: true,
        }),
    ]),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2FuaW1hdGlvbnMvdG9hc3QuYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpGLE1BQU0sS0FBTyxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUM5QyxVQUFVLENBQUMsU0FBUyxFQUFFO1FBQ3BCLEtBQUssQ0FDSCxRQUFRLEVBQ1I7WUFDRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztTQUN6RSxFQUNELEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQjtRQUNELEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzVELFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztLQUNILENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgcXVlcnksIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgdG9hc3RJbk91dCA9IHRyaWdnZXIoJ3RvYXN0SW5PdXQnLCBbXHJcbiAgdHJhbnNpdGlvbignKiA8PT4gKicsIFtcclxuICAgIHF1ZXJ5KFxyXG4gICAgICAnOmVudGVyJyxcclxuICAgICAgW1xyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgyMHB4KScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMzUwbXMgZWFzZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScgfSkpLFxyXG4gICAgICBdLFxyXG4gICAgICB7IG9wdGlvbmFsOiB0cnVlIH0sXHJcbiAgICApLFxyXG4gICAgcXVlcnkoJzpsZWF2ZScsIGFuaW1hdGUoJzQ1MG1zIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLCB7XHJcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbl0pO1xyXG4iXX0=
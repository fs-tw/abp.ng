/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/config.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PatchRouteByName {
    /**
     * @param {?} name
     * @param {?} newValue
     */
    constructor(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
}
PatchRouteByName.type = '[Config] Patch Route By Name';
if (false) {
    /** @type {?} */
    PatchRouteByName.type;
    /** @type {?} */
    PatchRouteByName.prototype.name;
    /** @type {?} */
    PatchRouteByName.prototype.newValue;
}
export class GetAppConfiguration {
}
GetAppConfiguration.type = '[Config] Get App Configuration';
if (false) {
    /** @type {?} */
    GetAppConfiguration.type;
}
/**
 * @see usage: https://github.com/abpframework/abp/pull/2425#issue-355018812
 */
export class AddRoute {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
AddRoute.type = '[Config] Add Route';
if (false) {
    /** @type {?} */
    AddRoute.type;
    /** @type {?} */
    AddRoute.prototype.payload;
}
export class SetEnvironment {
    /**
     * @param {?} environment
     */
    constructor(environment) {
        this.environment = environment;
    }
}
SetEnvironment.type = '[Config] Set Environment';
if (false) {
    /** @type {?} */
    SetEnvironment.type;
    /** @type {?} */
    SetEnvironment.prototype.environment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9jb25maWcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW1CLElBQVksRUFBUyxRQUE0QjtRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBRyxDQUFDOztBQUR4RCxxQkFBSSxHQUFHLDhCQUE4QixDQUFDOzs7SUFBdEQsc0JBQXNEOztJQUMxQyxnQ0FBbUI7O0lBQUUsb0NBQW1DOztBQUd0RSxNQUFNLE9BQU8sbUJBQW1COztBQUNkLHdCQUFJLEdBQUcsZ0NBQWdDLENBQUM7OztJQUF4RCx5QkFBd0Q7Ozs7O0FBTTFELE1BQU0sT0FBTyxRQUFROzs7O0lBRW5CLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO0lBQUcsQ0FBQzs7QUFEM0MsYUFBSSxHQUFHLG9CQUFvQixDQUFDOzs7SUFBNUMsY0FBNEM7O0lBQ2hDLDJCQUEyQzs7QUFHekQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFFekIsWUFBbUIsV0FBK0I7UUFBL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO0lBQUcsQ0FBQzs7QUFEdEMsbUJBQUksR0FBRywwQkFBMEIsQ0FBQzs7O0lBQWxELG9CQUFrRDs7SUFDdEMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGNoUm91dGVCeU5hbWUge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tDb25maWddIFBhdGNoIFJvdXRlIEJ5IE5hbWUnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBuZXdWYWx1ZTogUGFydGlhbDxBQlAuUm91dGU+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0QXBwQ29uZmlndXJhdGlvbiB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0NvbmZpZ10gR2V0IEFwcCBDb25maWd1cmF0aW9uJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBzZWUgdXNhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hYnBmcmFtZXdvcmsvYWJwL3B1bGwvMjQyNSNpc3N1ZS0zNTUwMTg4MTJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBZGRSb3V0ZSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnW0NvbmZpZ10gQWRkIFJvdXRlJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT21pdDxBQlAuUm91dGUsICdjaGlsZHJlbic+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0RW52aXJvbm1lbnQge1xyXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1tDb25maWddIFNldCBFbnZpcm9ubWVudCc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVudmlyb25tZW50OiBDb25maWcuRW52aXJvbm1lbnQpIHt9XHJcbn1cclxuIl19
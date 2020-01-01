/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/feature-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var FeatureManagement;
(function (FeatureManagement) {
    /**
     * @record
     */
    function State() { }
    FeatureManagement.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.features;
    }
    /**
     * @record
     */
    function ValueType() { }
    FeatureManagement.ValueType = ValueType;
    if (false) {
        /** @type {?} */
        ValueType.prototype.name;
        /** @type {?} */
        ValueType.prototype.properties;
        /** @type {?} */
        ValueType.prototype.validator;
    }
    /**
     * @record
     */
    function Feature() { }
    FeatureManagement.Feature = Feature;
    if (false) {
        /** @type {?} */
        Feature.prototype.name;
        /** @type {?} */
        Feature.prototype.value;
        /** @type {?|undefined} */
        Feature.prototype.description;
        /** @type {?|undefined} */
        Feature.prototype.valueType;
        /** @type {?|undefined} */
        Feature.prototype.depth;
        /** @type {?|undefined} */
        Feature.prototype.parentName;
    }
    /**
     * @record
     */
    function Features() { }
    FeatureManagement.Features = Features;
    if (false) {
        /** @type {?} */
        Features.prototype.features;
    }
    /**
     * @record
     */
    function Provider() { }
    FeatureManagement.Provider = Provider;
    if (false) {
        /** @type {?} */
        Provider.prototype.providerName;
        /** @type {?} */
        Provider.prototype.providerKey;
    }
    /**
     * @record
     */
    function FeatureManagementComponentInputs() { }
    FeatureManagement.FeatureManagementComponentInputs = FeatureManagementComponentInputs;
    if (false) {
        /** @type {?} */
        FeatureManagementComponentInputs.prototype.visible;
        /** @type {?} */
        FeatureManagementComponentInputs.prototype.providerName;
        /** @type {?} */
        FeatureManagementComponentInputs.prototype.providerKey;
    }
    /**
     * @record
     */
    function FeatureManagementComponentOutputs() { }
    FeatureManagement.FeatureManagementComponentOutputs = FeatureManagementComponentOutputs;
    if (false) {
        /** @type {?} */
        FeatureManagementComponentOutputs.prototype.visibleChange;
    }
})(FeatureManagement || (FeatureManagement = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5mZWF0dXJlLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2ZlYXR1cmUtbWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sS0FBVyxpQkFBaUIsQ0FzQ2pDO0FBdENELFdBQWlCLGlCQUFpQjs7OztJQUNoQyxvQkFFQzs7OztRQURDLHlCQUFvQjs7Ozs7SUFHdEIsd0JBSUM7Ozs7UUFIQyx5QkFBYTs7UUFDYiwrQkFBbUI7O1FBQ25CLDhCQUFrQjs7Ozs7SUFHcEIsc0JBT0M7Ozs7UUFOQyx1QkFBYTs7UUFDYix3QkFBYzs7UUFDZCw4QkFBcUI7O1FBQ3JCLDRCQUFzQjs7UUFDdEIsd0JBQWU7O1FBQ2YsNkJBQW9COzs7OztJQUd0Qix1QkFFQzs7OztRQURDLDRCQUFvQjs7Ozs7SUFHdEIsdUJBR0M7Ozs7UUFGQyxnQ0FBcUI7O1FBQ3JCLCtCQUFvQjs7Ozs7SUFHdEIsK0NBSUM7Ozs7UUFIQyxtREFBaUI7O1FBQ2pCLHdEQUE4Qjs7UUFDOUIsdURBQTZCOzs7OztJQUcvQixnREFFQzs7OztRQURDLDBEQUE4Qzs7QUFFbEQsQ0FBQyxFQXRDZ0IsaUJBQWlCLEtBQWpCLGlCQUFpQixRQXNDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRmVhdHVyZU1hbmFnZW1lbnQge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFsdWVUeXBlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByb3BlcnRpZXM6IG9iamVjdDtcclxuICAgIHZhbGlkYXRvcjogb2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIHZhbHVlVHlwZT86IFZhbHVlVHlwZTtcclxuICAgIGRlcHRoPzogbnVtYmVyO1xyXG4gICAgcGFyZW50TmFtZT86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZXMge1xyXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvdmlkZXIge1xyXG4gICAgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwcm92aWRlcktleTogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudElucHV0cyB7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgcmVhZG9ubHkgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBwcm92aWRlcktleTogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudE91dHB1dHMge1xyXG4gICAgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG4gIH1cclxufVxyXG4iXX0=
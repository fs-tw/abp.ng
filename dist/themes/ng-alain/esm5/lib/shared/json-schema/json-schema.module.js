/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/json-schema/json-schema.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
/** @type {?} */
export var SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
var JsonSchemaModule = /** @class */ (function () {
    function JsonSchemaModule(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
    JsonSchemaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: SCHEMA_THIRDS_COMPONENTS,
                    entryComponents: SCHEMA_THIRDS_COMPONENTS,
                    imports: [SharedModule, DelonFormModule.forRoot()],
                    exports: tslib_1.__spread(SCHEMA_THIRDS_COMPONENTS),
                },] }
    ];
    /** @nocollapse */
    JsonSchemaModule.ctorParameters = function () { return [
        { type: WidgetRegistry }
    ]; };
    return JsonSchemaModule;
}());
export { JsonSchemaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9qc29uLXNjaGVtYS9qc29uLXNjaGVtYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFLOUQsTUFBTSxLQUFPLHdCQUF3QixHQUFHO0FBQ3RDLGlCQUFpQjtBQUNqQixnQkFBZ0I7Q0FDakI7QUFFRDtJQU9FLDBCQUFZLGNBQThCO1FBQ3hDLDZEQUE2RDtRQUM3RCw2REFBNkQ7SUFDL0QsQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSx3QkFBd0I7b0JBQ3RDLGVBQWUsRUFBRSx3QkFBd0I7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xELE9BQU8sbUJBQU0sd0JBQXdCLENBQUM7aUJBQ3ZDOzs7O2dCQWZ5QixjQUFjOztJQXFCeEMsdUJBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcclxuXHJcbi8vIGltcG9ydCB7IFRpbnltY2VXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGlueW1jZS90aW55bWNlLndpZGdldCc7XHJcbi8vIGltcG9ydCB7IFVlZGl0b3JXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdWVkaXRvci91ZWRpdG9yLndpZGdldCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0NIRU1BX1RISVJEU19DT01QT05FTlRTID0gW1xyXG4gIC8vIFRpbnltY2VXaWRnZXQsXHJcbiAgLy8gVWVkaXRvcldpZGdldFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFNDSEVNQV9USElSRFNfQ09NUE9ORU5UUyxcclxuICBlbnRyeUNvbXBvbmVudHM6IFNDSEVNQV9USElSRFNfQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUuZm9yUm9vdCgpXSxcclxuICBleHBvcnRzOiBbLi4uU0NIRU1BX1RISVJEU19DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25TY2hlbWFNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xyXG4gICAgLy8gd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVGlueW1jZVdpZGdldC5LRVksIFRpbnltY2VXaWRnZXQpO1xyXG4gICAgLy8gd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVWVkaXRvcldpZGdldC5LRVksIFVlZGl0b3JXaWRnZXQpO1xyXG4gIH1cclxufVxyXG4iXX0=
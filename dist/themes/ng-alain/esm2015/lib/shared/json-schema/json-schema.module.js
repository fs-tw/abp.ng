/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/json-schema/json-schema.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
/** @type {?} */
export const SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
export class JsonSchemaModule {
    /**
     * @param {?} widgetRegistry
     */
    constructor(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
}
JsonSchemaModule.decorators = [
    { type: NgModule, args: [{
                declarations: SCHEMA_THIRDS_COMPONENTS,
                entryComponents: SCHEMA_THIRDS_COMPONENTS,
                imports: [SharedModule, DelonFormModule.forRoot()],
                exports: [...SCHEMA_THIRDS_COMPONENTS],
            },] }
];
/** @nocollapse */
JsonSchemaModule.ctorParameters = () => [
    { type: WidgetRegistry }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9qc29uLXNjaGVtYS9qc29uLXNjaGVtYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUs5RCxNQUFNLE9BQU8sd0JBQXdCLEdBQUc7QUFDdEMsaUJBQWlCO0FBQ2pCLGdCQUFnQjtDQUNqQjtBQVFELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBWSxjQUE4QjtRQUN4Qyw2REFBNkQ7UUFDN0QsNkRBQTZEO0lBQy9ELENBQUM7OztZQVZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsd0JBQXdCO2dCQUN0QyxlQUFlLEVBQUUsd0JBQXdCO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLHdCQUF3QixDQUFDO2FBQ3ZDOzs7O1lBZnlCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcclxuXHJcbi8vIGltcG9ydCB7IFRpbnltY2VXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGlueW1jZS90aW55bWNlLndpZGdldCc7XHJcbi8vIGltcG9ydCB7IFVlZGl0b3JXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdWVkaXRvci91ZWRpdG9yLndpZGdldCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0NIRU1BX1RISVJEU19DT01QT05FTlRTID0gW1xyXG4gIC8vIFRpbnltY2VXaWRnZXQsXHJcbiAgLy8gVWVkaXRvcldpZGdldFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFNDSEVNQV9USElSRFNfQ09NUE9ORU5UUyxcclxuICBlbnRyeUNvbXBvbmVudHM6IFNDSEVNQV9USElSRFNfQ09NUE9ORU5UUyxcclxuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUuZm9yUm9vdCgpXSxcclxuICBleHBvcnRzOiBbLi4uU0NIRU1BX1RISVJEU19DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25TY2hlbWFNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xyXG4gICAgLy8gd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVGlueW1jZVdpZGdldC5LRVksIFRpbnltY2VXaWRnZXQpO1xyXG4gICAgLy8gd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVWVkaXRvcldpZGdldC5LRVksIFVlZGl0b3JXaWRnZXQpO1xyXG4gIH1cclxufVxyXG4iXX0=
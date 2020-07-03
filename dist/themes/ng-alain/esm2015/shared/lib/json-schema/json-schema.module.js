import { NgModule } from '@angular/core';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { SharedModule } from '../shared.module';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
export const SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
export class JsonSchemaModule {
    constructor(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
}
JsonSchemaModule.ɵmod = i0.ɵɵdefineNgModule({ type: JsonSchemaModule });
JsonSchemaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function JsonSchemaModule_Factory(t) { return new (t || JsonSchemaModule)(i0.ɵɵinject(i1.WidgetRegistry)); }, imports: [[SharedModule, DelonFormModule.forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(JsonSchemaModule, { imports: [SharedModule, i1.DelonFormModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonSchemaModule, [{
        type: NgModule,
        args: [{
                declarations: SCHEMA_THIRDS_COMPONENTS,
                entryComponents: SCHEMA_THIRDS_COMPONENTS,
                imports: [SharedModule, DelonFormModule.forRoot()],
                exports: [...SCHEMA_THIRDS_COMPONENTS],
            }]
    }], function () { return [{ type: i1.WidgetRegistry }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL3NoYXJlZC9zcmMvbGliL2pzb24tc2NoZW1hL2pzb24tc2NoZW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWhELG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFFcEUsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7QUFDdEMsaUJBQWlCO0FBQ2pCLGdCQUFnQjtDQUNqQixDQUFDO0FBUUYsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFZLGNBQThCO1FBQ3hDLDZEQUE2RDtRQUM3RCw2REFBNkQ7SUFDL0QsQ0FBQzs7b0RBSlUsZ0JBQWdCOytHQUFoQixnQkFBZ0IsZ0RBSGxCLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3RkFHdkMsZ0JBQWdCLGNBSGpCLFlBQVk7a0RBR1gsZ0JBQWdCO2NBTjVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsd0JBQXdCO2dCQUN0QyxlQUFlLEVBQUUsd0JBQXdCO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLHdCQUF3QixDQUFDO2FBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkLm1vZHVsZSc7XHJcblxyXG4vLyBpbXBvcnQgeyBUaW55bWNlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RpbnltY2UvdGlueW1jZS53aWRnZXQnO1xyXG4vLyBpbXBvcnQgeyBVZWRpdG9yV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3VlZGl0b3IvdWVkaXRvci53aWRnZXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNDSEVNQV9USElSRFNfQ09NUE9ORU5UUyA9IFtcclxuICAvLyBUaW55bWNlV2lkZ2V0LFxyXG4gIC8vIFVlZGl0b3JXaWRnZXRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBTQ0hFTUFfVEhJUkRTX0NPTVBPTkVOVFMsXHJcbiAgZW50cnlDb21wb25lbnRzOiBTQ0hFTUFfVEhJUkRTX0NPTVBPTkVOVFMsXHJcbiAgaW1wb3J0czogW1NoYXJlZE1vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLmZvclJvb3QoKV0sXHJcbiAgZXhwb3J0czogWy4uLlNDSEVNQV9USElSRFNfQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uU2NoZW1hTW9kdWxlIHtcclxuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcclxuICAgIC8vIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFRpbnltY2VXaWRnZXQuS0VZLCBUaW55bWNlV2lkZ2V0KTtcclxuICAgIC8vIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFVlZGl0b3JXaWRnZXQuS0VZLCBVZWRpdG9yV2lkZ2V0KTtcclxuICB9XHJcbn1cclxuIl19
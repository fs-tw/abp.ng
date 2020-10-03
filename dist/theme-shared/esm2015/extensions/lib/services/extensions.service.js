import { Injectable } from '@angular/core';
import { EntityActionsFactory } from '../models/entity-actions';
import { EntityPropsFactory } from '../models/entity-props';
import { CreateFormPropsFactory, EditFormPropsFactory } from '../models/form-props';
import { ToolbarActionsFactory } from '../models/toolbar-actions';
import * as i0 from "@angular/core";
export class ExtensionsService {
    constructor() {
        this.entityActions = new EntityActionsFactory();
        this.toolbarActions = new ToolbarActionsFactory();
        this.entityProps = new EntityPropsFactory();
        this.createFormProps = new CreateFormPropsFactory();
        this.editFormProps = new EditFormPropsFactory();
    }
}
ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
ExtensionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9zZXJ2aWNlcy9leHRlbnNpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFLbEUsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUlXLGtCQUFhLEdBQUcsSUFBSSxvQkFBb0IsRUFBSyxDQUFDO1FBQzlDLG1CQUFjLEdBQUcsSUFBSSxxQkFBcUIsRUFBTyxDQUFDO1FBQ2xELGdCQUFXLEdBQUcsSUFBSSxrQkFBa0IsRUFBSyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsSUFBSSxzQkFBc0IsRUFBSyxDQUFDO1FBQ2xELGtCQUFhLEdBQUcsSUFBSSxvQkFBb0IsRUFBSyxDQUFDO0tBQ3hEOzs7O1lBVEEsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnRpdHlBY3Rpb25zRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHktYWN0aW9ucyc7XHJcbmltcG9ydCB7IEVudGl0eVByb3BzRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHktcHJvcHMnO1xyXG5pbXBvcnQgeyBDcmVhdGVGb3JtUHJvcHNGYWN0b3J5LCBFZGl0Rm9ybVByb3BzRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9mb3JtLXByb3BzJztcclxuaW1wb3J0IHsgVG9vbGJhckFjdGlvbnNGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL3Rvb2xiYXItYWN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc1NlcnZpY2U8UiA9IGFueT4ge1xyXG4gIHJlYWRvbmx5IGVudGl0eUFjdGlvbnMgPSBuZXcgRW50aXR5QWN0aW9uc0ZhY3Rvcnk8Uj4oKTtcclxuICByZWFkb25seSB0b29sYmFyQWN0aW9ucyA9IG5ldyBUb29sYmFyQWN0aW9uc0ZhY3Rvcnk8UltdPigpO1xyXG4gIHJlYWRvbmx5IGVudGl0eVByb3BzID0gbmV3IEVudGl0eVByb3BzRmFjdG9yeTxSPigpO1xyXG4gIHJlYWRvbmx5IGNyZWF0ZUZvcm1Qcm9wcyA9IG5ldyBDcmVhdGVGb3JtUHJvcHNGYWN0b3J5PFI+KCk7XHJcbiAgcmVhZG9ubHkgZWRpdEZvcm1Qcm9wcyA9IG5ldyBFZGl0Rm9ybVByb3BzRmFjdG9yeTxSPigpO1xyXG59XHJcbiJdfQ==
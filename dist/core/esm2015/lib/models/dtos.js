/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/dtos.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class ListResultDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
if (false) {
    /** @type {?} */
    ListResultDto.prototype.items;
}
/**
 * @template T
 */
export class PagedResultDto extends ListResultDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    PagedResultDto.prototype.totalCount;
}
export class LimitedResultRequestDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        this.maxResultCount = 10;
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
if (false) {
    /** @type {?} */
    LimitedResultRequestDto.prototype.maxResultCount;
}
export class PagedResultRequestDto extends LimitedResultRequestDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    PagedResultRequestDto.prototype.skipCount;
}
export class PagedAndSortedResultRequestDto extends PagedResultRequestDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    PagedAndSortedResultRequestDto.prototype.sorting;
}
/**
 * @template TKey
 */
export class EntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
if (false) {
    /** @type {?} */
    EntityDto.prototype.id;
}
/**
 * @template TPrimaryKey
 */
export class CreationAuditedEntityDto extends EntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creationTime;
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creatorId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
export class CreationAuditedEntityWithUserDto extends CreationAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    CreationAuditedEntityWithUserDto.prototype.creator;
}
/**
 * @template TPrimaryKey
 */
export class AuditedEntityDto extends CreationAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    AuditedEntityDto.prototype.lastModificationTime;
    /** @type {?} */
    AuditedEntityDto.prototype.lastModifierId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
export class AuditedEntityWithUserDto extends AuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.lastModifier;
}
/**
 * @template TPrimaryKey
 */
export class FullAuditedEntityDto extends AuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    FullAuditedEntityDto.prototype.isDeleted;
    /** @type {?} */
    FullAuditedEntityDto.prototype.deleterId;
    /** @type {?} */
    FullAuditedEntityDto.prototype.deletionTime;
}
/**
 * @template TUserDto, TPrimaryKey
 */
export class FullAuditedEntityWithUserDto extends FullAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.lastModifier;
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.deleter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sT0FBTyxhQUFhOzs7O0lBR3hCLFlBQVksZ0JBQTJDLEVBQUU7UUFDdkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7OztJQVRDLDhCQUFZOzs7OztBQVdkLE1BQU0sT0FBTyxjQUFrQixTQUFRLGFBQWdCOzs7O0lBR3JELFlBQVksZ0JBQTRDLEVBQUU7UUFDeEQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBTEMsb0NBQW9COztBQU90QixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQVksZ0JBQWtELEVBQUU7UUFGaEUsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFHbEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7OztJQVRDLGlEQUFvQjs7QUFXdEIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHVCQUF1Qjs7OztJQUdoRSxZQUFZLGdCQUFnRCxFQUFFO1FBQzVELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQUxDLDBDQUFtQjs7QUFPckIsTUFBTSxPQUFPLDhCQUErQixTQUFRLHFCQUFxQjs7OztJQUd2RSxZQUFZLGdCQUF5RCxFQUFFO1FBQ3JFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQUxDLGlEQUFpQjs7Ozs7QUFPbkIsTUFBTSxPQUFPLFNBQVM7Ozs7SUFHcEIsWUFBWSxnQkFBMEMsRUFBRTtRQUN0RCxLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtZQUMvQixJQUFJLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7Q0FDRjs7O0lBVEMsdUJBQVU7Ozs7O0FBV1osTUFBTSxPQUFPLHdCQUErQyxTQUFRLFNBQXNCOzs7O0lBSXhGLFlBQVksZ0JBQWdFLEVBQUU7UUFDNUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBTkMsZ0RBQTZCOztJQUM3Qiw2Q0FBbUI7Ozs7O0FBT3JCLE1BQU0sT0FBTyxnQ0FHWCxTQUFRLHdCQUFxQzs7OztJQUc3QyxZQUNFLGdCQUFrRixFQUFFO1FBRXBGLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQVBDLG1EQUFtQjs7Ozs7QUFTckIsTUFBTSxPQUFPLGdCQUF1QyxTQUFRLHdCQUFxQzs7OztJQUkvRixZQUFZLGdCQUF3RCxFQUFFO1FBQ3BFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQU5DLGdEQUFxQzs7SUFDckMsMENBQXdCOzs7OztBQU8xQixNQUFNLE9BQU8sd0JBQXlELFNBQVEsZ0JBRTdFOzs7O0lBSUMsWUFBWSxnQkFBMEUsRUFBRTtRQUN0RixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7SUFOQywyQ0FBbUI7O0lBQ25CLGdEQUF3Qjs7Ozs7QUFPMUIsTUFBTSxPQUFPLG9CQUEyQyxTQUFRLGdCQUE2Qjs7OztJQUszRixZQUFZLGdCQUE0RCxFQUFFO1FBQ3hFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQVBDLHlDQUFvQjs7SUFDcEIseUNBQW1COztJQUNuQiw0Q0FBNkI7Ozs7O0FBTy9CLE1BQU0sT0FBTyw0QkFHWCxTQUFRLG9CQUFpQzs7OztJQUt6QyxZQUFZLGdCQUE4RSxFQUFFO1FBQzFGLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQVBDLCtDQUFtQjs7SUFDbkIsb0RBQXdCOztJQUN4QiwrQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGlzdFJlc3VsdER0bzxUPiB7XHJcbiAgaXRlbXM/OiBUW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8TGlzdFJlc3VsdER0bzxUPj4gPSB7fSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbFZhbHVlcykge1xyXG4gICAgICBpZiAoaW5pdGlhbFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpc1trZXldID0gaW5pdGlhbFZhbHVlc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZWRSZXN1bHREdG88VD4gZXh0ZW5kcyBMaXN0UmVzdWx0RHRvPFQ+IHtcclxuICB0b3RhbENvdW50PzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPFBhZ2VkUmVzdWx0RHRvPFQ+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW1pdGVkUmVzdWx0UmVxdWVzdER0byB7XHJcbiAgbWF4UmVzdWx0Q291bnQgPSAxMDtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxMaW1pdGVkUmVzdWx0UmVxdWVzdER0bz4gPSB7fSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbFZhbHVlcykge1xyXG4gICAgICBpZiAoaW5pdGlhbFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpc1trZXldID0gaW5pdGlhbFZhbHVlc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZWRSZXN1bHRSZXF1ZXN0RHRvIGV4dGVuZHMgTGltaXRlZFJlc3VsdFJlcXVlc3REdG8ge1xyXG4gIHNraXBDb3VudD86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxQYWdlZFJlc3VsdFJlcXVlc3REdG8+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VkQW5kU29ydGVkUmVzdWx0UmVxdWVzdER0byBleHRlbmRzIFBhZ2VkUmVzdWx0UmVxdWVzdER0byB7XHJcbiAgc29ydGluZz86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxQYWdlZEFuZFNvcnRlZFJlc3VsdFJlcXVlc3REdG8+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eUR0bzxUS2V5ID0gc3RyaW5nPiB7XHJcbiAgaWQ/OiBUS2V5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEVudGl0eUR0bzxUS2V5Pj4gPSB7fSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5pdGlhbFZhbHVlcykge1xyXG4gICAgICBpZiAoaW5pdGlhbFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpc1trZXldID0gaW5pdGlhbFZhbHVlc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5ID0gc3RyaW5nPiBleHRlbmRzIEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGNyZWF0aW9uVGltZT86IHN0cmluZyB8IERhdGU7XHJcbiAgY3JlYXRvcklkPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPENyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0aW9uQXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFxyXG4gIFRVc2VyRHRvLFxyXG4gIFRQcmltYXJ5S2V5ID0gc3RyaW5nXHJcbj4gZXh0ZW5kcyBDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdG9yPzogVFVzZXJEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaW5pdGlhbFZhbHVlczogUGFydGlhbDxDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUVXNlckR0bywgVFByaW1hcnlLZXk+PiA9IHt9LFxyXG4gICkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBsYXN0TW9kaWZpY2F0aW9uVGltZT86IHN0cmluZyB8IERhdGU7XHJcbiAgbGFzdE1vZGlmaWVySWQ/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8QXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUVXNlckR0bywgVFByaW1hcnlLZXkgPSBzdHJpbmc+IGV4dGVuZHMgQXVkaXRlZEVudGl0eUR0bzxcclxuICBUUHJpbWFyeUtleVxyXG4+IHtcclxuICBjcmVhdG9yPzogVFVzZXJEdG87XHJcbiAgbGFzdE1vZGlmaWVyPzogVFVzZXJEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8QXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFRVc2VyRHRvLCBUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bGxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5ID0gc3RyaW5nPiBleHRlbmRzIEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBpc0RlbGV0ZWQ/OiBib29sZWFuO1xyXG4gIGRlbGV0ZXJJZD86IHN0cmluZztcclxuICBkZWxldGlvblRpbWU/OiBEYXRlIHwgc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEZ1bGxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnVsbEF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxcclxuICBUVXNlckR0byxcclxuICBUUHJpbWFyeUtleSA9IHN0cmluZ1xyXG4+IGV4dGVuZHMgRnVsbEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdG9yPzogVFVzZXJEdG87XHJcbiAgbGFzdE1vZGlmaWVyPzogVFVzZXJEdG87XHJcbiAgZGVsZXRlcj86IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFVzZXJEdG8sIFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
export class ExtensibleObject {
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
    ExtensibleObject.prototype.extraProperties;
}
/**
 * @template TKey
 */
export class ExtensibleEntityDto extends ExtensibleObject {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleEntityDto.prototype.id;
}
/**
 * @template TPrimaryKey
 */
export class ExtensibleCreationAuditedEntityDto extends ExtensibleEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleCreationAuditedEntityDto.prototype.creationTime;
    /** @type {?} */
    ExtensibleCreationAuditedEntityDto.prototype.creatorId;
}
/**
 * @template TPrimaryKey
 */
export class ExtensibleAuditedEntityDto extends ExtensibleCreationAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleAuditedEntityDto.prototype.lastModificationTime;
    /** @type {?} */
    ExtensibleAuditedEntityDto.prototype.lastModifierId;
}
/**
 * @template TPrimaryKey, TUserDto
 */
export class ExtensibleAuditedEntityWithUserDto extends ExtensibleAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    ExtensibleAuditedEntityWithUserDto.prototype.lastModifier;
}
/**
 * @template TPrimaryKey, TUserDto
 */
export class ExtensibleCreationAuditedEntityWithUserDto extends ExtensibleCreationAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleCreationAuditedEntityWithUserDto.prototype.creator;
}
/**
 * @template TPrimaryKey
 */
export class ExtensibleFullAuditedEntityDto extends ExtensibleAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleFullAuditedEntityDto.prototype.isDeleted;
    /** @type {?} */
    ExtensibleFullAuditedEntityDto.prototype.deleterId;
    /** @type {?} */
    ExtensibleFullAuditedEntityDto.prototype.deletionTime;
}
/**
 * @template TPrimaryKey, TUserDto
 */
export class ExtensibleFullAuditedEntityWithUserDto extends ExtensibleFullAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    ExtensibleFullAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    ExtensibleFullAuditedEntityWithUserDto.prototype.lastModifier;
    /** @type {?} */
    ExtensibleFullAuditedEntityWithUserDto.prototype.deleter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sT0FBTyxhQUFhOzs7O0lBR3hCLFlBQVksZ0JBQTJDLEVBQUU7UUFDdkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7OztJQVRDLDhCQUFZOzs7OztBQVdkLE1BQU0sT0FBTyxjQUFrQixTQUFRLGFBQWdCOzs7O0lBR3JELFlBQVksZ0JBQTRDLEVBQUU7UUFDeEQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBTEMsb0NBQW9COztBQU90QixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQVksZ0JBQWtELEVBQUU7UUFGaEUsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFHbEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7OztJQVRDLGlEQUFvQjs7QUFXdEIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHVCQUF1Qjs7OztJQUdoRSxZQUFZLGdCQUFnRCxFQUFFO1FBQzVELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQUxDLDBDQUFtQjs7QUFPckIsTUFBTSxPQUFPLDhCQUErQixTQUFRLHFCQUFxQjs7OztJQUd2RSxZ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LE9BQU8sa0NBR1gsU0FBUSwwQkFBdUM7Ozs7SUFJL0MsWUFBWSxnQkFBMEUsRUFBRTtRQUN0RixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7SUFOQyxxREFBa0I7O0lBQ2xCLDBEQUF1Qjs7Ozs7QUFPekIsTUFBTSxPQUFPLDBDQUdYLFNBQVEsa0NBQStDOzs7O0lBR3ZELFlBQ0UsZ0JBQWtGLEVBQUU7UUFFcEYsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBUEMsNkRBQWtCOzs7OztBQVNwQixNQUFNLE9BQU8sOEJBRVgsU0FBUSwwQkFBdUM7Ozs7SUFLL0MsWUFBWSxnQkFBc0UsRUFBRTtRQUNsRixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7SUFQQyxtREFBbUI7O0lBQ25CLG1EQUFtQjs7SUFDbkIsc0RBQTRCOzs7OztBQU85QixNQUFNLE9BQU8sc0NBR1gsU0FBUSw4QkFBMkM7Ozs7SUFLbkQsWUFBWSxnQkFBOEUsRUFBRTtRQUMxRixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGOzs7SUFQQyx5REFBa0I7O0lBQ2xCLDhEQUF1Qjs7SUFDdkIseURBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RSZXN1bHREdG88VD4ge1xyXG4gIGl0ZW1zPzogVFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPExpc3RSZXN1bHREdG88VD4+ID0ge30pIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluaXRpYWxWYWx1ZXMpIHtcclxuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXNba2V5XSA9IGluaXRpYWxWYWx1ZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VkUmVzdWx0RHRvPFQ+IGV4dGVuZHMgTGlzdFJlc3VsdER0bzxUPiB7XHJcbiAgdG90YWxDb3VudD86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxQYWdlZFJlc3VsdER0bzxUPj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGltaXRlZFJlc3VsdFJlcXVlc3REdG8ge1xyXG4gIG1heFJlc3VsdENvdW50ID0gMTA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8TGltaXRlZFJlc3VsdFJlcXVlc3REdG8+ID0ge30pIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluaXRpYWxWYWx1ZXMpIHtcclxuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXNba2V5XSA9IGluaXRpYWxWYWx1ZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VkUmVzdWx0UmVxdWVzdER0byBleHRlbmRzIExpbWl0ZWRSZXN1bHRSZXF1ZXN0RHRvIHtcclxuICBza2lwQ291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8UGFnZWRSZXN1bHRSZXF1ZXN0RHRvPiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlZEFuZFNvcnRlZFJlc3VsdFJlcXVlc3REdG8gZXh0ZW5kcyBQYWdlZFJlc3VsdFJlcXVlc3REdG8ge1xyXG4gIHNvcnRpbmc/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8UGFnZWRBbmRTb3J0ZWRSZXN1bHRSZXF1ZXN0RHRvPiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlEdG88VEtleSA9IHN0cmluZz4ge1xyXG4gIGlkPzogVEtleTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxFbnRpdHlEdG88VEtleT4+ID0ge30pIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluaXRpYWxWYWx1ZXMpIHtcclxuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXNba2V5XSA9IGluaXRpYWxWYWx1ZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdGlvblRpbWU/OiBzdHJpbmcgfCBEYXRlO1xyXG4gIGNyZWF0b3JJZD86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxcclxuICBUVXNlckR0byxcclxuICBUUHJpbWFyeUtleSA9IHN0cmluZ1xyXG4+IGV4dGVuZHMgQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgY3JlYXRvcj86IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8Q3JlYXRpb25BdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFVzZXJEdG8sIFRQcmltYXJ5S2V5Pj4gPSB7fSxcclxuICApIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXkgPSBzdHJpbmc+IGV4dGVuZHMgQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBzdHJpbmcgfCBEYXRlO1xyXG4gIGxhc3RNb2RpZmllcklkPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFVzZXJEdG8sIFRQcmltYXJ5S2V5ID0gc3RyaW5nPiBleHRlbmRzIEF1ZGl0ZWRFbnRpdHlEdG88XHJcbiAgVFByaW1hcnlLZXlcclxuPiB7XHJcbiAgY3JlYXRvcj86IFRVc2VyRHRvO1xyXG4gIGxhc3RNb2RpZmllcj86IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUVXNlckR0bywgVFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgaXNEZWxldGVkPzogYm9vbGVhbjtcclxuICBkZWxldGVySWQ/OiBzdHJpbmc7XHJcbiAgZGVsZXRpb25UaW1lPzogRGF0ZSB8IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFVzZXJEdG8sXHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmdcclxuPiBleHRlbmRzIEZ1bGxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgY3JlYXRvcj86IFRVc2VyRHRvO1xyXG4gIGxhc3RNb2RpZmllcj86IFRVc2VyRHRvO1xyXG4gIGRlbGV0ZXI/OiBUVXNlckR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxGdWxsQXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFRVc2VyRHRvLCBUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVPYmplY3Qge1xyXG4gIGV4dHJhUHJvcGVydGllczogQUJQLkRpY3Rpb25hcnk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxFeHRlbnNpYmxlT2JqZWN0PiA9IHt9KSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsVmFsdWVzKSB7XHJcbiAgICAgIGlmIChpbml0aWFsVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBpbml0aWFsVmFsdWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRW50aXR5RHRvPFRLZXkgPSBzdHJpbmc+IGV4dGVuZHMgRXh0ZW5zaWJsZU9iamVjdCB7XHJcbiAgaWQ6IFRLZXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUVudGl0eUR0bzxUS2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUNyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBFeHRlbnNpYmxlRW50aXR5RHRvPFxyXG4gIFRQcmltYXJ5S2V5XHJcbj4ge1xyXG4gIGNyZWF0aW9uVGltZTogRGF0ZSB8IHN0cmluZztcclxuICBjcmVhdG9ySWQ/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUNyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVBdWRpdGVkRW50aXR5RHRvPFxyXG4gIFRQcmltYXJ5S2V5ID0gc3RyaW5nXHJcbj4gZXh0ZW5kcyBFeHRlbnNpYmxlQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBEYXRlIHwgc3RyaW5nO1xyXG4gIGxhc3RNb2RpZmllcklkPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEV4dGVuc2libGVBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxcclxuICBUUHJpbWFyeUtleSA9IHN0cmluZyxcclxuICBUVXNlckR0byA9IGFueVxyXG4+IGV4dGVuZHMgRXh0ZW5zaWJsZUF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdG9yOiBUVXNlckR0bztcclxuICBsYXN0TW9kaWZpZXI6IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEV4dGVuc2libGVBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlQ3JlYXRpb25BdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmcsXHJcbiAgVFVzZXJEdG8gPSBhbnlcclxuPiBleHRlbmRzIEV4dGVuc2libGVDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdG9yOiBUVXNlckR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEV4dGVuc2libGVDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUUHJpbWFyeUtleT4+ID0ge30sXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRnVsbEF1ZGl0ZWRFbnRpdHlEdG88XHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmdcclxuPiBleHRlbmRzIEV4dGVuc2libGVBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgaXNEZWxldGVkOiBib29sZWFuO1xyXG4gIGRlbGV0ZXJJZD86IHN0cmluZztcclxuICBkZWxldGlvblRpbWU6IERhdGUgfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUZ1bGxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmcsXHJcbiAgVFVzZXJEdG8gPSBhbnlcclxuPiBleHRlbmRzIEV4dGVuc2libGVGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGNyZWF0b3I6IFRVc2VyRHRvO1xyXG4gIGxhc3RNb2RpZmllcjogVFVzZXJEdG87XHJcbiAgZGVsZXRlcjogVFVzZXJEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuIl19
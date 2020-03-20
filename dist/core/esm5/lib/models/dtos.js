/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/dtos.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @template T
 */
var /**
 * @template T
 */
ListResultDto = /** @class */ (function () {
    function ListResultDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return ListResultDto;
}());
/**
 * @template T
 */
export { ListResultDto };
if (false) {
    /** @type {?} */
    ListResultDto.prototype.items;
}
/**
 * @template T
 */
var /**
 * @template T
 */
PagedResultDto = /** @class */ (function (_super) {
    tslib_1.__extends(PagedResultDto, _super);
    function PagedResultDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return PagedResultDto;
}(ListResultDto));
/**
 * @template T
 */
export { PagedResultDto };
if (false) {
    /** @type {?} */
    PagedResultDto.prototype.totalCount;
}
var LimitedResultRequestDto = /** @class */ (function () {
    function LimitedResultRequestDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        this.maxResultCount = 10;
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return LimitedResultRequestDto;
}());
export { LimitedResultRequestDto };
if (false) {
    /** @type {?} */
    LimitedResultRequestDto.prototype.maxResultCount;
}
var PagedResultRequestDto = /** @class */ (function (_super) {
    tslib_1.__extends(PagedResultRequestDto, _super);
    function PagedResultRequestDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return PagedResultRequestDto;
}(LimitedResultRequestDto));
export { PagedResultRequestDto };
if (false) {
    /** @type {?} */
    PagedResultRequestDto.prototype.skipCount;
}
var PagedAndSortedResultRequestDto = /** @class */ (function (_super) {
    tslib_1.__extends(PagedAndSortedResultRequestDto, _super);
    function PagedAndSortedResultRequestDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return PagedAndSortedResultRequestDto;
}(PagedResultRequestDto));
export { PagedAndSortedResultRequestDto };
if (false) {
    /** @type {?} */
    PagedAndSortedResultRequestDto.prototype.sorting;
}
/**
 * @template TKey
 */
var /**
 * @template TKey
 */
EntityDto = /** @class */ (function () {
    function EntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return EntityDto;
}());
/**
 * @template TKey
 */
export { EntityDto };
if (false) {
    /** @type {?} */
    EntityDto.prototype.id;
}
/**
 * @template TPrimaryKey
 */
var /**
 * @template TPrimaryKey
 */
CreationAuditedEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(CreationAuditedEntityDto, _super);
    function CreationAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return CreationAuditedEntityDto;
}(EntityDto));
/**
 * @template TPrimaryKey
 */
export { CreationAuditedEntityDto };
if (false) {
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creationTime;
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creatorId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
var /**
 * @template TUserDto, TPrimaryKey
 */
CreationAuditedEntityWithUserDto = /** @class */ (function (_super) {
    tslib_1.__extends(CreationAuditedEntityWithUserDto, _super);
    function CreationAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return CreationAuditedEntityWithUserDto;
}(CreationAuditedEntityDto));
/**
 * @template TUserDto, TPrimaryKey
 */
export { CreationAuditedEntityWithUserDto };
if (false) {
    /** @type {?} */
    CreationAuditedEntityWithUserDto.prototype.creator;
}
/**
 * @template TPrimaryKey
 */
var /**
 * @template TPrimaryKey
 */
AuditedEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(AuditedEntityDto, _super);
    function AuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return AuditedEntityDto;
}(CreationAuditedEntityDto));
/**
 * @template TPrimaryKey
 */
export { AuditedEntityDto };
if (false) {
    /** @type {?} */
    AuditedEntityDto.prototype.lastModificationTime;
    /** @type {?} */
    AuditedEntityDto.prototype.lastModifierId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
var /**
 * @template TUserDto, TPrimaryKey
 */
AuditedEntityWithUserDto = /** @class */ (function (_super) {
    tslib_1.__extends(AuditedEntityWithUserDto, _super);
    function AuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return AuditedEntityWithUserDto;
}(AuditedEntityDto));
/**
 * @template TUserDto, TPrimaryKey
 */
export { AuditedEntityWithUserDto };
if (false) {
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.lastModifier;
}
/**
 * @template TPrimaryKey
 */
var /**
 * @template TPrimaryKey
 */
FullAuditedEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(FullAuditedEntityDto, _super);
    function FullAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return FullAuditedEntityDto;
}(AuditedEntityDto));
/**
 * @template TPrimaryKey
 */
export { FullAuditedEntityDto };
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
var /**
 * @template TUserDto, TPrimaryKey
 */
FullAuditedEntityWithUserDto = /** @class */ (function (_super) {
    tslib_1.__extends(FullAuditedEntityWithUserDto, _super);
    function FullAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return FullAuditedEntityWithUserDto;
}(FullAuditedEntityDto));
/**
 * @template TUserDto, TPrimaryKey
 */
export { FullAuditedEntityWithUserDto };
if (false) {
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.lastModifier;
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.deleter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQUdFLHVCQUFZLGFBQTZDO1FBQTdDLDhCQUFBLEVBQUEsa0JBQTZDO1FBQ3ZELEtBQUssSUFBTSxHQUFHLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7SUFUQyw4QkFBWTs7Ozs7QUFXZDs7OztJQUF1QywwQ0FBZ0I7SUFHckQsd0JBQVksYUFBOEM7UUFBOUMsOEJBQUEsRUFBQSxrQkFBOEM7ZUFDeEQsa0JBQU0sYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFORCxDQUF1QyxhQUFhLEdBTW5EOzs7Ozs7O0lBTEMsb0NBQW9COztBQU90QjtJQUdFLGlDQUFZLGFBQW9EO1FBQXBELDhCQUFBLEVBQUEsa0JBQW9EO1FBRmhFLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBR2xCLEtBQUssSUFBTSxHQUFHLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQyxpREFBb0I7O0FBV3RCO0lBQTJDLGlEQUF1QjtJQUdoRSwrQkFBWSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLGtCQUFrRDtlQUM1RCxrQkFBTSxhQUFhLENBQUM7SUFDdEIsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTJDLHVCQUF1QixHQU1qRTs7OztJQUxDLDBDQUFtQjs7QUFPckI7SUFBb0QsMERBQXFCO0lBR3ZFLHdDQUFZLGFBQTJEO1FBQTNELDhCQUFBLEVBQUEsa0JBQTJEO2VBQ3JFLGtCQUFNLGFBQWEsQ0FBQztJQUN0QixDQUFDO0lBQ0gscUNBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBb0QscUJBQXFCLEdBTXhFOzs7O0lBTEMsaURBQWlCOzs7OztBQU9uQjs7OztJQUdFLG1CQUFZLGFBQTRDO1FBQTVDLDhCQUFBLEVBQUEsa0JBQTRDO1FBQ3RELEtBQUssSUFBTSxHQUFHLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7SUFUQyx1QkFBVTs7Ozs7QUFXWjs7OztJQUFvRSxvREFBc0I7SUFJeEYsa0NBQVksYUFBa0U7UUFBbEUsOEJBQUEsRUFBQSxrQkFBa0U7ZUFDNUUsa0JBQU0sYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFQRCxDQUFvRSxTQUFTLEdBTzVFOzs7Ozs7O0lBTkMsZ0RBQTZCOztJQUM3Qiw2Q0FBbUI7Ozs7O0FBT3JCOzs7O0lBR1UsNERBQXFDO0lBRzdDLDBDQUNFLGFBQW9GO1FBQXBGLDhCQUFBLEVBQUEsa0JBQW9GO2VBRXBGLGtCQUFNLGFBQWEsQ0FBQztJQUN0QixDQUFDO0lBQ0gsdUNBQUM7QUFBRCxDQUFDLEFBWEQsQ0FHVSx3QkFBd0IsR0FRakM7Ozs7Ozs7SUFQQyxtREFBbUI7Ozs7O0FBU3JCOzs7O0lBQTRELDRDQUFxQztJQUkvRiwwQkFBWSxhQUEwRDtRQUExRCw4QkFBQSxFQUFBLGtCQUEwRDtlQUNwRSxrQkFBTSxhQUFhLENBQUM7SUFDdEIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQVBELENBQTRELHdCQUF3QixHQU9uRjs7Ozs7OztJQU5DLGdEQUFxQzs7SUFDckMsMENBQXdCOzs7OztBQU8xQjs7OztJQUE4RSxvREFFN0U7SUFJQyxrQ0FBWSxhQUE0RTtRQUE1RSw4QkFBQSxFQUFBLGtCQUE0RTtlQUN0RixrQkFBTSxhQUFhLENBQUM7SUFDdEIsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQVRELENBQThFLGdCQUFnQixHQVM3Rjs7Ozs7OztJQU5DLDJDQUFtQjs7SUFDbkIsZ0RBQXdCOzs7OztBQU8xQjs7OztJQUFnRSxnREFBNkI7SUFLM0YsOEJBQVksYUFBOEQ7UUFBOUQsOEJBQUEsRUFBQSxrQkFBOEQ7ZUFDeEUsa0JBQU0sYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFSRCxDQUFnRSxnQkFBZ0IsR0FRL0U7Ozs7Ozs7SUFQQyx5Q0FBb0I7O0lBQ3BCLHlDQUFtQjs7SUFDbkIsNENBQTZCOzs7OztBQU8vQjs7OztJQUdVLHdEQUFpQztJQUt6QyxzQ0FBWSxhQUFnRjtRQUFoRiw4QkFBQSxFQUFBLGtCQUFnRjtlQUMxRixrQkFBTSxhQUFhLENBQUM7SUFDdEIsQ0FBQztJQUNILG1DQUFDO0FBQUQsQ0FBQyxBQVhELENBR1Usb0JBQW9CLEdBUTdCOzs7Ozs7O0lBUEMsK0NBQW1COztJQUNuQixvREFBd0I7O0lBQ3hCLCtDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMaXN0UmVzdWx0RHRvPFQ+IHtcclxuICBpdGVtcz86IFRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxMaXN0UmVzdWx0RHRvPFQ+PiA9IHt9KSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsVmFsdWVzKSB7XHJcbiAgICAgIGlmIChpbml0aWFsVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBpbml0aWFsVmFsdWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlZFJlc3VsdER0bzxUPiBleHRlbmRzIExpc3RSZXN1bHREdG88VD4ge1xyXG4gIHRvdGFsQ291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8UGFnZWRSZXN1bHREdG88VD4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbWl0ZWRSZXN1bHRSZXF1ZXN0RHRvIHtcclxuICBtYXhSZXN1bHRDb3VudCA9IDEwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPExpbWl0ZWRSZXN1bHRSZXF1ZXN0RHRvPiA9IHt9KSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsVmFsdWVzKSB7XHJcbiAgICAgIGlmIChpbml0aWFsVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBpbml0aWFsVmFsdWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlZFJlc3VsdFJlcXVlc3REdG8gZXh0ZW5kcyBMaW1pdGVkUmVzdWx0UmVxdWVzdER0byB7XHJcbiAgc2tpcENvdW50PzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPFBhZ2VkUmVzdWx0UmVxdWVzdER0bz4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZWRBbmRTb3J0ZWRSZXN1bHRSZXF1ZXN0RHRvIGV4dGVuZHMgUGFnZWRSZXN1bHRSZXF1ZXN0RHRvIHtcclxuICBzb3J0aW5nPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPFBhZ2VkQW5kU29ydGVkUmVzdWx0UmVxdWVzdER0bz4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5RHRvPFRLZXkgPSBzdHJpbmc+IHtcclxuICBpZD86IFRLZXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RW50aXR5RHRvPFRLZXk+PiA9IHt9KSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsVmFsdWVzKSB7XHJcbiAgICAgIGlmIChpbml0aWFsVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBpbml0aWFsVmFsdWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXkgPSBzdHJpbmc+IGV4dGVuZHMgRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgY3JlYXRpb25UaW1lPzogc3RyaW5nIHwgRGF0ZTtcclxuICBjcmVhdG9ySWQ/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8Q3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRpb25BdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFVzZXJEdG8sXHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmdcclxuPiBleHRlbmRzIENyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGNyZWF0b3I/OiBUVXNlckR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPENyZWF0aW9uQXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFRVc2VyRHRvLCBUUHJpbWFyeUtleT4+ID0ge30sXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5ID0gc3RyaW5nPiBleHRlbmRzIENyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGxhc3RNb2RpZmljYXRpb25UaW1lPzogc3RyaW5nIHwgRGF0ZTtcclxuICBsYXN0TW9kaWZpZXJJZD86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFRVc2VyRHRvLCBUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBBdWRpdGVkRW50aXR5RHRvPFxyXG4gIFRQcmltYXJ5S2V5XHJcbj4ge1xyXG4gIGNyZWF0b3I/OiBUVXNlckR0bztcclxuICBsYXN0TW9kaWZpZXI/OiBUVXNlckR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFVzZXJEdG8sIFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnVsbEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXkgPSBzdHJpbmc+IGV4dGVuZHMgQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGlzRGVsZXRlZD86IGJvb2xlYW47XHJcbiAgZGVsZXRlcklkPzogc3RyaW5nO1xyXG4gIGRlbGV0aW9uVGltZT86IERhdGUgfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RnVsbEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGdWxsQXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFxyXG4gIFRVc2VyRHRvLFxyXG4gIFRQcmltYXJ5S2V5ID0gc3RyaW5nXHJcbj4gZXh0ZW5kcyBGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGNyZWF0b3I/OiBUVXNlckR0bztcclxuICBsYXN0TW9kaWZpZXI/OiBUVXNlckR0bztcclxuICBkZWxldGVyPzogVFVzZXJEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RnVsbEF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUVXNlckR0bywgVFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuIl19
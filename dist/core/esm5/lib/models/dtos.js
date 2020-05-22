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
var ExtensibleObject = /** @class */ (function () {
    function ExtensibleObject(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return ExtensibleObject;
}());
export { ExtensibleObject };
if (false) {
    /** @type {?} */
    ExtensibleObject.prototype.extraProperties;
}
/**
 * @template TKey
 */
var /**
 * @template TKey
 */
ExtensibleEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleEntityDto, _super);
    function ExtensibleEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleEntityDto;
}(ExtensibleObject));
/**
 * @template TKey
 */
export { ExtensibleEntityDto };
if (false) {
    /** @type {?} */
    ExtensibleEntityDto.prototype.id;
}
/**
 * @template TPrimaryKey
 */
var /**
 * @template TPrimaryKey
 */
ExtensibleCreationAuditedEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleCreationAuditedEntityDto, _super);
    function ExtensibleCreationAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleCreationAuditedEntityDto;
}(ExtensibleEntityDto));
/**
 * @template TPrimaryKey
 */
export { ExtensibleCreationAuditedEntityDto };
if (false) {
    /** @type {?} */
    ExtensibleCreationAuditedEntityDto.prototype.creationTime;
    /** @type {?} */
    ExtensibleCreationAuditedEntityDto.prototype.creatorId;
}
/**
 * @template TPrimaryKey
 */
var /**
 * @template TPrimaryKey
 */
ExtensibleAuditedEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleAuditedEntityDto, _super);
    function ExtensibleAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleAuditedEntityDto;
}(ExtensibleCreationAuditedEntityDto));
/**
 * @template TPrimaryKey
 */
export { ExtensibleAuditedEntityDto };
if (false) {
    /** @type {?} */
    ExtensibleAuditedEntityDto.prototype.lastModificationTime;
    /** @type {?} */
    ExtensibleAuditedEntityDto.prototype.lastModifierId;
}
/**
 * @template TPrimaryKey, TUserDto
 */
var /**
 * @template TPrimaryKey, TUserDto
 */
ExtensibleAuditedEntityWithUserDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleAuditedEntityWithUserDto, _super);
    function ExtensibleAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleAuditedEntityWithUserDto;
}(ExtensibleAuditedEntityDto));
/**
 * @template TPrimaryKey, TUserDto
 */
export { ExtensibleAuditedEntityWithUserDto };
if (false) {
    /** @type {?} */
    ExtensibleAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    ExtensibleAuditedEntityWithUserDto.prototype.lastModifier;
}
/**
 * @template TPrimaryKey, TUserDto
 */
var /**
 * @template TPrimaryKey, TUserDto
 */
ExtensibleCreationAuditedEntityWithUserDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleCreationAuditedEntityWithUserDto, _super);
    function ExtensibleCreationAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleCreationAuditedEntityWithUserDto;
}(ExtensibleCreationAuditedEntityDto));
/**
 * @template TPrimaryKey, TUserDto
 */
export { ExtensibleCreationAuditedEntityWithUserDto };
if (false) {
    /** @type {?} */
    ExtensibleCreationAuditedEntityWithUserDto.prototype.creator;
}
/**
 * @template TPrimaryKey
 */
var /**
 * @template TPrimaryKey
 */
ExtensibleFullAuditedEntityDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleFullAuditedEntityDto, _super);
    function ExtensibleFullAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleFullAuditedEntityDto;
}(ExtensibleAuditedEntityDto));
/**
 * @template TPrimaryKey
 */
export { ExtensibleFullAuditedEntityDto };
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
var /**
 * @template TPrimaryKey, TUserDto
 */
ExtensibleFullAuditedEntityWithUserDto = /** @class */ (function (_super) {
    tslib_1.__extends(ExtensibleFullAuditedEntityWithUserDto, _super);
    function ExtensibleFullAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return ExtensibleFullAuditedEntityWithUserDto;
}(ExtensibleFullAuditedEntityDto));
/**
 * @template TPrimaryKey, TUserDto
 */
export { ExtensibleFullAuditedEntityWithUserDto };
if (false) {
    /** @type {?} */
    ExtensibleFullAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    ExtensibleFullAuditedEntityWithUserDto.prototype.lastModifier;
    /** @type {?} */
    ExtensibleFullAuditedEntityWithUserDto.prototype.deleter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztJQUdFLHVCQUFZLGFBQTZDO1FBQTdDLDhCQUFBLEVBQUEsa0JBQTZDO1FBQ3ZELEtBQUssSUFBTSxHQUFHLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7SUFUQyw4QkFBWTs7Ozs7QUFXZDs7OztJQUF1QywwQ0FBZ0I7SUFHckQsd0JBQVksYUFBOEM7UUFBOUMsOEJBQUEsRUFBQSxrQkFBOEM7ZUFDeEQsa0JBQU0sYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFORCxDQUF1QyxhQUFhLEdBTW5EOzs7Ozs7O0lBTEMsb0NBQW9COztBQU90QjtJQUdFLGlDQUFZLGFBQW9EO1FBQXBELDhCQUFBLEVBQUEsa0JBQW9EO1FBRmhFLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBR2xCLEtBQUssSUFBTSxHQUFHLElBQUksYUFBYSxFQUFFO1lBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUNGO0lBQ0gsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQyxpREFBb0I7O0FBV3RCO0lBQTJDLGlEQUF1QjtJQUdoRSwrQkFBWSxhQUFrRDtRQUFsRCw4QkFBQSxFQUFBLGtCQUFrRDtlQUM1RCxrQkFB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REFBdUM7SUFLL0Msd0NBQVksYUFBd0U7UUFBeEUsOEJBQUEsRUFBQSxrQkFBd0U7ZUFDbEYsa0JBQU0sYUFBYSxDQUFDO0lBQ3RCLENBQUM7SUFDSCxxQ0FBQztBQUFELENBQUMsQUFWRCxDQUVVLDBCQUEwQixHQVFuQzs7Ozs7OztJQVBDLG1EQUFtQjs7SUFDbkIsbURBQW1COztJQUNuQixzREFBNEI7Ozs7O0FBTzlCOzs7O0lBR1Usa0VBQTJDO0lBS25ELGdEQUFZLGFBQWdGO1FBQWhGLDhCQUFBLEVBQUEsa0JBQWdGO2VBQzFGLGtCQUFNLGFBQWEsQ0FBQztJQUN0QixDQUFDO0lBQ0gsNkNBQUM7QUFBRCxDQUFDLEFBWEQsQ0FHVSw4QkFBOEIsR0FRdkM7Ozs7Ozs7SUFQQyx5REFBa0I7O0lBQ2xCLDhEQUF1Qjs7SUFDdkIseURBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RSZXN1bHREdG88VD4ge1xyXG4gIGl0ZW1zPzogVFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPExpc3RSZXN1bHREdG88VD4+ID0ge30pIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluaXRpYWxWYWx1ZXMpIHtcclxuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXNba2V5XSA9IGluaXRpYWxWYWx1ZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VkUmVzdWx0RHRvPFQ+IGV4dGVuZHMgTGlzdFJlc3VsdER0bzxUPiB7XHJcbiAgdG90YWxDb3VudD86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxQYWdlZFJlc3VsdER0bzxUPj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGltaXRlZFJlc3VsdFJlcXVlc3REdG8ge1xyXG4gIG1heFJlc3VsdENvdW50ID0gMTA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8TGltaXRlZFJlc3VsdFJlcXVlc3REdG8+ID0ge30pIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluaXRpYWxWYWx1ZXMpIHtcclxuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXNba2V5XSA9IGluaXRpYWxWYWx1ZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VkUmVzdWx0UmVxdWVzdER0byBleHRlbmRzIExpbWl0ZWRSZXN1bHRSZXF1ZXN0RHRvIHtcclxuICBza2lwQ291bnQ/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8UGFnZWRSZXN1bHRSZXF1ZXN0RHRvPiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlZEFuZFNvcnRlZFJlc3VsdFJlcXVlc3REdG8gZXh0ZW5kcyBQYWdlZFJlc3VsdFJlcXVlc3REdG8ge1xyXG4gIHNvcnRpbmc/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8UGFnZWRBbmRTb3J0ZWRSZXN1bHRSZXF1ZXN0RHRvPiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlEdG88VEtleSA9IHN0cmluZz4ge1xyXG4gIGlkPzogVEtleTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxFbnRpdHlEdG88VEtleT4+ID0ge30pIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluaXRpYWxWYWx1ZXMpIHtcclxuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXNba2V5XSA9IGluaXRpYWxWYWx1ZXNba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdGlvblRpbWU/OiBzdHJpbmcgfCBEYXRlO1xyXG4gIGNyZWF0b3JJZD86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxcclxuICBUVXNlckR0byxcclxuICBUUHJpbWFyeUtleSA9IHN0cmluZ1xyXG4+IGV4dGVuZHMgQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgY3JlYXRvcj86IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8Q3JlYXRpb25BdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFVzZXJEdG8sIFRQcmltYXJ5S2V5Pj4gPSB7fSxcclxuICApIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXkgPSBzdHJpbmc+IGV4dGVuZHMgQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBzdHJpbmcgfCBEYXRlO1xyXG4gIGxhc3RNb2RpZmllcklkPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFVzZXJEdG8sIFRQcmltYXJ5S2V5ID0gc3RyaW5nPiBleHRlbmRzIEF1ZGl0ZWRFbnRpdHlEdG88XHJcbiAgVFByaW1hcnlLZXlcclxuPiB7XHJcbiAgY3JlYXRvcj86IFRVc2VyRHRvO1xyXG4gIGxhc3RNb2RpZmllcj86IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUVXNlckR0bywgVFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgaXNEZWxldGVkPzogYm9vbGVhbjtcclxuICBkZWxldGVySWQ/OiBzdHJpbmc7XHJcbiAgZGVsZXRpb25UaW1lPzogRGF0ZSB8IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFVzZXJEdG8sXHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmdcclxuPiBleHRlbmRzIEZ1bGxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgY3JlYXRvcj86IFRVc2VyRHRvO1xyXG4gIGxhc3RNb2RpZmllcj86IFRVc2VyRHRvO1xyXG4gIGRlbGV0ZXI/OiBUVXNlckR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxGdWxsQXVkaXRlZEVudGl0eVdpdGhVc2VyRHRvPFRVc2VyRHRvLCBUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVPYmplY3Qge1xyXG4gIGV4dHJhUHJvcGVydGllczogQUJQLkRpY3Rpb25hcnk8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlczogUGFydGlhbDxFeHRlbnNpYmxlT2JqZWN0PiA9IHt9KSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbml0aWFsVmFsdWVzKSB7XHJcbiAgICAgIGlmIChpbml0aWFsVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBpbml0aWFsVmFsdWVzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRW50aXR5RHRvPFRLZXkgPSBzdHJpbmc+IGV4dGVuZHMgRXh0ZW5zaWJsZU9iamVjdCB7XHJcbiAgaWQ6IFRLZXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUVudGl0eUR0bzxUS2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUNyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleSA9IHN0cmluZz4gZXh0ZW5kcyBFeHRlbnNpYmxlRW50aXR5RHRvPFxyXG4gIFRQcmltYXJ5S2V5XHJcbj4ge1xyXG4gIGNyZWF0aW9uVGltZTogRGF0ZSB8IHN0cmluZztcclxuICBjcmVhdG9ySWQ/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUNyZWF0aW9uQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4+ID0ge30pIHtcclxuICAgIHN1cGVyKGluaXRpYWxWYWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVBdWRpdGVkRW50aXR5RHRvPFxyXG4gIFRQcmltYXJ5S2V5ID0gc3RyaW5nXHJcbj4gZXh0ZW5kcyBFeHRlbnNpYmxlQ3JlYXRpb25BdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBEYXRlIHwgc3RyaW5nO1xyXG4gIGxhc3RNb2RpZmllcklkPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEV4dGVuc2libGVBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxcclxuICBUUHJpbWFyeUtleSA9IHN0cmluZyxcclxuICBUVXNlckR0byA9IGFueVxyXG4+IGV4dGVuZHMgRXh0ZW5zaWJsZUF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdG9yOiBUVXNlckR0bztcclxuICBsYXN0TW9kaWZpZXI6IFRVc2VyRHRvO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEV4dGVuc2libGVBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlQ3JlYXRpb25BdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmcsXHJcbiAgVFVzZXJEdG8gPSBhbnlcclxuPiBleHRlbmRzIEV4dGVuc2libGVDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlEdG88VFByaW1hcnlLZXk+IHtcclxuICBjcmVhdG9yOiBUVXNlckR0bztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbml0aWFsVmFsdWVzOiBQYXJ0aWFsPEV4dGVuc2libGVDcmVhdGlvbkF1ZGl0ZWRFbnRpdHlXaXRoVXNlckR0bzxUUHJpbWFyeUtleT4+ID0ge30sXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbnNpYmxlRnVsbEF1ZGl0ZWRFbnRpdHlEdG88XHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmdcclxuPiBleHRlbmRzIEV4dGVuc2libGVBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5PiB7XHJcbiAgaXNEZWxldGVkOiBib29sZWFuO1xyXG4gIGRlbGV0ZXJJZD86IHN0cmluZztcclxuICBkZWxldGlvblRpbWU6IERhdGUgfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUZ1bGxBdWRpdGVkRW50aXR5RHRvPFRQcmltYXJ5S2V5Pj4gPSB7fSkge1xyXG4gICAgc3VwZXIoaW5pdGlhbFZhbHVlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZUZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88XHJcbiAgVFByaW1hcnlLZXkgPSBzdHJpbmcsXHJcbiAgVFVzZXJEdG8gPSBhbnlcclxuPiBleHRlbmRzIEV4dGVuc2libGVGdWxsQXVkaXRlZEVudGl0eUR0bzxUUHJpbWFyeUtleT4ge1xyXG4gIGNyZWF0b3I6IFRVc2VyRHRvO1xyXG4gIGxhc3RNb2RpZmllcjogVFVzZXJEdG87XHJcbiAgZGVsZXRlcjogVFVzZXJEdG87XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXM6IFBhcnRpYWw8RXh0ZW5zaWJsZUZ1bGxBdWRpdGVkRW50aXR5V2l0aFVzZXJEdG88VFByaW1hcnlLZXk+PiA9IHt9KSB7XHJcbiAgICBzdXBlcihpbml0aWFsVmFsdWVzKTtcclxuICB9XHJcbn1cclxuIl19
import { ABP } from './common';
export declare class ListResultDto<T> {
    items?: T[];
    constructor(initialValues?: Partial<ListResultDto<T>>);
}
export declare class PagedResultDto<T> extends ListResultDto<T> {
    totalCount?: number;
    constructor(initialValues?: Partial<PagedResultDto<T>>);
}
export declare class LimitedResultRequestDto {
    maxResultCount: number;
    constructor(initialValues?: Partial<LimitedResultRequestDto>);
}
export declare class PagedResultRequestDto extends LimitedResultRequestDto {
    skipCount?: number;
    constructor(initialValues?: Partial<PagedResultRequestDto>);
}
export declare class PagedAndSortedResultRequestDto extends PagedResultRequestDto {
    sorting?: string;
    constructor(initialValues?: Partial<PagedAndSortedResultRequestDto>);
}
export declare class EntityDto<TKey = string> {
    id?: TKey;
    constructor(initialValues?: Partial<EntityDto<TKey>>);
}
export declare class CreationAuditedEntityDto<TPrimaryKey = string> extends EntityDto<TPrimaryKey> {
    creationTime?: string | Date;
    creatorId?: string;
    constructor(initialValues?: Partial<CreationAuditedEntityDto<TPrimaryKey>>);
}
export declare class CreationAuditedEntityWithUserDto<TUserDto, TPrimaryKey = string> extends CreationAuditedEntityDto<TPrimaryKey> {
    creator?: TUserDto;
    constructor(initialValues?: Partial<CreationAuditedEntityWithUserDto<TUserDto, TPrimaryKey>>);
}
export declare class AuditedEntityDto<TPrimaryKey = string> extends CreationAuditedEntityDto<TPrimaryKey> {
    lastModificationTime?: string | Date;
    lastModifierId?: string;
    constructor(initialValues?: Partial<AuditedEntityDto<TPrimaryKey>>);
}
export declare class AuditedEntityWithUserDto<TUserDto, TPrimaryKey = string> extends AuditedEntityDto<TPrimaryKey> {
    creator?: TUserDto;
    lastModifier?: TUserDto;
    constructor(initialValues?: Partial<AuditedEntityWithUserDto<TUserDto, TPrimaryKey>>);
}
export declare class FullAuditedEntityDto<TPrimaryKey = string> extends AuditedEntityDto<TPrimaryKey> {
    isDeleted?: boolean;
    deleterId?: string;
    deletionTime?: Date | string;
    constructor(initialValues?: Partial<FullAuditedEntityDto<TPrimaryKey>>);
}
export declare class FullAuditedEntityWithUserDto<TUserDto, TPrimaryKey = string> extends FullAuditedEntityDto<TPrimaryKey> {
    creator?: TUserDto;
    lastModifier?: TUserDto;
    deleter?: TUserDto;
    constructor(initialValues?: Partial<FullAuditedEntityWithUserDto<TUserDto, TPrimaryKey>>);
}
export declare class ExtensibleObject {
    extraProperties: ABP.Dictionary<any>;
    constructor(initialValues?: Partial<ExtensibleObject>);
}
export declare class ExtensibleEntityDto<TKey = string> extends ExtensibleObject {
    id: TKey;
    constructor(initialValues?: Partial<ExtensibleEntityDto<TKey>>);
}
export declare class ExtensibleCreationAuditedEntityDto<TPrimaryKey = string> extends ExtensibleEntityDto<TPrimaryKey> {
    creationTime: Date | string;
    creatorId?: string;
    constructor(initialValues?: Partial<ExtensibleCreationAuditedEntityDto<TPrimaryKey>>);
}
export declare class ExtensibleAuditedEntityDto<TPrimaryKey = string> extends ExtensibleCreationAuditedEntityDto<TPrimaryKey> {
    lastModificationTime?: Date | string;
    lastModifierId?: string;
    constructor(initialValues?: Partial<ExtensibleAuditedEntityDto<TPrimaryKey>>);
}
export declare class ExtensibleAuditedEntityWithUserDto<TPrimaryKey = string, TUserDto = any> extends ExtensibleAuditedEntityDto<TPrimaryKey> {
    creator: TUserDto;
    lastModifier: TUserDto;
    constructor(initialValues?: Partial<ExtensibleAuditedEntityWithUserDto<TPrimaryKey>>);
}
export declare class ExtensibleCreationAuditedEntityWithUserDto<TPrimaryKey = string, TUserDto = any> extends ExtensibleCreationAuditedEntityDto<TPrimaryKey> {
    creator: TUserDto;
    constructor(initialValues?: Partial<ExtensibleCreationAuditedEntityWithUserDto<TPrimaryKey>>);
}
export declare class ExtensibleFullAuditedEntityDto<TPrimaryKey = string> extends ExtensibleAuditedEntityDto<TPrimaryKey> {
    isDeleted: boolean;
    deleterId?: string;
    deletionTime: Date | string;
    constructor(initialValues?: Partial<ExtensibleFullAuditedEntityDto<TPrimaryKey>>);
}
export declare class ExtensibleFullAuditedEntityWithUserDto<TPrimaryKey = string, TUserDto = any> extends ExtensibleFullAuditedEntityDto<TPrimaryKey> {
    creator: TUserDto;
    lastModifier: TUserDto;
    deleter: TUserDto;
    constructor(initialValues?: Partial<ExtensibleFullAuditedEntityWithUserDto<TPrimaryKey>>);
}

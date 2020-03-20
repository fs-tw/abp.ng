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

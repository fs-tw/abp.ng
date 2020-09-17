import { Type } from '@angular/core';
export declare class NavItem {
    id: string | number;
    component?: Type<any>;
    html?: string;
    action?: () => void;
    order?: number;
    requiredPolicy?: string;
    visible?: () => boolean;
    constructor(props: Partial<NavItem>);
}

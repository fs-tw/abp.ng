/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://ng-alain.com/docs/module
 */
import { ModuleWithProviders } from '@angular/core';
import { PageHeaderConfig } from '@delon/abc';
export declare function fnPageHeaderConfig(): PageHeaderConfig;
import { DelonAuthConfig } from '@delon/auth';
export declare function fnDelonAuthConfig(): DelonAuthConfig;
import { STConfig } from '@delon/abc';
export declare function fnSTConfig(): STConfig;
export declare class DelonModule {
    constructor(parentModule: DelonModule);
    static forRoot(): ModuleWithProviders;
}

import { ABP, PagedResultDto } from '@abp/ng.core';
import { TenantDto } from '../proxy/models';
export declare namespace TenantManagement {
    interface State {
        result: PagedResultDto<TenantDto>;
        selectedItem: TenantDto;
    }
    /**
     * @deprecated To be deleted in v4.0
     */
    type Response = ABP.PagedResponse<Item>;
    /**
     * @deprecated To be deleted in v4.0
     */
    interface Item {
        id: string;
        name: string;
    }
    /**
     * @deprecated To be deleted in v4.0
     */
    interface AddRequest {
        adminEmailAddress: string;
        adminPassword: string;
        name: string;
    }
    /**
     * @deprecated To be deleted in v4.0
     */
    interface UpdateRequest {
        id: string;
        name: string;
    }
    /**
     * @deprecated To be deleted in v4.0
     */
    interface DefaultConnectionStringRequest {
        id: string;
        defaultConnectionString: string;
    }
}

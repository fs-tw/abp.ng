import { ABP } from '@abp/ng.core';
export declare namespace TenantManagement {
    interface State {
        result: Response;
        selectedItem: Item;
    }
    type Response = ABP.PagedResponse<Item>;
    interface Item {
        id: string;
        name: string;
    }
    interface AddRequest {
        adminEmailAddress: string;
        adminPassword: string;
        name: string;
    }
    interface UpdateRequest {
        id: string;
        name: string;
    }
    interface DefaultConnectionStringRequest {
        id: string;
        defaultConnectionString: string;
    }
}

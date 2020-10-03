import { EventEmitter } from '@angular/core';
export declare namespace PermissionManagement {
    interface State {
        permissionRes: Response;
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface Response {
        entityDisplayName: string;
        groups: Group[];
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface Group {
        name: string;
        displayName: string;
        permissions: Permission[];
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface MinimumPermission {
        name: string;
        isGranted: boolean;
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface Permission extends MinimumPermission {
        displayName: string;
        parentName: string;
        allowedProviders: string[];
        grantedProviders: GrantedProvider[];
    }
    interface GrantedProvider {
        providerName: string;
        providerKey: string;
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface UpdateRequest {
        permissions: MinimumPermission[];
    }
    interface PermissionManagementComponentInputs {
        visible: boolean;
        readonly providerName: string;
        readonly providerKey: string;
        readonly hideBadges: boolean;
    }
    interface PermissionManagementComponentOutputs {
        readonly visibleChange: EventEmitter<boolean>;
    }
}

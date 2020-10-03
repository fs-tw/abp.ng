import { EventEmitter } from '@angular/core';
export declare namespace FeatureManagement {
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface State {
        features: Feature[];
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface ValueType {
        name: string;
        properties: object;
        validator: object;
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface Feature {
        name: string;
        displayName: string;
        value: string;
        description?: string;
        valueType?: ValueType;
        depth?: number;
        parentName?: string;
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface Features {
        features: Feature[];
    }
    /**
     * @deprecated To be deleted in v4.0.
     */
    interface Provider {
        providerName: string;
        providerKey: string;
    }
    interface FeatureManagementComponentInputs {
        visible: boolean;
        readonly providerName: string;
        readonly providerKey: string;
    }
    interface FeatureManagementComponentOutputs {
        readonly visibleChange: EventEmitter<boolean>;
    }
}

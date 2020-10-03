import { FeatureManagement } from '../models';
/**
 * @deprecated To be deleted in v4.0.
 */
export declare class GetFeatures {
    payload: FeatureManagement.Provider;
    static readonly type = "[FeatureManagement] Get Features";
    constructor(payload: FeatureManagement.Provider);
}
/**
 * @deprecated To be deleted in v4.0.
 */
export declare class UpdateFeatures {
    payload: FeatureManagement.Provider & FeatureManagement.Features;
    static readonly type = "[FeatureManagement] Update Features";
    constructor(payload: FeatureManagement.Provider & FeatureManagement.Features);
}

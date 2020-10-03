import { StateContext } from '@ngxs/store';
import { GetFeatures, UpdateFeatures } from '../actions/feature-management.actions';
import { FeatureManagement } from '../models/feature-management';
import { FeatureManagementService } from '../services/feature-management.service';
/**
 * @deprecated To be deleted in v4.0.
 */
export declare class FeatureManagementState {
    private featureManagementService;
    static getFeatures({ features }: FeatureManagement.State): FeatureManagement.Feature[];
    constructor(featureManagementService: FeatureManagementService);
    getFeatures({ patchState }: StateContext<FeatureManagement.State>, { payload }: GetFeatures): import("rxjs").Observable<FeatureManagement.Features>;
    updateFeatures(_: any, { payload }: UpdateFeatures): import("rxjs").Observable<null>;
}

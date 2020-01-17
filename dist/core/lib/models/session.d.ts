import { ABP } from '../models';
export declare namespace Session {
    interface State {
        language: string;
        tenant: ABP.BasicItem;
        sessionDetail: SessionDetail;
    }
    interface SessionDetail {
        openedTabCount: number;
        lastExitTime: number;
        remember: boolean;
    }
}

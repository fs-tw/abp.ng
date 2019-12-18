import { MockRequest } from '@delon/mock';
export declare const RULES: {
    '/rule': (req: MockRequest) => any[];
    'DELETE /rule': (req: MockRequest) => boolean;
    'POST /rule': (req: MockRequest) => void;
};

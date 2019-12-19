import { MockRequest } from '@delon/mock';
export declare const APIS: {
    '/api/list': (req: MockRequest) => any[];
    '/api/notice': () => any[];
    '/api/activities': () => any[];
    '/api/401': () => never;
    '/api/403': () => never;
    '/api/404': () => never;
    '/api/500': () => never;
};

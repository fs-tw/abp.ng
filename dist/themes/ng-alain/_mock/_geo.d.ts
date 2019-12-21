import { MockRequest } from '@delon/mock';
export declare const GEOS: {
    '/geo/province': () => {
        name: string;
        id: string;
    }[];
    '/geo/:id': (req: MockRequest) => {
        name: string;
        id: string;
    }[];
};

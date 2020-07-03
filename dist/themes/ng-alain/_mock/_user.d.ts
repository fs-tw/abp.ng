import { MockRequest } from '@delon/mock';
export declare const USERS: {
    '/user': (req: MockRequest) => {
        total: number;
        list: any[];
    };
    '/user/:id': (req: MockRequest) => any;
    'POST /user/:id': (req: MockRequest) => {
        msg: string;
    };
    '/user/current': {
        name: string;
        avatar: string;
        userid: string;
        email: string;
        signature: string;
        title: string;
        group: string;
        tags: {
            key: string;
            label: string;
        }[];
        notifyCount: number;
        country: string;
        geographic: {
            province: {
                label: string;
                key: string;
            };
            city: {
                label: string;
                key: string;
            };
        };
        address: string;
        phone: string;
    };
    'POST /user/avatar': string;
    'POST /login/account': (req: MockRequest) => {
        msg: string;
        user?: undefined;
    } | {
        msg: string;
        user: {
            token: string;
            name: any;
            email: string;
            id: number;
            time: number;
        };
    };
    'POST /register': {
        msg: string;
    };
};

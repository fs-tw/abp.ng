export declare const PROFILES: {
    'GET /profile/progress': {
        key: string;
        time: string;
        rate: string;
        status: string;
        operator: string;
        cost: string;
    }[];
    'GET /profile/goods': {
        id: string;
        name: string;
        barcode: string;
        price: string;
        num: string;
        amount: string;
    }[];
    'GET /profile/advanced': {
        advancedOperation1: {
            key: string;
            type: string;
            name: string;
            status: string;
            updatedAt: string;
            memo: string;
        }[];
        advancedOperation2: {
            key: string;
            type: string;
            name: string;
            status: string;
            updatedAt: string;
            memo: string;
        }[];
        advancedOperation3: {
            key: string;
            type: string;
            name: string;
            status: string;
            updatedAt: string;
            memo: string;
        }[];
    };
};

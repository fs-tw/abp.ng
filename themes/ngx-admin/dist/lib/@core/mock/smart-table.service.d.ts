import { SmartTableData } from '../data/smart-table';
export declare class SmartTableService extends SmartTableData {
    data: ({
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        age: string;
    } | {
        'id': number;
        'firstName': string;
        'lastName': string;
        'username': string;
        'email': string;
        'age': number;
    })[];
    getData(): ({
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        age: string;
    } | {
        'id': number;
        'firstName': string;
        'lastName': string;
        'username': string;
        'email': string;
        'age': number;
    })[];
}

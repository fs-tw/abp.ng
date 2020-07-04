import { Config } from '../models/config';
export declare class GetAppConfiguration {
    static readonly type = "[Config] Get App Configuration";
}
export declare class SetEnvironment {
    environment: Config.Environment;
    static readonly type = "[Config] Set Environment";
    constructor(environment: Config.Environment);
}

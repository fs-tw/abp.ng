import { Options } from '../models/options';

export function themeCoreOptionsFactory(options: Options) {
  return {
    loadCodes: false,
    ...options,
  };
}

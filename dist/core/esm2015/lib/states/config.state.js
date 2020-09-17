var ConfigState_1;
import { __decorate, __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, Store } from '@ngxs/store';
import { of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import snq from 'snq';
import { GetAppConfiguration, SetEnvironment } from '../actions/config.actions';
import { RestOccurError } from '../actions/rest.actions';
import { SetLanguage } from '../actions/session.actions';
import { interpolate } from '../utils/string-utils';
import { SessionState } from './session.state';
let ConfigState = ConfigState_1 = class ConfigState {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    static getAll(state) {
        return state;
    }
    static getApplicationInfo(state) {
        return state.environment.application || {};
    }
    static getOne(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return state[key];
        });
        return selector;
    }
    static getDeep(keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        const selector = createSelector([ConfigState_1], (state) => {
            return keys.reduce((acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }, state);
        });
        return selector;
    }
    static getApiUrl(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
        });
        return selector;
    }
    static getFeature(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return snq(() => state.features.values[key]);
        });
        return selector;
    }
    static getSetting(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return snq(() => state.setting.values[key]);
        });
        return selector;
    }
    static getSettings(keyword) {
        const selector = createSelector([ConfigState_1], (state) => {
            const settings = snq(() => state.setting.values, {});
            if (!keyword)
                return settings;
            const keysFound = Object.keys(settings).filter(key => key.indexOf(keyword) > -1);
            return keysFound.reduce((acc, key) => {
                acc[key] = settings[key];
                return acc;
            }, {});
        });
        return selector;
    }
    static getGrantedPolicy(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            if (!key)
                return true;
            const getPolicy = (k) => snq(() => state.auth.grantedPolicies[k], false);
            const orRegexp = /\|\|/g;
            const andRegexp = /&&/g;
            // TODO: Allow combination of ANDs & ORs
            if (orRegexp.test(key)) {
                const keys = key.split('||').filter(Boolean);
                if (keys.length < 2)
                    return false;
                return keys.some(k => getPolicy(k.trim()));
            }
            else if (andRegexp.test(key)) {
                const keys = key.split('&&').filter(Boolean);
                if (keys.length < 2)
                    return false;
                return keys.every(k => getPolicy(k.trim()));
            }
            return getPolicy(key);
        });
        return selector;
    }
    static getLocalization(key, ...interpolateParams) {
        if (!key)
            key = '';
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        const keys = key.split('::');
        const selector = createSelector([ConfigState_1], (state) => {
            const warn = (message) => {
                if (!state.environment.production)
                    console.warn(message);
            };
            if (keys.length < 2) {
                warn('The localization source separator (::) not found.');
                return defaultValue || key;
            }
            if (!state.localization)
                return defaultValue || keys[1];
            const sourceName = keys[0] ||
                snq(() => state.environment.localization.defaultResourceName) ||
                state.localization.defaultResourceName;
            const sourceKey = keys[1];
            if (sourceName === '_') {
                return defaultValue || sourceKey;
            }
            if (!sourceName) {
                warn('Localization source name is not specified and the defaultResourceName was not defined!');
                return defaultValue || sourceKey;
            }
            const source = state.localization.values[sourceName];
            if (!source) {
                warn('Could not find localization source: ' + sourceName);
                return defaultValue || sourceKey;
            }
            let localization = source[sourceKey];
            if (typeof localization === 'undefined') {
                return defaultValue || sourceKey;
            }
            // [TODO]: next line should be removed in v3.2, breaking change!!!
            interpolateParams = interpolateParams.filter(params => params != null);
            if (localization)
                localization = interpolate(localization, interpolateParams);
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || key;
        });
        return selector;
    }
    addData({ patchState, dispatch }) {
        const apiName = 'default';
        const api = this.store.selectSnapshot(ConfigState_1.getApiUrl(apiName));
        return this.http
            .get(`${api}/api/abp/application-configuration`)
            .pipe(tap(configuration => patchState(Object.assign({}, configuration))), switchMap(configuration => {
            let defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            document.documentElement.setAttribute('lang', configuration.localization.currentCulture.cultureName);
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang, false));
        }), catchError((err) => {
            dispatch(new RestOccurError(err));
            return throwError(err);
        }));
    }
    setEnvironment({ patchState }, { environment }) {
        return patchState({ environment });
    }
};
__decorate([
    Action(GetAppConfiguration),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfigState.prototype, "addData", null);
__decorate([
    Action(SetEnvironment),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetEnvironment]),
    __metadata("design:returntype", void 0)
], ConfigState.prototype, "setEnvironment", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfigState, "getAll", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ConfigState, "getApplicationInfo", null);
ConfigState = ConfigState_1 = __decorate([
    State({
        name: 'ConfigState',
        defaults: {},
    }),
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, Store])
], ConfigState);
export { ConfigState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBZ0x0QixZQUFvQixJQUFnQixFQUFVLEtBQVk7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBOUs5RCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQW1CO1FBQy9CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUdELE1BQU0sQ0FBQyxrQkFBa0Is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QUFDLGNBQWMsQ0FBQyxXQUFXLENBQ3RELENBQUM7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7Z0JBQ3hELENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNWLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDTixDQUFDO0lBR0QsY0FBYyxDQUFDLEVBQUUsVUFBVSxFQUE4QixFQUFFLEVBQUUsV0FBVyxFQUFrQjtRQUN4RixPQUFPLFVBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNGLENBQUE7QUF0Q0M7SUFEQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7Ozs7MENBaUMzQjtBQUdEO0lBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7NkNBQ3FELGNBQWM7O2lEQUV6RjtBQXRORDtJQURDLFFBQVEsRUFBRTs7OzsrQkFHVjtBQUdEO0lBREMsUUFBUSxFQUFFOzs7OzJDQUdWO0FBVFUsV0FBVztJQUx2QixLQUFLLENBQWU7UUFDbkIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsUUFBUSxFQUFFLEVBQWtCO0tBQzdCLENBQUM7SUFDRCxVQUFVLEVBQUU7cUNBaUxlLFVBQVUsRUFBaUIsS0FBSztHQWhML0MsV0FBVyxDQXlOdkI7U0F6TlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IsIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiwgU2V0RW52aXJvbm1lbnQgfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHsgUmVzdE9jY3VyRXJyb3IgfSBmcm9tICcuLi9hY3Rpb25zL3Jlc3QuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcnO1xyXG5pbXBvcnQgeyBpbnRlcnBvbGF0ZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZy11dGlscyc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4vc2Vzc2lvbi5zdGF0ZSc7XHJcblxyXG5AU3RhdGU8Q29uZmlnLlN0YXRlPih7XHJcbiAgbmFtZTogJ0NvbmZpZ1N0YXRlJyxcclxuICBkZWZhdWx0czoge30gYXMgQ29uZmlnLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QWxsKHN0YXRlOiBDb25maWcuU3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEFwcGxpY2F0aW9uSW5mbyhzdGF0ZTogQ29uZmlnLlN0YXRlKTogQ29uZmlnLkFwcGxpY2F0aW9uIHtcclxuICAgIHJldHVybiBzdGF0ZS5lbnZpcm9ubWVudC5hcHBsaWNhdGlvbiB8fCAoe30gYXMgQ29uZmlnLkFwcGxpY2F0aW9uKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRPbmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlW2tleV07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RGVlcChrZXlzOiBzdHJpbmdbXSB8IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBrZXlzID09PSAnc3RyaW5nJykge1xyXG4gICAgICBrZXlzID0ga2V5cy5zcGxpdCgnLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhcmd1bWVudCBtdXN0IGJlIGEgZG90IHN0cmluZyBvciBhbiBzdHJpbmcgYXJyYXkuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gKGtleXMgYXMgc3RyaW5nW10pLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgICBpZiAoYWNjKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjW3ZhbF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9LCBzdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0QXBpVXJsKGtleT86IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgICAgIHJldHVybiAoc3RhdGUuZW52aXJvbm1lbnQuYXBpc1trZXkgfHwgJ2RlZmF1bHQnXSB8fCBzdGF0ZS5lbnZpcm9ubWVudC5hcGlzLmRlZmF1bHQpLnVybDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRGZWF0dXJlKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBzbnEoKCkgPT4gc3RhdGUuZmVhdHVyZXMudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5zZXR0aW5nLnZhbHVlc1trZXldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTZXR0aW5ncyhrZXl3b3JkPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzLCB7fSk7XHJcblxyXG4gICAgICBpZiAoIWtleXdvcmQpIHJldHVybiBzZXR0aW5ncztcclxuXHJcbiAgICAgIGNvbnN0IGtleXNGb3VuZCA9IE9iamVjdC5rZXlzKHNldHRpbmdzKS5maWx0ZXIoa2V5ID0+IGtleS5pbmRleE9mKGtleXdvcmQpID4gLTEpO1xyXG5cclxuICAgICAgcmV0dXJuIGtleXNGb3VuZC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBzZXR0aW5nc1trZXldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRHcmFudGVkUG9saWN5KGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIGlmICgha2V5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgY29uc3QgZ2V0UG9saWN5ID0gKGs6IHN0cmluZykgPT4gc25xKCgpID0+IHN0YXRlLmF1dGguZ3JhbnRlZFBvbGljaWVzW2tdLCBmYWxzZSk7XHJcblxyXG4gICAgICBjb25zdCBvclJlZ2V4cCA9IC9cXHxcXHwvZztcclxuICAgICAgY29uc3QgYW5kUmVnZXhwID0gLyYmL2c7XHJcblxyXG4gICAgICAvLyBUT0RPOiBBbGxvdyBjb21iaW5hdGlvbiBvZiBBTkRzICYgT1JzXHJcbiAgICAgIGlmIChvclJlZ2V4cC50ZXN0KGtleSkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCd8fCcpLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5cy5zb21lKGsgPT4gZ2V0UG9saWN5KGsudHJpbSgpKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzLmV2ZXJ5KGsgPT4gZ2V0UG9saWN5KGsudHJpbSgpKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgY29uc3Qgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVudmlyb25tZW50LnByb2R1Y3Rpb24pIGNvbnNvbGUud2FybihtZXNzYWdlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB3YXJuKCdUaGUgbG9jYWxpemF0aW9uIHNvdXJjZSBzZXBhcmF0b3IgKDo6KSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoa2V5IGFzIHN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdGF0ZS5sb2NhbGl6YXRpb24pIHJldHVybiBkZWZhdWx0VmFsdWUgfHwga2V5c1sxXTtcclxuXHJcbiAgICAgIGNvbnN0IHNvdXJjZU5hbWUgPVxyXG4gICAgICAgIGtleXNbMF0gfHxcclxuICAgICAgICBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpIHx8XHJcbiAgICAgICAgc3RhdGUubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIGNvbnN0IHNvdXJjZUtleSA9IGtleXNbMV07XHJcblxyXG4gICAgICBpZiAoc291cmNlTmFtZSA9PT0gJ18nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBzb3VyY2VLZXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc291cmNlTmFtZSkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnTG9jYWxpemF0aW9uIHNvdXJjZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBkZWZhdWx0UmVzb3VyY2VOYW1lIHdhcyBub3QgZGVmaW5lZCEnLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgc291cmNlS2V5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzb3VyY2UgPSBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzW3NvdXJjZU5hbWVdO1xyXG4gICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgIHdhcm4oJ0NvdWxkIG5vdCBmaW5kIGxvY2FsaXphdGlvbiBzb3VyY2U6ICcgKyBzb3VyY2VOYW1lKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxvY2FsaXphdGlvbiA9IHNvdXJjZVtzb3VyY2VLZXldO1xyXG4gICAgICBpZiAodHlwZW9mIGxvY2FsaXphdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gW1RPRE9dOiBuZXh0IGxpbmUgc2hvdWxkIGJlIHJlbW92ZWQgaW4gdjMuMiwgYnJlYWtpbmcgY2hhbmdlISEhXHJcbiAgICAgIGludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXMuZmlsdGVyKHBhcmFtcyA9PiBwYXJhbXMgIT0gbnVsbCk7XHJcbiAgICAgIGlmIChsb2NhbGl6YXRpb24pIGxvY2FsaXphdGlvbiA9IGludGVycG9sYXRlKGxvY2FsaXphdGlvbiwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsb2NhbGl6YXRpb24gIT09ICdzdHJpbmcnKSBsb2NhbGl6YXRpb24gPSAnJztcclxuXHJcbiAgICAgIHJldHVybiBsb2NhbGl6YXRpb24gfHwgZGVmYXVsdFZhbHVlIHx8IChrZXkgYXMgc3RyaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0QXBwQ29uZmlndXJhdGlvbilcclxuICBhZGREYXRhKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4pIHtcclxuICAgIGNvbnN0IGFwaU5hbWUgPSAnZGVmYXVsdCc7XHJcbiAgICBjb25zdCBhcGkgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwaVVybChhcGlOYW1lKSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlPihgJHthcGl9L2FwaS9hYnAvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbmApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChjb25maWd1cmF0aW9uID0+XHJcbiAgICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyYXRpb24gPT4ge1xyXG4gICAgICAgICAgbGV0IGRlZmF1bHRMYW5nOiBzdHJpbmcgPVxyXG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLnNldHRpbmcudmFsdWVzWydBYnAuTG9jYWxpemF0aW9uLkRlZmF1bHRMYW5ndWFnZSddO1xyXG5cclxuICAgICAgICAgIGlmIChkZWZhdWx0TGFuZy5pbmNsdWRlcygnOycpKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmcuc3BsaXQoJzsnKVswXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAnbGFuZycsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ubG9jYWxpemF0aW9uLmN1cnJlbnRDdWx0dXJlLmN1bHR1cmVOYW1lLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSlcclxuICAgICAgICAgICAgPyBvZihudWxsKVxyXG4gICAgICAgICAgICA6IGRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZShkZWZhdWx0TGFuZywgZmFsc2UpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYXRjaEVycm9yKChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChuZXcgUmVzdE9jY3VyRXJyb3IoZXJyKSk7XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRFbnZpcm9ubWVudClcclxuICBzZXRFbnZpcm9ubWVudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4sIHsgZW52aXJvbm1lbnQgfTogU2V0RW52aXJvbm1lbnQpIHtcclxuICAgIHJldHVybiBwYXRjaFN0YXRlKHsgZW52aXJvbm1lbnQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
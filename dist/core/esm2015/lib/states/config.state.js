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
    static getLocalizationResource(resourceName) {
        const selector = createSelector([ConfigState_1], (state) => {
            return state.localization.values[resourceName];
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
            let lang = configuration.localization.currentCulture.cultureName;
            if (lang.includes(';')) {
                lang = lang.split(';')[0];
            }
            document.documentElement.setAttribute('lang', lang);
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(lang, false));
        }), catchError((err) => {
            dispatch(new RestOccurError(err));
            return throwError(err);
        }));
    }
    setEnvironment({ patchState }, { environment }) {
        return patchState({ environment });
    }
};
ConfigState.decorators = [
    { type: Injectable }
];
ConfigState.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
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
    __metadata("design:paramtypes", [HttpClient, Store])
], ConfigState);
export { ConfigState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0lBT2xDLFdBQVcseUJBQVgsV0FBVztJQTBMdEIsWUFBb0IsSUFBZ0IsRUFBVSxLQUFZO1FBQXRDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQXhMOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUMvQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFHRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBbUI7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LFFBQVEsRUFBRSxFQUFrQjtLQUM3QixDQUFDO3FDQTRMMEIsVUFBVSxFQUFpQixLQUFLO0dBMUwvQyxXQUFXLENBZ092QjtTQWhPWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uLCBjcmVhdGVTZWxlY3RvciwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uLCBTZXRFbnZpcm9ubWVudCB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBSZXN0T2NjdXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMvcmVzdC5hY3Rpb25zJztcclxuaW1wb3J0IHsgU2V0TGFuZ3VhZ2UgfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZyc7XHJcbmltcG9ydCB7IGludGVycG9sYXRlIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5nLXV0aWxzJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBcGlVcmwoa2V5Pzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIChzdGF0ZS5lbnZpcm9ubWVudC5hcGlzW2tleSB8fCAnZGVmYXVsdCddIHx8IHN0YXRlLmVudmlyb25tZW50LmFwaXMuZGVmYXVsdCkudXJsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEZlYXR1cmUoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5mZWF0dXJlcy52YWx1ZXNba2V5XSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U2V0dGluZyhrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzW2tleV0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmdzKGtleXdvcmQ/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzbnEoKCkgPT4gc3RhdGUuc2V0dGluZy52YWx1ZXMsIHt9KTtcclxuXHJcbiAgICAgIGlmICgha2V5d29yZCkgcmV0dXJuIHNldHRpbmdzO1xyXG5cclxuICAgICAgY29uc3Qga2V5c0ZvdW5kID0gT2JqZWN0LmtleXMoc2V0dGluZ3MpLmZpbHRlcihrZXkgPT4ga2V5LmluZGV4T2Yoa2V5d29yZCkgPiAtMSk7XHJcblxyXG4gICAgICByZXR1cm4ga2V5c0ZvdW5kLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHNldHRpbmdzW2tleV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwge30pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyYW50ZWRQb2xpY3koa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpOiBib29sZWFuID0+IHtcclxuICAgICAgaWYgKCFrZXkpIHJldHVybiB0cnVlO1xyXG4gICAgICBjb25zdCBnZXRQb2xpY3kgPSAoazogc3RyaW5nKSA9PiBzbnEoKCkgPT4gc3RhdGUuYXV0aC5ncmFudGVkUG9saWNpZXNba10sIGZhbHNlKTtcclxuXHJcbiAgICAgIGNvbnN0IG9yUmVnZXhwID0gL1xcfFxcfC9nO1xyXG4gICAgICBjb25zdCBhbmRSZWdleHAgPSAvJiYvZztcclxuXHJcbiAgICAgIC8vIFRPRE86IEFsbG93IGNvbWJpbmF0aW9uIG9mIEFORHMgJiBPUnNcclxuICAgICAgaWYgKG9yUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJ3x8JykuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzLnNvbWUoayA9PiBnZXRQb2xpY3koay50cmltKCkpKTtcclxuICAgICAgfSBlbHNlIGlmIChhbmRSZWdleHAudGVzdChrZXkpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnJiYnKS5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleXMuZXZlcnkoayA9PiBnZXRQb2xpY3koay50cmltKCkpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGdldFBvbGljeShrZXkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExvY2FsaXphdGlvblJlc291cmNlKHJlc291cmNlTmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKToge1xyXG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICB9ID0+IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmxvY2FsaXphdGlvbi52YWx1ZXNbcmVzb3VyY2VOYW1lXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgY29uc3Qgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVudmlyb25tZW50LnByb2R1Y3Rpb24pIGNvbnNvbGUud2FybihtZXNzYWdlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB3YXJuKCdUaGUgbG9jYWxpemF0aW9uIHNvdXJjZSBzZXBhcmF0b3IgKDo6KSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoa2V5IGFzIHN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdGF0ZS5sb2NhbGl6YXRpb24pIHJldHVybiBkZWZhdWx0VmFsdWUgfHwga2V5c1sxXTtcclxuXHJcbiAgICAgIGNvbnN0IHNvdXJjZU5hbWUgPVxyXG4gICAgICAgIGtleXNbMF0gfHxcclxuICAgICAgICBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpIHx8XHJcbiAgICAgICAgc3RhdGUubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIGNvbnN0IHNvdXJjZUtleSA9IGtleXNbMV07XHJcblxyXG4gICAgICBpZiAoc291cmNlTmFtZSA9PT0gJ18nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBzb3VyY2VLZXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc291cmNlTmFtZSkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnTG9jYWxpemF0aW9uIHNvdXJjZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBkZWZhdWx0UmVzb3VyY2VOYW1lIHdhcyBub3QgZGVmaW5lZCEnLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgc291cmNlS2V5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzb3VyY2UgPSBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzW3NvdXJjZU5hbWVdO1xyXG4gICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgIHdhcm4oJ0NvdWxkIG5vdCBmaW5kIGxvY2FsaXphdGlvbiBzb3VyY2U6ICcgKyBzb3VyY2VOYW1lKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxvY2FsaXphdGlvbiA9IHNvdXJjZVtzb3VyY2VLZXldO1xyXG4gICAgICBpZiAodHlwZW9mIGxvY2FsaXphdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gW1RPRE9dOiBuZXh0IGxpbmUgc2hvdWxkIGJlIHJlbW92ZWQgaW4gdjMuMiwgYnJlYWtpbmcgY2hhbmdlISEhXHJcbiAgICAgIGludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXMuZmlsdGVyKHBhcmFtcyA9PiBwYXJhbXMgIT0gbnVsbCk7XHJcbiAgICAgIGlmIChsb2NhbGl6YXRpb24pIGxvY2FsaXphdGlvbiA9IGludGVycG9sYXRlKGxvY2FsaXphdGlvbiwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsb2NhbGl6YXRpb24gIT09ICdzdHJpbmcnKSBsb2NhbGl6YXRpb24gPSAnJztcclxuXHJcbiAgICAgIHJldHVybiBsb2NhbGl6YXRpb24gfHwgZGVmYXVsdFZhbHVlIHx8IChrZXkgYXMgc3RyaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0QXBwQ29uZmlndXJhdGlvbilcclxuICBhZGREYXRhKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PENvbmZpZy5TdGF0ZT4pIHtcclxuICAgIGNvbnN0IGFwaU5hbWUgPSAnZGVmYXVsdCc7XHJcbiAgICBjb25zdCBhcGkgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwaVVybChhcGlOYW1lKSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQ8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlPihgJHthcGl9L2FwaS9hYnAvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbmApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChjb25maWd1cmF0aW9uID0+XHJcbiAgICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uY29uZmlndXJhdGlvbixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICksXHJcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyYXRpb24gPT4ge1xyXG4gICAgICAgICAgbGV0IGxhbmcgPSBjb25maWd1cmF0aW9uLmxvY2FsaXphdGlvbi5jdXJyZW50Q3VsdHVyZS5jdWx0dXJlTmFtZTtcclxuXHJcbiAgICAgICAgICBpZiAobGFuZy5pbmNsdWRlcygnOycpKSB7XHJcbiAgICAgICAgICAgIGxhbmcgPSBsYW5nLnNwbGl0KCc7JylbMF07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGxhbmcpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSlcclxuICAgICAgICAgICAgPyBvZihudWxsKVxyXG4gICAgICAgICAgICA6IGRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZShsYW5nLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcihlcnIpKTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldEVudmlyb25tZW50KVxyXG4gIHNldEVudmlyb25tZW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBlbnZpcm9ubWVudCB9OiBTZXRFbnZpcm9ubWVudCkge1xyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoeyBlbnZpcm9ubWVudCB9KTtcclxuICB9XHJcbn1cclxuIl19
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
            interpolateParams = interpolateParams.filter(params => params != null);
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach(param => {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                });
            }
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
        return patchState({
            environment,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3N0YXRlcy9jb25maWcuc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBZ0IsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVc7SUEwS3RCLFlBQW9CLElBQWdCLEVBQVUsS0FBWTtRQUF0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUF4SzlELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBbUI7UUFDL0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBR0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQW1CO1FBQzNDLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxX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RSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUNwQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUdELGNBQWMsQ0FBQyxFQUFFLFVBQVUsRUFBOEIsRUFBRSxFQUFFLFdBQVcsRUFBa0I7UUFDeEYsT0FBTyxVQUFVLENBQUM7WUFDaEIsV0FBVztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBeENDO0lBREMsTUFBTSxDQUFDLG1CQUFtQixDQUFDOzs7OzBDQWlDM0I7QUFHRDtJQURDLE1BQU0sQ0FBQyxjQUFjLENBQUM7OzZDQUNxRCxjQUFjOztpREFJekY7QUFsTkQ7SUFEQyxRQUFRLEVBQUU7Ozs7K0JBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7OzsyQ0FHVjtBQVRVLFdBQVc7SUFMdkIsS0FBSyxDQUFlO1FBQ25CLElBQUksRUFBRSxhQUFhO1FBQ25CLFFBQVEsRUFBRSxFQUFrQjtLQUM3QixDQUFDO0lBQ0QsVUFBVSxFQUFFO3FDQTJLZSxVQUFVLEVBQWlCLEtBQUs7R0ExSy9DLFdBQVcsQ0FxTnZCO1NBck5ZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIGNyZWF0ZVNlbGVjdG9yLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24sIFNldEVudmlyb25tZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFJlc3RPY2N1ckVycm9yIH0gZnJvbSAnLi4vYWN0aW9ucy9yZXN0LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXRMYW5ndWFnZSB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zZXNzaW9uLnN0YXRlJztcclxuXHJcbkBTdGF0ZTxDb25maWcuU3RhdGU+KHtcclxuICBuYW1lOiAnQ29uZmlnU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7fSBhcyBDb25maWcuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRBbGwoc3RhdGU6IENvbmZpZy5TdGF0ZSkge1xyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0QXBwbGljYXRpb25JbmZvKHN0YXRlOiBDb25maWcuU3RhdGUpOiBDb25maWcuQXBwbGljYXRpb24ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmVudmlyb25tZW50LmFwcGxpY2F0aW9uIHx8ICh7fSBhcyBDb25maWcuQXBwbGljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE9uZShrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihbQ29uZmlnU3RhdGVdLCAoc3RhdGU6IENvbmZpZy5TdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gc3RhdGVba2V5XTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZWVwKGtleXM6IHN0cmluZ1tdIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGtleXMgPSBrZXlzLnNwbGl0KCcuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBkb3Qgc3RyaW5nIG9yIGFuIHN0cmluZyBhcnJheS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiAoa2V5cyBhcyBzdHJpbmdbXSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICAgIGlmIChhY2MpIHtcclxuICAgICAgICAgIHJldHVybiBhY2NbdmFsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sIHN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRBcGlVcmwoa2V5Pzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIChzdGF0ZS5lbnZpcm9ubWVudC5hcGlzW2tleSB8fCAnZGVmYXVsdCddIHx8IHN0YXRlLmVudmlyb25tZW50LmFwaXMuZGVmYXVsdCkudXJsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFNldHRpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoW0NvbmZpZ1N0YXRlXSwgKHN0YXRlOiBDb25maWcuU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHNucSgoKSA9PiBzdGF0ZS5zZXR0aW5nLnZhbHVlc1trZXldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTZXR0aW5ncyhrZXl3b3JkPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gc25xKCgpID0+IHN0YXRlLnNldHRpbmcudmFsdWVzLCB7fSk7XHJcblxyXG4gICAgICBpZiAoIWtleXdvcmQpIHJldHVybiBzZXR0aW5ncztcclxuXHJcbiAgICAgIGNvbnN0IGtleXNGb3VuZCA9IE9iamVjdC5rZXlzKHNldHRpbmdzKS5maWx0ZXIoa2V5ID0+IGtleS5pbmRleE9mKGtleXdvcmQpID4gLTEpO1xyXG5cclxuICAgICAgcmV0dXJuIGtleXNGb3VuZC5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBzZXR0aW5nc1trZXldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRHcmFudGVkUG9saWN5KGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIGlmICgha2V5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgY29uc3QgZ2V0UG9saWN5ID0gKGs6IHN0cmluZykgPT4gc25xKCgpID0+IHN0YXRlLmF1dGguZ3JhbnRlZFBvbGljaWVzW2tdLCBmYWxzZSk7XHJcblxyXG4gICAgICBjb25zdCBvclJlZ2V4cCA9IC9cXHxcXHwvZztcclxuICAgICAgY29uc3QgYW5kUmVnZXhwID0gLyYmL2c7XHJcblxyXG4gICAgICAvLyBUT0RPOiBBbGxvdyBjb21iaW5hdGlvbiBvZiBBTkRzICYgT1JzXHJcbiAgICAgIGlmIChvclJlZ2V4cC50ZXN0KGtleSkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCd8fCcpLmZpbHRlcihCb29sZWFuKTtcclxuXHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5cy5zb21lKGsgPT4gZ2V0UG9saWN5KGsudHJpbSgpKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYW5kUmVnZXhwLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJyYmJykuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzLmV2ZXJ5KGsgPT4gZ2V0UG9saWN5KGsudHJpbSgpKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBnZXRQb2xpY3koa2V5KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRMb2NhbGl6YXRpb24oXHJcbiAgICBrZXk6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCxcclxuICAgIC4uLmludGVycG9sYXRlUGFyYW1zOiBzdHJpbmdbXVxyXG4gICkge1xyXG4gICAgaWYgKCFrZXkpIGtleSA9ICcnO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xyXG4gICAgICBrZXkgPSBrZXkua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJzo6JykgYXMgc3RyaW5nW107XHJcbiAgICBjb25zdCBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFtDb25maWdTdGF0ZV0sIChzdGF0ZTogQ29uZmlnLlN0YXRlKTogc3RyaW5nID0+IHtcclxuICAgICAgY29uc3Qgd2FybiA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVudmlyb25tZW50LnByb2R1Y3Rpb24pIGNvbnNvbGUud2FybihtZXNzYWdlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICB3YXJuKCdUaGUgbG9jYWxpemF0aW9uIHNvdXJjZSBzZXBhcmF0b3IgKDo6KSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoa2V5IGFzIHN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdGF0ZS5sb2NhbGl6YXRpb24pIHJldHVybiBkZWZhdWx0VmFsdWUgfHwga2V5c1sxXTtcclxuXHJcbiAgICAgIGNvbnN0IHNvdXJjZU5hbWUgPVxyXG4gICAgICAgIGtleXNbMF0gfHxcclxuICAgICAgICBzbnEoKCkgPT4gc3RhdGUuZW52aXJvbm1lbnQubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWUpIHx8XHJcbiAgICAgICAgc3RhdGUubG9jYWxpemF0aW9uLmRlZmF1bHRSZXNvdXJjZU5hbWU7XHJcbiAgICAgIGNvbnN0IHNvdXJjZUtleSA9IGtleXNbMV07XHJcblxyXG4gICAgICBpZiAoc291cmNlTmFtZSA9PT0gJ18nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCBzb3VyY2VLZXk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc291cmNlTmFtZSkge1xyXG4gICAgICAgIHdhcm4oXHJcbiAgICAgICAgICAnTG9jYWxpemF0aW9uIHNvdXJjZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQgYW5kIHRoZSBkZWZhdWx0UmVzb3VyY2VOYW1lIHdhcyBub3QgZGVmaW5lZCEnLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgc291cmNlS2V5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzb3VyY2UgPSBzdGF0ZS5sb2NhbGl6YXRpb24udmFsdWVzW3NvdXJjZU5hbWVdO1xyXG4gICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgIHdhcm4oJ0NvdWxkIG5vdCBmaW5kIGxvY2FsaXphdGlvbiBzb3VyY2U6ICcgKyBzb3VyY2VOYW1lKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGxvY2FsaXphdGlvbiA9IHNvdXJjZVtzb3VyY2VLZXldO1xyXG4gICAgICBpZiAodHlwZW9mIGxvY2FsaXphdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHNvdXJjZUtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcy5maWx0ZXIocGFyYW1zID0+IHBhcmFtcyAhPSBudWxsKTtcclxuICAgICAgaWYgKGxvY2FsaXphdGlvbiAmJiBpbnRlcnBvbGF0ZVBhcmFtcyAmJiBpbnRlcnBvbGF0ZVBhcmFtcy5sZW5ndGgpIHtcclxuICAgICAgICBpbnRlcnBvbGF0ZVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgICAgIGxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvbi5yZXBsYWNlKC9bXFwnXFxcIl0/XFx7W1xcZF0rXFx9W1xcJ1xcXCJdPy8sIHBhcmFtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsb2NhbGl6YXRpb24gIT09ICdzdHJpbmcnKSBsb2NhbGl6YXRpb24gPSAnJztcclxuICAgICAgcmV0dXJuIGxvY2FsaXphdGlvbiB8fCBkZWZhdWx0VmFsdWUgfHwgKGtleSBhcyBzdHJpbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgQEFjdGlvbihHZXRBcHBDb25maWd1cmF0aW9uKVxyXG4gIGFkZERhdGEoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPikge1xyXG4gICAgY29uc3QgYXBpTmFtZSA9ICdkZWZhdWx0JztcclxuICAgIGNvbnN0IGFwaSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QXBpVXJsKGFwaU5hbWUpKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldDxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uUmVzcG9uc2U+KGAke2FwaX0vYXBpL2FicC9hcHBsaWNhdGlvbi1jb25maWd1cmF0aW9uYClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKGNvbmZpZ3VyYXRpb24gPT5cclxuICAgICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgKSxcclxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlndXJhdGlvbiA9PiB7XHJcbiAgICAgICAgICBsZXQgZGVmYXVsdExhbmc6IHN0cmluZyA9XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24uc2V0dGluZy52YWx1ZXNbJ0FicC5Mb2NhbGl6YXRpb24uRGVmYXVsdExhbmd1YWdlJ107XHJcblxyXG4gICAgICAgICAgaWYgKGRlZmF1bHRMYW5nLmluY2x1ZGVzKCc7JykpIHtcclxuICAgICAgICAgICAgZGVmYXVsdExhbmcgPSBkZWZhdWx0TGFuZy5zcGxpdCgnOycpWzBdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICdsYW5nJyxcclxuICAgICAgICAgICAgY29uZmlndXJhdGlvbi5sb2NhbGl6YXRpb24uY3VycmVudEN1bHR1cmUuY3VsdHVyZU5hbWUsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKVxyXG4gICAgICAgICAgICA/IG9mKG51bGwpXHJcbiAgICAgICAgICAgIDogZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKGRlZmF1bHRMYW5nLCBmYWxzZSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcihlcnIpKTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldEVudmlyb25tZW50KVxyXG4gIHNldEVudmlyb25tZW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8Q29uZmlnLlN0YXRlPiwgeyBlbnZpcm9ubWVudCB9OiBTZXRFbnZpcm9ubWVudCkge1xyXG4gICAgcmV0dXJuIHBhdGNoU3RhdGUoe1xyXG4gICAgICBlbnZpcm9ubWVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
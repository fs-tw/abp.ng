import { __decorate, __metadata, __param } from 'tslib';
import { Injectable, Input, ViewChild, Component, ChangeDetectionStrategy, Optional, SkipSelf, ChangeDetectorRef, ɵɵdefineInjectable, InjectionToken, ViewChildren, QueryList, Inject, TemplateRef, LOCALE_ID, Injector, Directive, Host, ViewContainerRef, NgModule } from '@angular/core';
import { formatDate } from '@angular/common';
import { NgbDateAdapter, NgbTimeAdapter, NgbInputDatepicker, NgbTimepicker, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ControlContainer, Validators, NgControl, FormGroup, FormControl } from '@angular/forms';
import { LinkedList } from '@abp/utils';
import { TrackByService, getShortDateShortTimeFormat, getShortTimeFormat, getShortDateFormat, ListService, ConfigStateService, CoreModule, LocalizationService, createLocalizationPipeKeyGenerator, AbpValidators } from '@abp/ng.core';
import { of, merge, pipe, zip } from 'rxjs';
import { map, filter, take, switchMap } from 'rxjs/operators';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { createSelector } from '@ngxs/store';

let DateTimeAdapter = class DateTimeAdapter {
    fromModel(value) {
        if (!value)
            return null;
        const date = new Date(value);
        if (isNaN(date))
            return null;
        this.value = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
        return this.value;
    }
    toModel(value) {
        if (!value)
            return '';
        const now = new Date();
        value = Object.assign(Object.assign({ year: now.getUTCFullYear(), month: now.getMonth() + 1, day: now.getDate(), hour: 0, minute: 0, second: 0 }, this.value), value);
        const date = new Date(value.year, value.month - 1, value.day, value.hour, value.minute, value.second);
        return new Date(date).toISOString();
    }
};
DateTimeAdapter = __decorate([
    Injectable()
], DateTimeAdapter);

let DateAdapter = class DateAdapter extends NgbDateAdapter {
    fromModel(value) {
        if (!value)
            return null;
        const date = new Date(value);
        if (isNaN(date))
            return null;
        return {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        };
    }
    toModel(value) {
        if (!value)
            return '';
        const date = new Date(value.year, value.month - 1, value.day);
        const formattedDate = formatDate(date, 'yyyy-MM-dd', 'en');
        return formattedDate;
    }
};
DateAdapter = __decorate([
    Injectable()
], DateAdapter);

let TimeAdapter = class TimeAdapter extends NgbTimeAdapter {
    fromModel(value) {
        if (!value)
            return null;
        const date = isTimeStr(value)
            ? new Date(0, 0, 1, ...value.split(':').map(Number))
            : new Date(value);
        if (isNaN(date))
            return null;
        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        };
    }
    toModel(value) {
        if (!value)
            return '';
        const date = new Date(0, 0, 1, value.hour, value.minute, value.second);
        const formattedDate = formatDate(date, 'HH:mm', 'en');
        return formattedDate;
    }
};
TimeAdapter = __decorate([
    Injectable()
], TimeAdapter);
function isTimeStr(value) {
    return /^((2[123])|[01][0-9])(\:[0-5][0-9]){1,2}$/.test(String(value));
}

/* tslint:disable:variable-name */
class PropList extends LinkedList {
}
class PropData {
    get data() {
        return {
            getInjected: this.getInjected,
            index: this.index,
            record: this.record,
        };
    }
}
class Prop {
    constructor(type, name, displayName, permission, visible = _ => true, isExtra = false) {
        this.type = type;
        this.name = name;
        this.displayName = displayName;
        this.permission = permission;
        this.visible = visible;
        this.isExtra = isExtra;
        this.displayName = this.displayName || this.name;
    }
}
class PropsFactory {
    constructor() {
        this.contributorCallbacks = {};
    }
    get(name) {
        this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
        return new this._ctor(this.contributorCallbacks[name]);
    }
}
class Props {
    constructor(callbackList) {
        this.callbackList = callbackList;
    }
    get props() {
        const propList = new this._ctor();
        this.callbackList.forEach(callback => callback(propList));
        return propList;
    }
    addContributor(contributeCallback) {
        this.callbackList.push(contributeCallback);
    }
    clearContributors() {
        while (this.callbackList.length)
            this.callbackList.pop();
    }
}

class FormPropList extends PropList {
}
class FormProps extends Props {
    constructor() {
        super(...arguments);
        this._ctor = FormPropList;
    }
}
class CreateFormPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = FormProps;
    }
}
class EditFormPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = FormProps;
    }
}
class FormProp extends Prop {
    constructor(options) {
        super(options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);
        this.asyncValidators = options.asyncValidators || (_ => []);
        this.validators = options.validators || (_ => []);
        this.disabled = options.disabled || (_ => false);
        this.readonly = options.readonly || (_ => false);
        this.autocomplete = options.autocomplete || 'off';
        this.options = options.options;
        this.id = options.id || options.name;
        const defaultValue = options.defaultValue;
        this.defaultValue = isFalsyValue(defaultValue) ? defaultValue : defaultValue || null;
    }
    static create(options) {
        return new FormProp(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(FormProp.create);
    }
}
class FormPropData extends PropData {
    constructor(injector, record) {
        super();
        this.record = record;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
    }
}
function isFalsyValue(defaultValue) {
    return [0, '', false].indexOf(defaultValue) > -1;
}

function selfFactory(dependency) {
    return dependency;
}

const ɵ0 = selfFactory;
let DateTimePickerComponent = class DateTimePickerComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    setDate(datestr) {
        this.date.writeValue(datestr);
    }
    setTime(datestr) {
        this.time.writeValue(datestr);
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormProp)
], DateTimePickerComponent.prototype, "prop", void 0);
__decorate([
    ViewChild(NgbInputDatepicker),
    __metadata("design:type", NgbInputDatepicker)
], DateTimePickerComponent.prototype, "date", void 0);
__decorate([
    ViewChild(NgbTimepicker),
    __metadata("design:type", NgbTimepicker)
], DateTimePickerComponent.prototype, "time", void 0);
DateTimePickerComponent = __decorate([
    Component({
        exportAs: 'abpDateTimePicker',
        selector: 'abp-date-time-picker',
        template: `
    <input
      [id]="prop.id"
      [formControlName]="prop.name"
      (ngModelChange)="setTime($event)"
      (click)="datepicker.open()"
      (keyup.space)="datepicker.open()"
      ngbDatepicker
      #datepicker="ngbDatepicker"
      type="text"
      class="form-control"
    />
    <ngb-timepicker
      #timepicker
      [formControlName]="prop.name"
      (ngModelChange)="setDate($event)"
    ></ngb-timepicker>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        viewProviders: [
            {
                provide: ControlContainer,
                useFactory: ɵ0,
                deps: [[new Optional(), new SkipSelf(), ControlContainer]],
            },
            {
                provide: NgbDateAdapter,
                useClass: DateTimeAdapter,
            },
            {
                provide: NgbTimeAdapter,
                useClass: DateTimeAdapter,
            },
        ]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], DateTimePickerComponent);

const ɵ0$1 = selfFactory;
let ExtensibleFormPropComponent = class ExtensibleFormPropComponent {
    constructor(cdRef, track) {
        this.cdRef = cdRef;
        this.track = track;
        this.options$ = of([]);
        this.validators = [];
    }
    get asterisk() {
        return this.validators.some(validator => validator === Validators.required) ? '*' : '';
    }
    getComponent(prop) {
        if (prop.options)
            return 'select';
        switch (prop.type) {
            case "boolean" /* Boolean */:
                return 'checkbox';
            case "date" /* Date */:
                return 'date';
            case "dateTime" /* DateTime */:
                return 'dateTime';
            case "text" /* Text */:
                return 'textarea';
            case "time" /* Time */:
                return 'time';
            default:
                return 'input';
        }
    }
    getType(prop) {
        switch (prop.type) {
            case "date" /* Date */:
            case "string" /* String */:
                return 'text';
            case "boolean" /* Boolean */:
                return 'checkbox';
            case "number" /* Number */:
                return 'number';
            case "email" /* Email */:
                return 'email';
            case "password" /* Password */:
                return 'password';
            default:
                return 'hidden';
        }
    }
    ngOnChanges({ prop }) {
        const options = prop.currentValue.options;
        const readonly = prop.currentValue.readonly;
        const disabled = prop.currentValue.disabled;
        const validators = prop.currentValue.validators;
        if (options)
            this.options$ = options(this.data);
        if (readonly)
            this.readonly = readonly(this.data);
        if (disabled)
            this.disabled = disabled(this.data);
        if (validators)
            this.validators = validators(this.data);
    }
};
__decorate([
    Input(),
    __metadata("design:type", PropData)
], ExtensibleFormPropComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormProp)
], ExtensibleFormPropComponent.prototype, "prop", void 0);
ExtensibleFormPropComponent = __decorate([
    Component({
        selector: 'abp-extensible-form-prop',
        template: "<div class=\"form-group\" [abpPermission]=\"prop.permission\" [ngSwitch]=\"getComponent(prop)\">\r\n  <ng-template ngSwitchCase=\"input\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [autocomplete]=\"prop.autocomplete\"\r\n      [type]=\"getType(prop)\"\r\n      [abpDisabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"checkbox\">\r\n    <div class=\"custom-checkbox custom-control\" validationTarget>\r\n      <input\r\n        [id]=\"prop.id\"\r\n        [formControlName]=\"prop.name\"\r\n        [abpDisabled]=\"disabled\"\r\n        type=\"checkbox\"\r\n        class=\"custom-control-input\"\r\n      />\r\n      <label [htmlFor]=\"prop.id\" class=\"custom-control-label\"\r\n        >{{ prop.displayName | abpLocalization }} {{ asterisk }}</label\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"select\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <select\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"disabled\"\r\n      class=\"custom-select form-control\"\r\n    >\r\n      <option\r\n        *ngFor=\"let option of options$ | async; trackBy: track.by('value')\"\r\n        [ngValue]=\"option.value\"\r\n        >{{ option.key }}</option\r\n      >\r\n    </select>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"date\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      (click)=\"datepicker.open()\"\r\n      (keyup.space)=\"datepicker.open()\"\r\n      ngbDatepicker\r\n      #datepicker=\"ngbDatepicker\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"time\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <ngb-timepicker [formControlName]=\"prop.name\"></ngb-timepicker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"dateTime\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <abp-date-time-picker [prop]=\"prop\"></abp-date-time-picker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"textarea\">\r\n    <label [htmlFor]=\"prop.id\">{{ prop.displayName | abpLocalization }} {{ asterisk }}</label>\r\n    <textarea\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"disabled\"\r\n      [readonly]=\"readonly\"\r\n      class=\"form-control\"\r\n    ></textarea>\r\n  </ng-template>\r\n</div>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        viewProviders: [
            {
                provide: ControlContainer,
                useFactory: ɵ0$1,
                deps: [[new Optional(), new SkipSelf(), ControlContainer]],
            },
            { provide: NgbDateAdapter, useClass: DateAdapter },
            { provide: NgbTimeAdapter, useClass: TimeAdapter },
        ]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, TrackByService])
], ExtensibleFormPropComponent);

const EXTRA_PROPERTIES_KEY = 'extraProperties';

/* tslint:disable:variable-name */
class ActionList extends LinkedList {
}
class ActionData {
    get data() {
        return {
            getInjected: this.getInjected,
            index: this.index,
            record: this.record,
        };
    }
}
class Action {
    constructor(permission, visible = _ => true, action = _ => { }) {
        this.permission = permission;
        this.visible = visible;
        this.action = action;
    }
}
class ActionsFactory {
    constructor() {
        this.contributorCallbacks = {};
    }
    get(name) {
        this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
        return new this._ctor(this.contributorCallbacks[name]);
    }
}
class Actions {
    constructor(callbackList) {
        this.callbackList = callbackList;
    }
    get actions() {
        const actionList = new this._ctor();
        this.callbackList.forEach(callback => callback(actionList));
        return actionList;
    }
    addContributor(contributeCallback) {
        this.callbackList.push(contributeCallback);
    }
    clearContributors() {
        while (this.callbackList.length)
            this.callbackList.pop();
    }
}

class EntityActionList extends ActionList {
}
class EntityActions extends Actions {
    constructor() {
        super(...arguments);
        this._ctor = EntityActionList;
    }
}
class EntityActionsFactory extends ActionsFactory {
    constructor() {
        super(...arguments);
        this._ctor = EntityActions;
    }
}
class EntityAction extends Action {
    constructor(options) {
        super(options.permission, options.visible, options.action);
        this.text = options.text;
        this.icon = options.icon || '';
    }
    static create(options) {
        return new EntityAction(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(EntityAction.create);
    }
}

class EntityPropList extends PropList {
}
class EntityProps extends Props {
    constructor() {
        super(...arguments);
        this._ctor = EntityPropList;
    }
}
class EntityPropsFactory extends PropsFactory {
    constructor() {
        super(...arguments);
        this._ctor = EntityProps;
    }
}
class EntityProp extends Prop {
    constructor(options) {
        super(options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra);
        this.columnWidth = options.columnWidth;
        this.sortable = options.sortable || false;
        this.valueResolver = options.valueResolver || (data => of(data.record[this.name]));
        this.action = options.action || (_ => { });
    }
    static create(options) {
        return new EntityProp(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(EntityProp.create);
    }
}

class ToolbarActionList extends ActionList {
}
class ToolbarActions extends Actions {
    constructor() {
        super(...arguments);
        this._ctor = ToolbarActionList;
    }
}
class ToolbarActionsFactory extends ActionsFactory {
    constructor() {
        super(...arguments);
        this._ctor = ToolbarActions;
    }
}
class ToolbarAction extends Action {
    constructor(options) {
        super(options.permission, options.visible, options.action);
        this.text = options.text;
        this.icon = options.icon || '';
    }
    static create(options) {
        return new ToolbarAction(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(ToolbarAction.create);
    }
}
class ToolbarComponent extends Action {
    constructor(options) {
        super(options.permission, options.visible, options.action);
        this.component = options.component;
    }
    static create(options) {
        return new ToolbarComponent(options);
    }
    static createMany(arrayOfOptions) {
        return arrayOfOptions.map(ToolbarComponent.create);
    }
}

let ExtensionsService = class ExtensionsService {
    constructor() {
        this.entityActions = new EntityActionsFactory();
        this.toolbarActions = new ToolbarActionsFactory();
        this.entityProps = new EntityPropsFactory();
        this.createFormProps = new CreateFormPropsFactory();
        this.editFormProps = new EditFormPropsFactory();
    }
};
ExtensionsService.ɵprov = ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
ExtensionsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ExtensionsService);

const EXTENSIONS_IDENTIFIER = new InjectionToken('EXTENSIONS_IDENTIFIER');
const EXTENSIONS_ACTION_TYPE = new InjectionToken('EXTENSIONS_ACTION_TYPE');
const EXTENSIONS_ACTION_DATA = new InjectionToken('EXTENSIONS_ACTION_DATA');
const EXTENSIONS_ACTION_CALLBACK = new InjectionToken('EXTENSIONS_ACTION_DATA');

const ɵ0$2 = selfFactory;
let ExtensibleFormComponent = class ExtensibleFormComponent {
    constructor(cdRef, track, container, extensions, identifier) {
        this.cdRef = cdRef;
        this.track = track;
        this.container = container;
        this.extensions = extensions;
        this.identifier = identifier;
        this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
    }
    set selectedRecord(record) {
        const type = !record || JSON.stringify(record) === '{}' ? 'create' : 'edit';
        this.propList = this.extensions[`${type}FormProps`].get(this.identifier).props;
        this.record = record;
    }
    get form() {
        return (this.container ? this.container.control : { controls: {} });
    }
    get extraProperties() {
        return (this.form.controls.extraProperties || { controls: {} });
    }
};
__decorate([
    ViewChildren(ExtensibleFormPropComponent),
    __metadata("design:type", QueryList)
], ExtensibleFormComponent.prototype, "formProps", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ExtensibleFormComponent.prototype, "selectedRecord", null);
ExtensibleFormComponent = __decorate([
    Component({
        exportAs: 'abpExtensibleForm',
        selector: 'abp-extensible-form',
        template: "<ng-container *ngIf=\"form\">\r\n  <ng-container *abpPropData=\"let data; fromList: propList; withRecord: record\">\r\n    <ng-container *ngFor=\"let prop of propList; trackBy: track.by('name')\">\r\n      <ng-container *ngIf=\"prop.visible(data)\">\r\n        <ng-container\r\n          [formGroupName]=\"extraPropertiesKey\"\r\n          *ngIf=\"extraProperties.controls[prop.name]; else tempDefault\"\r\n        >\r\n          <abp-extensible-form-prop [prop]=\"prop\" [data]=\"data\"></abp-extensible-form-prop>\r\n        </ng-container>\r\n\r\n        <ng-template #tempDefault>\r\n          <abp-extensible-form-prop\r\n            *ngIf=\"form.get(prop.name)\"\r\n            [prop]=\"prop\"\r\n            [data]=\"data\"\r\n          ></abp-extensible-form-prop>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        viewProviders: [
            {
                provide: ControlContainer,
                useFactory: ɵ0$2,
                deps: [[new Optional(), new SkipSelf(), ControlContainer]],
            },
        ]
    }),
    __param(4, Inject(EXTENSIONS_IDENTIFIER)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        TrackByService,
        ControlContainer,
        ExtensionsService, String])
], ExtensibleFormComponent);

const DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
let ExtensibleTableComponent = class ExtensibleTableComponent {
    constructor(locale, config, injector) {
        this.locale = locale;
        this.config = config;
        this.trackByFn = (_, item) => item.name;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
        const extensions = injector.get(ExtensionsService);
        const name = injector.get(EXTENSIONS_IDENTIFIER);
        this.propList = extensions.entityProps.get(name).props;
        this.actionList = extensions['entityActions'].get(name)
            .actions;
        this.setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
    }
    set actionsText(value) {
        this._actionsText = value;
    }
    get actionsText() {
        var _a;
        return (_a = this._actionsText) !== null && _a !== void 0 ? _a : (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
    }
    set actionsColumnWidth(width) {
        this.setColumnWidths(width ? Number(width) : undefined);
    }
    setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
    getDate(value, format) {
        return value ? formatDate(value, format, this.locale) : '';
    }
    getIcon(value) {
        return value
            ? '<div class="text-center text-success"><i class="fa fa-check"></i></div>'
            : '<div class="text-center text-danger"><i class="fa fa-times"></i></div>';
    }
    getContent(prop, data) {
        return prop.valueResolver(data).pipe(map(value => {
            switch (prop.type) {
                case "boolean" /* Boolean */:
                    return this.getIcon(value);
                case "date" /* Date */:
                    return this.getDate(value, getShortDateFormat(this.config));
                case "time" /* Time */:
                    return this.getDate(value, getShortTimeFormat(this.config));
                case "dateTime" /* DateTime */:
                    return this.getDate(value, getShortDateShortTimeFormat(this.config));
                default:
                    return value;
                // More types can be handled in the future
            }
        }));
    }
    ngOnChanges({ data }) {
        if (!(data === null || data === void 0 ? void 0 : data.currentValue))
            return;
        this.data = data.currentValue.map((record, index) => {
            this.propList.forEach(prop => {
                const propData = { getInjected: this.getInjected, record, index };
                record[`_${prop.value.name}`] = {
                    visible: prop.value.visible(propData),
                    value: this.getContent(prop.value, propData),
                };
            });
            return record;
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ExtensibleTableComponent.prototype, "actionsText", null);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ExtensibleTableComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", ListService)
], ExtensibleTableComponent.prototype, "list", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ExtensibleTableComponent.prototype, "recordsTotal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ExtensibleTableComponent.prototype, "actionsColumnWidth", null);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], ExtensibleTableComponent.prototype, "actionsTemplate", void 0);
ExtensibleTableComponent = __decorate([
    Component({
        exportAs: 'abpExtensibleTable',
        selector: 'abp-extensible-table',
        template: "<ngx-datatable default [rows]=\"data\" [count]=\"recordsTotal\" [list]=\"list\">\r\n  <ngx-datatable-column\r\n    *ngIf=\"actionsTemplate || actionList.length\"\r\n    [name]=\"actionsText | abpLocalization\"\r\n    [maxWidth]=\"columnWidths[0]\"\r\n    [width]=\"columnWidths[0]\"\r\n    [sortable]=\"false\"\r\n  >\r\n    <ng-template let-row=\"row\" let-i=\"rowIndex\" ngx-datatable-cell-template>\r\n      <ng-container\r\n        *ngTemplateOutlet=\"actionsTemplate || gridActions; context: { $implicit: row, index: i }\"\r\n      ></ng-container>\r\n      <ng-template #gridActions>\r\n        <abp-grid-actions\r\n          [index]=\"i\"\r\n          [record]=\"row\"\r\n          text=\"LanguageManagement::Actions\"\r\n        ></abp-grid-actions>\r\n      </ng-template>\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n\r\n  <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n    <ngx-datatable-column\r\n      [width]=\"columnWidths[i + 1] || 200\"\r\n      [name]=\"prop.displayName | abpLocalization\"\r\n      [prop]=\"prop.name\"\r\n      [sortable]=\"prop.sortable\"\r\n    >\r\n      <ng-template let-row=\"row\" let-i=\"index\" ngx-datatable-cell-template>\r\n        <ng-container [abpPermission]=\"prop.permission\">\r\n          <div\r\n            *ngIf=\"row['_' + prop.name].visible\"\r\n            [innerHTML]=\"row['_' + prop.name].value | async\"\r\n            (click)=\"prop.action({ getInjected: getInjected, record: row, index: i })\"\r\n          ></div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ng-container>\r\n</ngx-datatable>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(0, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [String, ConfigStateService,
        Injector])
], ExtensibleTableComponent);

// tslint:disable: directive-class-suffix
// Fix for https://github.com/angular/angular/issues/23904
// @dynamic
let AbstractActionsComponent = class AbstractActionsComponent extends ActionData {
    constructor(injector) {
        super();
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
        const extensions = injector.get(ExtensionsService);
        const name = injector.get(EXTENSIONS_IDENTIFIER);
        const type = injector.get(EXTENSIONS_ACTION_TYPE);
        this.actionList = extensions[type].get(name).actions;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AbstractActionsComponent.prototype, "record", void 0);
AbstractActionsComponent = __decorate([
    Directive(),
    __metadata("design:paramtypes", [Injector])
], AbstractActionsComponent);

let GridActionsComponent = class GridActionsComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GridActionsComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], GridActionsComponent.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GridActionsComponent.prototype, "text", void 0);
GridActionsComponent = __decorate([
    Component({
        exportAs: 'abpGridActions',
        selector: 'abp-grid-actions',
        template: "<div *ngIf=\"actionList.length > 1\" ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n  <button\r\n    class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n    data-toggle=\"dropdown\"\r\n    aria-haspopup=\"true\"\r\n    ngbDropdownToggle\r\n  >\r\n    <i [ngClass]=\"icon\" [class.mr-1]=\"icon\"></i>{{ text | abpLocalization }}\r\n  </button>\r\n  <div ngbDropdownMenu>\r\n    <ng-container\r\n      *ngFor=\"let action of actionList; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"btnItem\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: action }\"\r\n    >\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-container\r\n  *ngIf=\"actionList.length === 1\"\r\n  [ngTemplateOutlet]=\"btnItem\"\r\n  [ngTemplateOutletContext]=\"{ $implicit: actionList.get(0).value }\"\r\n></ng-container>\r\n\r\n<ng-template #btnItem let-action>\r\n  <button\r\n    *ngIf=\"action.visible(data)\"\r\n    ngbDropdownItem\r\n    [abpPermission]=\"action.permission\"\r\n    (click)=\"action.action(data)\"\r\n    type=\"button\"\r\n    class=\"{{ actionList.length === 1 ? 'btn btn-primary' : '' }}\"\r\n    [class.text-center]=\"actionList.length === 1\"\r\n  >\r\n    <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n    <span *ngIf=\"action.icon; else ellipsis\">{{ action.text | abpLocalization }}</span>\r\n    <ng-template #ellipsis>\r\n      <div abpEllipsis>{{ action.text | abpLocalization }}</div>\r\n    </ng-template>\r\n  </button>\r\n</ng-template>\r\n",
        providers: [
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'entityActions',
            },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Injector])
], GridActionsComponent);

let PageToolbarComponent = class PageToolbarComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
    createInjector(action) {
        const get = (token, notFoundValue, flags) => {
            return token === EXTENSIONS_ACTION_DATA
                ? this.data
                : token === EXTENSIONS_ACTION_CALLBACK
                    ? (data = this.data) => action.action(data)
                    : this.getInjected.call(this.injector, token, notFoundValue, flags);
        };
        return { get };
    }
};
PageToolbarComponent = __decorate([
    Component({
        exportAs: 'abpPageToolbar',
        selector: 'abp-page-toolbar',
        template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\r\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n    <ng-container *ngIf=\"action.visible(data)\" [abpPermission]=\"action.permission\">\r\n      <ng-container *ngIf=\"action.component as component; else button\">\r\n        <ng-container\r\n          *ngComponentOutlet=\"component; injector: createInjector(action)\"\r\n        ></ng-container>\r\n      </ng-container>\r\n\r\n      <ng-template #button>\r\n        <button (click)=\"action.action(data)\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n          <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n          {{ action.text | abpLocalization }}\r\n        </button>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
        providers: [
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'toolbarActions',
            },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Injector])
], PageToolbarComponent);

let DisabledDirective = class DisabledDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    // Related issue: https://github.com/angular/angular/issues/35330
    ngOnChanges({ abpDisabled }) {
        if (this.ngControl.control && abpDisabled) {
            this.ngControl.control[abpDisabled.currentValue ? 'disable' : 'enable']();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DisabledDirective.prototype, "abpDisabled", void 0);
DisabledDirective = __decorate([
    Directive({
        selector: '[abpDisabled]',
    }),
    __param(0, Host()),
    __metadata("design:paramtypes", [NgControl])
], DisabledDirective);

let PropDataDirective = class PropDataDirective extends PropData {
    constructor(tempRef, vcRef, injector) {
        super();
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
    }
    ngOnChanges() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.tempRef, {
            $implicit: this.data,
            index: 0,
        });
    }
    ngOnDestroy() {
        this.vcRef.clear();
    }
};
__decorate([
    Input('abpPropDataFromList'),
    __metadata("design:type", Object)
], PropDataDirective.prototype, "propList", void 0);
__decorate([
    Input('abpPropDataWithRecord'),
    __metadata("design:type", Object)
], PropDataDirective.prototype, "record", void 0);
__decorate([
    Input('abpPropDataAtIndex'),
    __metadata("design:type", Number)
], PropDataDirective.prototype, "index", void 0);
PropDataDirective = __decorate([
    Directive({
        exportAs: 'abpPropData',
        selector: '[abpPropData]',
    }),
    __metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef,
        Injector])
], PropDataDirective);

var objectExtensions = /*#__PURE__*/Object.freeze({
    __proto__: null
});

let UiExtensionsModule = class UiExtensionsModule {
};
UiExtensionsModule = __decorate([
    NgModule({
        exports: [
            DateTimePickerComponent,
            PageToolbarComponent,
            GridActionsComponent,
            ExtensibleFormComponent,
            ExtensibleTableComponent,
            PropDataDirective,
            DisabledDirective,
        ],
        declarations: [
            DateTimePickerComponent,
            PageToolbarComponent,
            GridActionsComponent,
            ExtensibleFormPropComponent,
            ExtensibleFormComponent,
            ExtensibleTableComponent,
            PropDataDirective,
            DisabledDirective,
        ],
        imports: [
            CoreModule,
            ThemeSharedModule,
            NgxValidateCoreModule,
            NgbDatepickerModule,
            NgbDropdownModule,
            NgbTimepickerModule,
        ],
    })
], UiExtensionsModule);

function mergeWithDefaultActions(extension, defaultActions, ...contributors) {
    Object.keys(defaultActions).forEach((name) => {
        const actions = extension.get(name);
        actions.clearContributors();
        actions.addContributor((actionList) => actionList.addManyTail(defaultActions[name]));
        contributors.forEach(contributor => (contributor[name] || []).forEach((callback) => actions.addContributor(callback)));
    });
}

function generateFormFromProps(data) {
    const extensions = data.getInjected(ExtensionsService);
    const identifier = data.getInjected(EXTENSIONS_IDENTIFIER);
    const form = new FormGroup({});
    const extraForm = new FormGroup({});
    form.addControl(EXTRA_PROPERTIES_KEY, extraForm);
    const record = data.record || {};
    const type = JSON.stringify(record) === '{}' ? 'create' : 'edit';
    const props = extensions[`${type}FormProps`].get(identifier).props;
    const extraProperties = record[EXTRA_PROPERTIES_KEY] || {};
    props.forEach(({ value: prop }) => {
        const name = prop.name;
        const isExtraProperty = prop.isExtra || name in extraProperties;
        let value = isExtraProperty ? extraProperties[name] : name in record ? record[name] : undefined;
        if (typeof value === 'undefined')
            value = prop.defaultValue;
        if (value) {
            let adapter;
            switch (prop.type) {
                case "date" /* Date */:
                    adapter = new DateAdapter();
                    value = adapter.toModel(adapter.fromModel(value));
                    break;
                case "time" /* Time */:
                    adapter = new TimeAdapter();
                    value = adapter.toModel(adapter.fromModel(value));
                    break;
                case "dateTime" /* DateTime */:
                    adapter = new DateTimeAdapter();
                    value = adapter.toModel(adapter.fromModel(value));
                    break;
                default:
                    break;
            }
        }
        const formControl = new FormControl(value, {
            asyncValidators: prop.asyncValidators(data),
            validators: prop.validators(data),
        });
        (isExtraProperty ? extraForm : form).addControl(name, formControl);
    });
    return form;
}

function createExtraPropertyValueResolver(name) {
    return (data) => of(data.record[EXTRA_PROPERTIES_KEY][name]);
}
function mergeWithDefaultProps(extension, defaultProps, ...contributors) {
    Object.keys(defaultProps).forEach((name) => {
        const props = extension.get(name);
        props.clearContributors();
        props.addContributor((propList) => propList.addManyTail(defaultProps[name]));
        contributors.forEach(contributor => (contributor[name] || []).forEach((callback) => props.addContributor(callback)));
    });
}

function createEnum(members) {
    const enumObject = {};
    members.forEach(({ name, value }) => {
        enumObject[(enumObject[name] = value)] = name;
    });
    return enumObject;
}
function createEnumValueResolver(enumType, lookupEnum, propName) {
    return data => {
        const value = data.record[EXTRA_PROPERTIES_KEY][propName];
        const key = lookupEnum.transformed[value];
        const l10n = data.getInjected(LocalizationService);
        const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
        return createLocalizationStream(l10n, localizeEnum(key));
    };
}
function createEnumOptions(enumType, lookupEnum) {
    return data => {
        const l10n = data.getInjected(LocalizationService);
        const localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
        return createLocalizationStream(l10n, lookupEnum.fields.map(({ name, value }) => ({
            key: localizeEnum(name),
            value,
        })));
    };
}
function createLocalizationStream(l10n, mapTarget) {
    return merge(of(null), l10n.languageChange).pipe(map(() => mapTarget));
}
function createEnumLocalizer(l10n, enumType, lookupEnum) {
    const resource = lookupEnum.localizationResource;
    const shortType = getShortEnumType(enumType);
    return key => l10n.localizeWithFallbackSync([resource], ['Enum:' + shortType + '.' + key, shortType + '.' + key, key], key);
}
function getShortEnumType(enumType) {
    return enumType.split('.').pop();
}

function createDisplayNameLocalizationPipeKeyGenerator(localization) {
    const generateLocalizationPipeKey = createLocalizationPipeKeyGenerator(localization);
    return (displayName, fallback) => {
        if (displayName && displayName.name)
            return generateLocalizationPipeKey([displayName.resource], [displayName.name], displayName.name);
        const key = generateLocalizationPipeKey([fallback.resource], ['DisplayName:' + fallback.name], undefined);
        if (key)
            return key;
        return generateLocalizationPipeKey([fallback.resource], [fallback.name], fallback.name);
    };
}

function getValidatorsFromProperty(property) {
    const validators = [];
    property.attributes.forEach(attr => {
        if (attr.typeSimple in AbpValidators)
            validators.push(AbpValidators[attr.typeSimple](attr.config));
    });
    return validators;
}

const selectConfig = (state) => state.ConfigState;
const ɵ0$3 = selectConfig;
const ɵ1 = (config) => config.objectExtensions;
const selectObjectExtensions = createSelector([selectConfig], ɵ1);
const ɵ2 = (config) => config.localization;
const selectLocalization = createSelector([selectConfig], ɵ2);
const ɵ3 = (extensions) => Object.keys(extensions.enums).reduce((acc, key) => {
    const { fields, localizationResource } = extensions.enums[key];
    acc[key] = {
        fields,
        localizationResource,
        transformed: createEnum(fields),
    };
    return acc;
}, {});
const selectEnums = createSelector([selectObjectExtensions, selectLocalization], ɵ3);
const createObjectExtensionEntitiesSelector = (moduleKey) => createSelector([selectObjectExtensions], (extensions) => {
    if (!extensions)
        return null;
    return (extensions.modules[moduleKey] || {}).entities;
});
const ɵ4 = createObjectExtensionEntitiesSelector;
function getObjectExtensionEntitiesFromStore(store, moduleKey) {
    return store.select(createObjectExtensionEntitiesSelector(moduleKey)).pipe(map(entities => (isUndefined(entities) ? {} : entities)), filter(Boolean), take(1));
}
function mapEntitiesToContributors(store, resource) {
    return pipe(switchMap(entities => zip(store.select(selectLocalization), store.select(selectEnums)).pipe(map(([localization, enums]) => {
        const generateDisplayName = createDisplayNameLocalizationPipeKeyGenerator(localization);
        return Object.keys(entities).reduce((acc, key) => {
            acc.prop[key] = [];
            acc.createForm[key] = [];
            acc.editForm[key] = [];
            const entity = entities[key];
            if (!entity)
                return acc;
            const properties = entity.properties;
            if (!properties)
                return acc;
            const mapPropertiesToContributors = createPropertiesToContributorsMapper(generateDisplayName, resource, enums);
            return mapPropertiesToContributors(properties, acc, key);
        }, {
            prop: {},
            createForm: {},
            editForm: {},
        });
    }))), take(1));
}
function createPropertiesToContributorsMapper(generateDisplayName, resource, enums) {
    return (properties, contributors, key) => {
        const isExtra = true;
        Object.keys(properties).forEach((name) => {
            const property = properties[name];
            const type = getTypeFromProperty(property);
            const displayName = generateDisplayName(property.displayName, { name, resource });
            if (property.ui.onTable.isVisible) {
                const sortable = Boolean(property.ui.onTable.isSortable);
                const columnWidth = type === "boolean" /* Boolean */ ? 150 : 250;
                const valueResolver = type === "enum" /* Enum */
                    ? createEnumValueResolver(property.type, enums[property.type], name)
                    : createExtraPropertyValueResolver(name);
                const entityProp = new EntityProp({
                    type,
                    name,
                    displayName,
                    sortable,
                    columnWidth,
                    valueResolver,
                    isExtra,
                });
                const contributor = (propList) => propList.addTail(entityProp);
                contributors.prop[key].push(contributor);
            }
            const isOnCreateForm = property.ui.onCreateForm.isVisible;
            const isOnEditForm = property.ui.onEditForm.isVisible;
            if (isOnCreateForm || isOnEditForm) {
                const defaultValue = property.defaultValue;
                const validators = () => getValidatorsFromProperty(property);
                let options;
                if (type === "enum" /* Enum */)
                    options = createEnumOptions(name, enums[property.type]);
                const formProp = new FormProp({
                    type,
                    name,
                    displayName,
                    options,
                    defaultValue,
                    validators,
                    isExtra,
                });
                const formContributor = (propList) => propList.addTail(formProp);
                if (isOnCreateForm)
                    contributors.createForm[key].push(formContributor);
                if (isOnEditForm)
                    contributors.editForm[key].push(formContributor);
            }
        });
        return contributors;
    };
}
function getTypeFromProperty(property) {
    return property.typeSimple.replace(/\?$/, '');
}
function isUndefined(obj) {
    return typeof obj === 'undefined';
}

/**
 * Generated bundle index. Do not edit.
 */

export { ActionList, CreateFormPropsFactory, DateAdapter, DateTimeAdapter, DateTimePickerComponent, DisabledDirective, EXTENSIONS_ACTION_CALLBACK, EXTENSIONS_ACTION_DATA, EXTENSIONS_ACTION_TYPE, EXTENSIONS_IDENTIFIER, EXTRA_PROPERTIES_KEY, EditFormPropsFactory, EntityAction, EntityActionList, EntityActions, EntityActionsFactory, EntityProp, EntityPropList, EntityProps, EntityPropsFactory, ExtensibleFormComponent, ExtensibleFormPropComponent, ExtensibleTableComponent, ExtensionsService, FormProp, FormPropData, FormPropList, FormProps, GridActionsComponent, objectExtensions as ObjectExtensions, PageToolbarComponent, PropDataDirective, PropList, TimeAdapter, ToolbarAction, ToolbarActionList, ToolbarActions, ToolbarActionsFactory, ToolbarComponent, UiExtensionsModule, createExtraPropertyValueResolver, generateFormFromProps, getObjectExtensionEntitiesFromStore, mapEntitiesToContributors, mergeWithDefaultActions, mergeWithDefaultProps, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ActionData as ɵa, Action as ɵb, ActionsFactory as ɵc, Actions as ɵd, PropData as ɵe, Prop as ɵf, PropsFactory as ɵg, Props as ɵh, selfFactory as ɵi, AbstractActionsComponent as ɵj };
//# sourceMappingURL=abp-ng.theme.shared-extensions.js.map

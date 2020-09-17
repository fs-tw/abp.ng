import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { FsNgAlainTreeComponent, NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SettingTabsService, ConfigStateService, LazyModuleFactory, DynamicLayoutComponent, AuthGuard, PermissionGuard, CoreModule } from '@abp/ng.core';
import { RouterModule } from '@angular/router';
import { JsonEditorOptions, JsonEditorComponent, NgJsonEditorModule } from 'ang-jsoneditor';
import { uniq, startsWith, findIndex, uniqBy, drop, dropRight, last, toLower, head } from 'lodash';
import { Select, Store } from '@ngxs/store';
import { ThemeCoreState, CodesWithSettingsOutput, ThemeCoreStateService, UpdateSettingsByProviderName, GetSettingByNameAndKey } from '@fs/theme.core';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotifyService } from '@fs/ng-alain/core';
import { NzContextMenuService } from 'ng-zorro-antd';
import { SettingManagementComponent as SettingManagementComponent$1, SettingManagementModule } from '@abp/ng.setting-management';

let ModalComponent = class ModalComponent {
    constructor(themeCoreStateService) {
        this.themeCoreStateService = themeCoreStateService;
        this.providerName = undefined;
        this.providerKey = undefined;
        this.rawData = null;
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this._isEdited = false;
        this.isEditedChange = new EventEmitter();
        this.settingGroups = null;
        this.settingValue = null;
        this.loading = false;
        this.destroy$ = new Subject();
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (value === this._visible)
            return;
        this._visible = (value) ? true : false;
        if (value) {
            this.visibleChange.emit(value);
        }
        else {
            this.rawData = null;
            this.settingValue = null;
            this.loading = false;
            this.visibleChange.emit(false);
        }
    }
    get isEdited() {
        return this._isEdited;
    }
    set isEdited(value) {
        if (value === this._isEdited)
            return;
        this._isEdited = (value) ? true : false;
        if (value) {
            this.isEditedChange.emit(value);
        }
        else {
            this.isEditedChange.emit(false);
        }
    }
    ngOnInit() {
        this.settingdata$.pipe(takeUntil(this.destroy$)).subscribe(x => {
            if (x) {
                this.loadSettingGroups(x);
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    ngOnChanges() {
        if (this.visible && this.rawData) {
            this.loadSettingGroups(this.themeCoreStateService.getSettingsGroups());
            this.loadData();
        }
    }
    loadSettingGroups(data) {
        this.settingGroups = null;
        let settingGroup = uniq(data);
        this.settingGroups = settingGroup.filter((x, i, arr) => {
            return arr.filter((y, j) => i != j && startsWith(x, y + ".")).length == 0;
        });
    }
    loadData() {
        this.loading = true;
        this.settingValue = [];
        let data = this.rawData.settingValues;
        this.rawData.availableSettingsDefinitions.forEach(x => {
            let index = findIndex(data, function (o) { return o.name === x.name; });
            if (index != -1) {
                this.settingValue.push({
                    name: x.name,
                    value: data[index].value,
                    displayName: x.displayName,
                    properties: x.properties
                });
            }
            else {
                this.settingValue.push({
                    name: x.name,
                    value: x.defaultValue,
                    displayName: x.displayName,
                    properties: x.properties
                });
            }
        });
        this.loading = false;
    }
    close() {
        this.visible = false;
    }
};
__decorate([
    Select(ThemeCoreState.getSettingsGroups),
    __metadata("design:type", Observable)
], ModalComponent.prototype, "settingdata$", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "providerName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "providerKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", CodesWithSettingsOutput)
], ModalComponent.prototype, "rawData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalComponent.prototype, "visible", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "visibleChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalComponent.prototype, "isEdited", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "isEditedChange", void 0);
ModalComponent = __decorate([
    Component({
        selector: 'fs-ng-alain-setting-management',
        template: "<nz-modal\r\n    [(nzVisible)]=\"visible\"\r\n    [nzTitle]=\"tplTitle\"\r\n    [nzContent]=\"tplContent\"\r\n    [nzFooter]=\"tplFooter\"\r\n    (nzOnCancel)=\"close()\"\r\n    [nzWidth]=\"760\"\r\n>\r\n    <ng-template #tplTitle>\r\n        <span>SettingManagement</span>\r\n    </ng-template>\r\n    \r\n    <ng-template #tplContent>\r\n        <fs-ng-alain-setting-management-main\r\n            [providerName]=\"providerName\"\r\n            [providerKey]=\"providerKey\"\r\n            [settingGroups]=\"settingGroups\"\r\n            [(visible)]=\"visible\"\r\n            [(isEdited)]=\"isEdited\"\r\n            [rawData]=\"settingValue\">\r\n        </fs-ng-alain-setting-management-main>\r\n    </ng-template>\r\n    \r\n    <ng-template #tplFooter>\r\n        <button nz-button (click)=\"close()\" [nzLoading]=\"loading\">\u96E2\u958B</button>\r\n    </ng-template>\r\n</nz-modal>",
        styles: [".textColor{color:red}"]
    }),
    __metadata("design:paramtypes", [ThemeCoreStateService])
], ModalComponent);

let MainComponent = class MainComponent {
    constructor(store) {
        this.store = store;
        this.providerName = undefined;
        this.providerKey = undefined;
        this.rawData = null;
        this.settingGroups = null;
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this._isEdited = false;
        this.isEditedChange = new EventEmitter();
        this.editedData = {};
        this.settingValue = null;
        this.loading = false;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (value === this._visible)
            return;
        this._visible = (value) ? true : false;
        if (value) {
            this.visibleChange.emit(value);
        }
        else {
            this.rawData = null;
            this.editedData = {};
            this.settingValue = null;
            this.loading = false;
            this.visibleChange.emit(false);
        }
    }
    get isEdited() {
        return this._isEdited;
    }
    set isEdited(value) {
        if (value === this._isEdited)
            return;
        this._isEdited = (value) ? true : false;
        if (value) {
            this.isEditedChange.emit(value);
        }
        else {
            this.isEditedChange.emit(false);
        }
    }
    ngOnInit() { }
    ngOnChanges() {
        if (this.visible && this.rawData) {
            this.loadData();
        }
    }
    loadData() {
        this.loading = true;
        this.editedData = {};
        this.settingValue = {};
        this.settingGroups.forEach((x, i) => {
            let value = this.rawData.filter(y => startsWith(y.name, x));
            if (value.length > 0) {
                this.settingValue[x] = {
                    group: x,
                    settingData: value
                };
            }
            else {
                this.settingGroups[i] = null;
            }
        });
        this.settingGroups = this.settingGroups.filter(z => z != null);
        this.loading = false;
    }
    setTextColor(item) {
        if (this.editedData === {})
            return false;
        for (let key in this.editedData) {
            if (startsWith(key, item)) {
                return true;
            }
        }
        return false;
    }
    ngOnDestroy() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MainComponent.prototype, "providerName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MainComponent.prototype, "providerKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], MainComponent.prototype, "rawData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], MainComponent.prototype, "settingGroups", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MainComponent.prototype, "visible", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MainComponent.prototype, "visibleChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MainComponent.prototype, "isEdited", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MainComponent.prototype, "isEditedChange", void 0);
MainComponent = __decorate([
    Component({
        selector: 'fs-ng-alain-setting-management-main',
        template: "<nz-spin [nzSpinning]=\"loading\">\r\n    <nz-tabset>\r\n        <nz-tab\r\n            *ngFor=\"let item of settingGroups\" nzPlacement=\"right\"\r\n            [nzTitle]=\"titleTemplate\">\r\n            <ng-template #titleTemplate><span [class.textColor]=\"setTextColor(item)\">{{ 'Themes::'+item | abpLocalization }}</span></ng-template>\r\n            <nz-page-header-content *ngIf=\"visible && settingValue\">\r\n                    <fs-ng-alain-setting-management-detail\r\n                        [providerName]=\"providerName\"\r\n                        [providerKey]=\"providerKey\"\r\n                        [rawData]=\"settingValue[item]\"\r\n                        [(visible)]=\"visible\"\r\n                        [(isEdited)]=\"isEdited\"\r\n                        [(editedData)]=\"editedData\">\r\n                    </fs-ng-alain-setting-management-detail>\r\n            </nz-page-header-content>\r\n        </nz-tab>\r\n    </nz-tabset>\r\n</nz-spin>",
        styles: [".textColor{color:red}"]
    }),
    __metadata("design:paramtypes", [Store])
], MainComponent);

let DetailComponent = class DetailComponent {
    constructor(store, fb, changeDetectorRef, notifyService, nzContextMenuService) {
        this.store = store;
        this.fb = fb;
        this.changeDetectorRef = changeDetectorRef;
        this.notifyService = notifyService;
        this.nzContextMenuService = nzContextMenuService;
        this.providerName = undefined;
        this.providerKey = undefined;
        this.rawData = null;
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this._isEdited = false;
        this.isEditedChange = new EventEmitter();
        this._editedData = {};
        this.editedDataChange = new EventEmitter();
        this.treeData = [];
        this.loading = false;
        this.isExpanded = true;
        this.seletedNode = "";
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (value === this._visible)
            return;
        this._visible = (value) ? true : false;
        if (value) {
            this.visibleChange.emit(value);
        }
        else {
            this.rawData = null;
            this.treeData = [];
            this.editedData = {};
            this.loading = false;
            this.isExpanded = true;
            this.seletedNode = "";
            this.visibleChange.emit(false);
        }
    }
    get isEdited() {
        return this._isEdited;
    }
    set isEdited(value) {
        if (value === this._isEdited)
            return;
        this._isEdited = (value) ? true : false;
        if (value) {
            this.isEditedChange.emit(value);
        }
        else {
            this.isEditedChange.emit(false);
        }
    }
    get editedData() {
        return this._editedData;
    }
    set editedData(value) {
        if (value === this._editedData)
            return;
        if (value != {}) {
            this._editedData = value;
            this.editedDataChange.emit(value);
        }
        else {
            this._editedData = {};
            this.editedDataChange.emit({});
        }
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.visible && this.rawData) {
            this.form = new FormGroup({});
            this.loading = true;
            this.treeData = this.loadData(this.rawData);
            this.buildForm();
            this.init();
            this.treeStatusChange('isExpanded', this.isExpanded);
        }
    }
    init() {
        this.changeDetectorRef.detectChanges();
        this.fsNgAlainTreeComponent.init();
    }
    loadData(data) {
        let result = [];
        let len = data.group.split('.').length;
        data.settingData.forEach(x => {
            result = result.concat(this.splitName(len, x));
        });
        return uniqBy(result, 'id');
    }
    splitName(len, data) {
        let result = [];
        let code = drop(dropRight(data.name.split('.')), len);
        code.forEach((y, i) => {
            result.push({
                id: (i === 0) ? y : result[i - 1].id + "." + y,
                parentId: (i === 0) ? null : result[i - 1].id,
                displayName: (i === 0) ? y : result[i - 1].displayName + "." + y
            });
        });
        data.id = data.name;
        data.parentId = (code.length > 0) ? last(result).id : null;
        result.push(data);
        return result;
    }
    buildForm() {
        let value = {};
        this.rawData.settingData.forEach((element, index) => {
            if (element.value === null) {
                element.value = '';
                this.rawData.settingData[index].value = '';
            }
            else {
                try {
                    element.value = JSON.parse(toLower(element.value));
                    switch (typeof (element.value)) {
                        case 'boolean':
                            this.rawData.settingData[index].properties.Type = 'Boolean';
                            break;
                        case 'number':
                            this.rawData.settingData[index].properties.Type = 'Decimal';
                            break;
                    }
                }
                catch (e) {
                    if (!element.properties.Type) {
                        this.rawData.settingData[index].properties.Type = 'String';
                    }
                    else if (element.properties.Type === "Boolean") {
                        element.value = false;
                    }
                }
            }
            value[element.name] = [element.value, []];
        });
        this.form = this.fb.group(value);
        this.form.valueChanges.subscribe(x => {
            let key = this.seletedNode;
            let rawData = head(this.rawData.settingData.filter(x => x.name === key));
            rawData.value = (typeof (rawData.value) != "string") ? JSON.stringify(rawData.value) : rawData.value;
            let data = (typeof (x[key]) != "string") ? JSON.stringify(x[key]) : x[key];
            if (rawData.value !== data) {
                this.editedData[key] = data;
            }
            else {
                delete this.editedData[key];
            }
            this.changeDetectorRef.detectChanges();
        });
        this.loading = false;
    }
    save() {
        this.loading = true;
        let input = {
            providerName: this.providerName,
            providerKey: this.providerKey,
            forceToSet: false,
            data: this.editedData
        };
        this.store.dispatch(new UpdateSettingsByProviderName(input))
            .pipe(finalize(() => this.loading = false))
            .subscribe((x) => {
            if (this.providerKey) {
                this.isEdited = true;
                this.visible = false;
            }
            this.notifyService.success("資料更新成功");
        }, (error) => {
            this.notifyService.error("資料更新失敗");
        });
    }
    clickItem(node) {
        this.nzContextMenuService.close();
        if (node.isLeaf) {
            if (this.seletedNode === node.key) {
                this.seletedNode = "";
            }
            else {
                this.seletedNode = node.key;
            }
        }
    }
    searchColor(node) {
        if (!this.fsNgAlainTreeComponent || !this.fsNgAlainTreeComponent.searchValue)
            return node.title;
        var regStr = "";
        var extraText = "~!@#$%^&*()_+=-|\\?/.,<>'\";:[]{}";
        var searchArr = this.fsNgAlainTreeComponent.searchValue.split("");
        searchArr.forEach(x => {
            if (extraText.includes(x)) {
                regStr += "\\" + x;
            }
            else {
                regStr += x;
            }
        });
        var reg = new RegExp(regStr);
        var addClass = "<span class='font-highlight'>" + this.fsNgAlainTreeComponent.searchValue + "</span>";
        var newTitle = node.title.replace(reg, addClass);
        return newTitle;
    }
    treeStatusChange(type, status = false) {
        this.isExpanded = status;
        this.fsNgAlainTreeComponent.treeStatusChange(type, status);
    }
    reLoadData() {
        this.editedData = {};
        this.buildForm();
        this.init();
        this.treeStatusChange('isExpanded', this.isExpanded);
    }
};
__decorate([
    ViewChild(FsNgAlainTreeComponent, { static: false }),
    __metadata("design:type", FsNgAlainTreeComponent)
], DetailComponent.prototype, "fsNgAlainTreeComponent", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DetailComponent.prototype, "providerName", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DetailComponent.prototype, "providerKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DetailComponent.prototype, "rawData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DetailComponent.prototype, "visible", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DetailComponent.prototype, "visibleChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], DetailComponent.prototype, "isEdited", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DetailComponent.prototype, "isEditedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DetailComponent.prototype, "editedData", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DetailComponent.prototype, "editedDataChange", void 0);
DetailComponent = __decorate([
    Component({
        selector: 'fs-ng-alain-setting-management-detail',
        template: "<nz-row>\r\n  <nz-col>\r\n    <button nzType=\"primary\" nz-button\r\n      (click)=\"treeStatusChange('isExpanded', !isExpanded)\">{{ (isExpanded) ? '\u5168\u90E8\u6536\u5408' : '\u5168\u90E8\u5C55\u958B' }}</button>\r\n    <button nzType=\"primary\" nz-button (click)=\"save()\" *ngIf=\"providerName !== 'D' && providerName !== 'C'\">\u5132\u5B58\u8B8A\u66F4</button>\r\n    <button nzType=\"danger\" nz-button (click)=\"reLoadData()\">\u53D6\u6D88\u8B8A\u66F4</button>\r\n  </nz-col>\r\n</nz-row>\r\n<div class=\"my-md\"></div>\r\n<nz-spin [nzSpinning]=\"loading\">\r\n  <div style=\"background-color:#FFF\">\r\n    <fs-ng-alain-tree\r\n      [tree]=\"treeData\"\r\n      [treeItem]=\"treeData\"\r\n      [showCountType]=\"1\"\r\n      [nzDefaultExpandAll]=\"isExpanded\"\r\n      [nzCheckable]=\"false\"\r\n      [showCheckAll]=\"false\"\r\n      [leafNodes]=\"true\"\r\n      [nzDraggable]=\"false\"\r\n      [nzShowLine]=\"true\"\r\n      [nzDefaultSearch]=\"true\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\">\r\n    </fs-ng-alain-tree>\r\n  </div>\r\n</nz-spin>\r\n<nz-back-top></nz-back-top>\r\n\r\n<ng-template #nzTreeTemplate let-node>\r\n  <span\r\n    class=\"custom-node\"\r\n    [class.node-active]=\"seletedNode == node.key\"\r\n    [class.textColor]=\"editedData[node.key] != undefined\"\r\n    (click)=\"clickItem(node)\"\r\n    [innerHtml]=\"searchColor(node)\">\r\n  </span>\r\n  <br />\r\n  <div *ngIf=\"seletedNode == node.key && node.isLeaf\">\r\n    <div [formGroup]=\"form\" style=\"margin: 1em 0px\">\r\n      <nz-form-control nzExtra=\"SettingName\uFF1A{{ node.origin.name }}\">\r\n        <ng-container [ngSwitch]=\"node.origin.properties.Type\">\r\n          <ng-container *ngSwitchDefault>\r\n            <fs-ng-alain-json-editor [form]=\"form\" [data]=\"node.origin.id\"></fs-ng-alain-json-editor>\r\n          </ng-container>\r\n          <nz-input-number *ngSwitchCase=\"'Int16'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\" [nzStep]=\"1\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Int32'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\" [nzStep]=\"1\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Int64'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\" [nzStep]=\"1\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Float'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Decimal'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\">\r\n          </nz-input-number>\r\n          <label nz-checkbox *ngSwitchCase=\"'Boolean'\" [formControlName]=\"node.origin.id\"></label>\r\n          <input *ngSwitchCase=\"'String'\" nz-input style=\"width: 100%;\" nzSize=\"default\"\r\n            [formControlName]=\"node.origin.id\" />\r\n        </ng-container>\r\n      </nz-form-control>\r\n    </div>\r\n  </div>\r\n</ng-template>",
        styles: [".custom-node{background:#fff;cursor:pointer;display:inline-block;height:24px;transition:all .3s;width:100%}.custom-node:hover{background:#e6f7ff}.node-active{background:#bae7ff;transition:all .3s}.node-active:hover{background:#bae7ff!important}.textColor{color:red}"]
    }),
    __metadata("design:paramtypes", [Store,
        FormBuilder,
        ChangeDetectorRef,
        NotifyService,
        NzContextMenuService])
], DetailComponent);

let FsNgAlainJsonEditorComponent = class FsNgAlainJsonEditorComponent {
    constructor() {
        this.editorOptions = new JsonEditorOptions();
        this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], FsNgAlainJsonEditorComponent.prototype, "form", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FsNgAlainJsonEditorComponent.prototype, "data", void 0);
__decorate([
    ViewChild(JsonEditorComponent, { static: true }),
    __metadata("design:type", JsonEditorComponent)
], FsNgAlainJsonEditorComponent.prototype, "editor", void 0);
FsNgAlainJsonEditorComponent = __decorate([
    Component({
        selector: 'fs-ng-alain-json-editor',
        template: "<div [formGroup]=\"form\">\r\n    <json-editor #editor [options]=\"editorOptions\" [formControlName]=\"data\"></json-editor>\r\n</div>"
    }),
    __metadata("design:paramtypes", [])
], FsNgAlainJsonEditorComponent);

let SettingManagementComponent = class SettingManagementComponent extends SettingManagementComponent$1 {
    constructor(_store, _settingTabs) {
        super(_store, _settingTabs);
        this._store = _store;
        this._settingTabs = _settingTabs;
    }
};
SettingManagementComponent = __decorate([
    Component({
        selector: 'fs-setting-management',
        template: "<fs-page-bar></fs-page-bar>\r\n\r\n<nz-row nzGutter=\"16\">\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"5\" style=\"padding-bottom: 10px;\">\r\n        <ul nz-menu nzMode=\"inline\">\r\n            <ul>\r\n                <li nz-menu-item nz-popover *ngFor=\"let setting of settings\" (click)=\"selected = setting\" [abpPermission]=\"setting.requiredPolicy\">\r\n                    {{ setting.name | abpLocalization }}\r\n                </li>\r\n            </ul>\r\n        </ul>\r\n    </nz-col>\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"19\" *ngIf=\"settings.length\">\r\n        <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n    </nz-col>\r\n</nz-row>\r\n  ",
        styles: [""]
    }),
    __metadata("design:paramtypes", [Store,
        SettingTabsService])
], SettingManagementComponent);

let MySettingsComponent = class MySettingsComponent {
    constructor(configStateService) {
        this.configStateService = configStateService;
        this.settings = {};
        this.keys = [];
    }
    ngOnInit() {
        this.settings = this.configStateService.getSettings();
        this.keys = Object.keys(this.settings);
    }
};
MySettingsComponent = __decorate([
    Component({
        selector: 'app-my-settings',
        template: "<nz-table #basicTable [nzData]=\"keys\">\r\n    <thead>\r\n      <tr>\r\n        <th>Key</th>\r\n        <th>Value</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data }}</td>\r\n        <td>{{ settings[data] }}</td>\r\n      </tr>\r\n    </tbody>\r\n</nz-table>\r\n  \r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [ConfigStateService])
], MySettingsComponent);

let MySettings2Component = class MySettings2Component {
    constructor(configStateService) {
        this.configStateService = configStateService;
        this.settings = {};
        this.keys = [];
    }
    ngOnInit() {
        this.settings = this.configStateService.getSettings();
        this.keys = Object.keys(this.settings);
    }
};
MySettings2Component = __decorate([
    Component({
        selector: 'app-my-settings2',
        template: "<nz-table #basicTable [nzData]=\"keys\">\r\n    <thead>\r\n      <tr>\r\n        <th>Key</th>\r\n        <th>Value</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data }}</td>\r\n        <td>{{ settings[data] }}</td>\r\n      </tr>\r\n    </tbody>\r\n</nz-table>\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [ConfigStateService])
], MySettings2Component);

const COMPONENT = [
    ModalComponent, MainComponent, DetailComponent, FsNgAlainJsonEditorComponent, SettingManagementComponent, MySettingsComponent, MySettings2Component
];
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [...COMPONENT],
        imports: [
            NgAlainBasicModule,
            NgJsonEditorModule
        ],
        exports: [
            NgAlainBasicModule,
            ...COMPONENT
        ]
    })
], SharedModule);

let MainComponent$1 = class MainComponent {
    constructor(store, notifyService, themeCoreStateService) {
        this.store = store;
        this.notifyService = notifyService;
        this.themeCoreStateService = themeCoreStateService;
        this.providerNameList = [
            {
                tag: "D",
                displayName: "DefaultValue"
            },
            {
                tag: "C",
                displayName: "Configuration"
            },
            {
                tag: "G",
                displayName: "Global"
            },
            {
                tag: "T",
                displayName: "Tenant"
            },
            {
                tag: "U",
                displayName: "User"
            }
        ];
        this.settingGroups = null;
        this.selectedSettingData = null;
        this.loading = false;
        this.visible = false;
        this.providerName = null;
        this.providerKey = null;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.settingdata$.pipe(takeUntil(this.destroy$)).subscribe(x => {
            if (x && this.visible && this.selectedSettingData) {
                this.selectedSettingData = x.map(y => {
                    return {
                        name: y.name,
                        value: y.value,
                        displayName: y.displayName,
                        properties: y.properties
                    };
                });
            }
        });
        this.settingGroupdata$.pipe(takeUntil(this.destroy$)).subscribe(x => {
            this.settingGroups = null;
            if (x) {
                let settingGroup = uniq(x);
                this.settingGroups = settingGroup.filter((x, i, arr) => {
                    return arr.filter((y, j) => i != j && startsWith(x, y + ".")).length == 0;
                });
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    editManageAction(item) {
        this.loading = true;
        let input = {
            providerName: item,
            providerKey: undefined
        };
        this.store.dispatch(new GetSettingByNameAndKey(input))
            .pipe(finalize(() => this.loading = false))
            .subscribe(() => {
            this.setting(true, input);
        }, (error) => {
            this.notifyService.error("查詢失敗");
        });
    }
    setting(visible, provider) {
        this.visible = visible;
        this.providerName = provider.providerName;
        this.providerKey = provider.providerKey;
        let data = this.themeCoreStateService.getSettingsByProviderName();
        this.selectedSettingData = data.map(x => {
            return {
                name: x.name,
                value: x.value,
                displayName: x.displayName,
                properties: x.properties
            };
        });
    }
};
__decorate([
    Select(ThemeCoreState.getSettingsByProviderName),
    __metadata("design:type", Observable)
], MainComponent$1.prototype, "settingdata$", void 0);
__decorate([
    Select(ThemeCoreState.getSettingsGroups),
    __metadata("design:type", Observable)
], MainComponent$1.prototype, "settingGroupdata$", void 0);
MainComponent$1 = __decorate([
    Component({
        selector: 'fs-main',
        template: "<nz-row nzGutter=\"16\">\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"5\" style=\"padding-bottom: 10px;\">\r\n        <ul nz-menu nzMode=\"inline\">\r\n            <ul>\r\n                <li nz-menu-item nz-popover *ngFor=\"let item of providerNameList\" (click)=\"editManageAction(item.tag)\">\r\n                    <nz-tag [nzColor]=\"'green'\">{{ item.tag }}</nz-tag>\r\n                    {{ item.displayName }}\r\n                </li>\r\n            </ul>\r\n        </ul>\r\n    </nz-col>\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"19\" *ngIf=\"selectedSettingData\">\r\n        <fs-ng-alain-setting-management-main [providerName]=\"providerName\" [providerKey]=\"providerKey\" [settingGroups]=\"settingGroups\" [(visible)]=\"visible\" [rawData]=\"selectedSettingData\"></fs-ng-alain-setting-management-main>\r\n    </nz-col>\r\n</nz-row>\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [Store,
        NotifyService,
        ThemeCoreStateService])
], MainComponent$1);

let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = __decorate([
    Component({
        selector: 'fs-layout',
        template: "<fs-page-bar></fs-page-bar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainComponent$1
            }
        ],
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SettingsRoutingModule);

var SettingsModule_1;
let SettingsModule = SettingsModule_1 = class SettingsModule {
    static forChild() {
        return {
            ngModule: SettingsModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(SettingsModule_1.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(SettingsModule_1.forChild());
    }
};
SettingsModule = SettingsModule_1 = __decorate([
    NgModule({
        declarations: [LayoutComponent, MainComponent$1],
        imports: [
            SharedModule,
            SettingsRoutingModule
        ]
    })
], SettingsModule);

const ɵ0 = SettingsModule.forEarly;
const routes$1 = [
    {
        path: '',
        component: DynamicLayoutComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'settings',
                loadChildren: ɵ0
            },
        ],
    }
];
// @dynamic
let SettingManagementNgAlainRoutingModule = class SettingManagementNgAlainRoutingModule {
};
SettingManagementNgAlainRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes$1)],
        exports: [RouterModule],
    })
], SettingManagementNgAlainRoutingModule);

var SettingManagementNgAlainModule_1;
let SettingManagementNgAlainModule = SettingManagementNgAlainModule_1 = class SettingManagementNgAlainModule {
    static forChild() {
        return {
            ngModule: SettingManagementNgAlainModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(SettingManagementNgAlainModule_1.forChild());
    }
};
SettingManagementNgAlainModule = SettingManagementNgAlainModule_1 = __decorate([
    NgModule({
        imports: [
            SharedModule,
            CoreModule,
            NgAlainBasicModule,
            SettingManagementModule,
            SettingManagementNgAlainRoutingModule
        ],
        exports: [
            SharedModule,
        ],
    })
], SettingManagementNgAlainModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DetailComponent, MainComponent, ModalComponent, MySettings2Component, MySettingsComponent, SettingManagementComponent, SettingManagementNgAlainModule, SharedModule, FsNgAlainJsonEditorComponent as ɵa, SettingManagementNgAlainRoutingModule as ɵb, SettingsModule as ɵc, LayoutComponent as ɵd, MainComponent$1 as ɵe, SettingsRoutingModule as ɵf };
//# sourceMappingURL=fs-setting-management-ng-alain.js.map

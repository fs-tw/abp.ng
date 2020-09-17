import * as _ from 'lodash';
import { ABP } from '@abp/ng.core';
import { CodesWithSettingsOutputModel } from './codes-with-settings-output-model';
import { CodesWithSettingsOutput } from '../../services/Coding/codes-with-settings';

export class TreeSettingDatasDictionaryModel {
    result: ABP.Dictionary<string>;
    constructor(codeSetting: CodesWithSettingsOutput) {
        this.result = {};
        let intersectionBy = _.intersectionBy(codeSetting.settingValues, codeSetting.availableSettingsDefinitions, 'name');
        let xorBy = _.xorBy(codeSetting.settingValues, codeSetting.availableSettingsDefinitions, 'name');
        intersectionBy.concat(xorBy).forEach(x => {
            this.result[x.name] = (x.defaultValue) ? x.defaultValue : x.value;
        });
    }
}

export class FlattedSettingDatasDictionaryModel {
    result: CodesWithSettingsOutputModel;
    constructor(codeSetting: CodesWithSettingsOutputModel) {
        this.result = _.cloneDeep(codeSetting);
        this.result.settingDatas = {};
        let intersectionBy = _.intersectionBy(this.result.settingValues, this.result.availableSettingsDefinitions, 'name');
        let xorBy = _.xorBy(this.result.settingValues, this.result.availableSettingsDefinitions, 'name');
        intersectionBy.concat(xorBy).forEach(y => {
            this.result.settingDatas[y.name] = (y.defaultValue) ? y.defaultValue : y.value;
        });
    }
}

export class CodingWithSettingTreeModel {
    codeSetting: CodesWithSettingsOutput;
    offspring: CodesWithSettingsOutput[];

    get children(): CodingWithSettingTreeModel[] {
        let datas = this.codeSetting.codes.parentId == "" ?
            this.offspring.filter(x => x.codes.definitionId == x.codes.parentId) :
            this.offspring.filter(x => x.codes.parentId == this.codeSetting.codes.id);

        let result: CodingWithSettingTreeModel[] = [];
        for (let key in datas) {
            let offspring = this.offspring.filter(x => _.startsWith(x.codes.code, datas[key].codes.code) && x.codes.code != datas[key].codes.code);
            let item = new CodingWithSettingTreeModel(datas[key], offspring);
            result.push(item);
        }

        return result;
    };

    protected _settingDatas: ABP.Dictionary<string> = null;

    get settingDatas(): ABP.Dictionary<string> {
        if(!this._settingDatas) this._settingDatas = new TreeSettingDatasDictionaryModel(this.codeSetting).result;
        return this._settingDatas;
    };

    set settingDatas(value: ABP.Dictionary<string>) {
        if (value === this._settingDatas) return;
        if (value) {
            _.assignIn(this._settingDatas, value);
        } else {
            this._settingDatas = new TreeSettingDatasDictionaryModel(this.codeSetting).result;
        }
    };

    constructor(codeSetting: CodesWithSettingsOutput, offspring: CodesWithSettingsOutput[]) {
        this.codeSetting = codeSetting;
        this.offspring = offspring.filter(x => _.startsWith(x.codes.code, codeSetting.codes.code) && x.codes.code != codeSetting.codes.code);
    }
}

export class CodingWithSettingTreeObjectModel {
    codeSetting: CodesWithSettingsOutput;
    offspring: CodesWithSettingsOutput;

    get children(): ABP.Dictionary<CodingWithSettingTreeObjectModel> {
        let offspringList = _.values(this.offspring);
        let datas = this.codeSetting.codes.parentId == "" ?
            offspringList.filter(x => x.codes.definitionId == x.codes.parentId) :
            offspringList.filter(x => x.codes.parentId == this.codeSetting.codes.id);

        let result: ABP.Dictionary<CodingWithSettingTreeObjectModel> = {};
        for (let key in datas) {
            let codeOffspringList = offspringList.filter(x => _.startsWith(x.codes.code, datas[key].codes.code) && x.codes.code != datas[key].codes.code);
            let item = new CodingWithSettingTreeObjectModel(datas[key], codeOffspringList);
            result[datas[key].codes.id] = item;
        }

        return result;
    };

    protected _settingDatas: ABP.Dictionary<string> = null;

    get settingDatas(): ABP.Dictionary<string> {
        if(!this._settingDatas) this._settingDatas = new TreeSettingDatasDictionaryModel(this.codeSetting).result;
        return this._settingDatas;
    };

    set settingDatas(value: ABP.Dictionary<string>) {
        if (value === this._settingDatas) return;
        if (value) {
            _.assignIn(this._settingDatas, value);
        } else {
            this._settingDatas = new TreeSettingDatasDictionaryModel(this.codeSetting).result;
        }
    };

    constructor(codeSetting: CodesWithSettingsOutput, offspringList: CodesWithSettingsOutput[]) {
        this.codeSetting = codeSetting;
        this.offspring = new CodesWithSettingsOutput;
        for (let i = 0; i < offspringList.length; i++) {
            let key = offspringList[i].codes.id;
            if (!(_.startsWith(offspringList[i].codes.code, codeSetting.codes.code) && offspringList[i].codes.code != codeSetting.codes.code)) continue;

            this.offspring[key] = offspringList[i];
        }
    }
}

export class CodesModel {
    rawDatas: CodesWithSettingsOutput[];
    definition: CodesWithSettingsOutput;

    get codeFlatted(): CodesWithSettingsOutputModel[] {
        let source: CodesWithSettingsOutputModel[] = _.cloneDeep(this.rawDatas);
        let result = source.map(x => {
            let data = new FlattedSettingDatasDictionaryModel(x);
            return data.result;
        });
        return result;
    }

    get codeDictionary(): ABP.Dictionary<CodesWithSettingsOutputModel> {
        let source: CodesWithSettingsOutputModel[] = _.cloneDeep(this.rawDatas);
        let result: ABP.Dictionary<CodesWithSettingsOutputModel> = {};
        source.forEach(x => {
            let data = new FlattedSettingDatasDictionaryModel(x);
            result[x.codes.id] = data.result;
        });
        return result;
    }

    get treeFlatted(): CodingWithSettingTreeModel[] {
        let source = _.cloneDeep(this.rawDatas);
        let result: CodingWithSettingTreeModel[] = [];

        let codeOffspring = source;
        let children = codeOffspring.filter(x => x.codes.parentId == x.codes.definitionId);
        for (let i = 0; i < children.length; i++) {
            let item = new CodingWithSettingTreeModel(children[i], codeOffspring);
            result.push(item);
        }
        return result;
    }
    
    get treeDictionary(): ABP.Dictionary<CodingWithSettingTreeObjectModel> {
        let source = _.cloneDeep(this.rawDatas);
        let result: ABP.Dictionary<CodingWithSettingTreeObjectModel> = {};

        let codeOffspring = source;
        let children = codeOffspring.filter(x => x.codes.parentId == x.codes.definitionId);
        for (let i = 0; i < children.length; i++) {
            let item = new CodingWithSettingTreeObjectModel(children[i], codeOffspring);
            result[children[i].codes.id] = item;
        }
        return result;
    }

    constructor(rawDatas: CodesWithSettingsOutput[], definition: CodesWithSettingsOutput) {
        this.rawDatas = rawDatas;
        this.definition = definition;
    }
}

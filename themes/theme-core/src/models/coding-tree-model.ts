import * as _ from 'lodash';
import { CodingWithSettingsDto } from './coding-with-setting-dto/coding-with-settings-dto';


export class CodingWithSettingTreeModel {
    codeSetting: CodingWithSettingsDto;
    offspring: CodingWithSettingsDto[];

    get children(): CodingWithSettingTreeModel[] {
        let datas = this.codeSetting.codes.parentId == "" ?
            this.offspring.filter(x => x.codes.definitionId == x.codes.parentId) :
            this.offspring.filter(x => x.codes.parentId == this.codeSetting.codes.id);

        let result: CodingWithSettingTreeModel[] = [];
        for(let key in datas) {
            let offspring = this.offspring.filter(x => x.codes.parentId == datas[key].codes.id);
            let item = new CodingWithSettingTreeModel(datas[key], offspring);
            result.push(item);
        }

        return result;
    };

    get settingValues(): { [key: string]: string } {
        let result: { [key: string]: string };
        let data = this.codeSetting.settingValues;
        this.codeSetting.availableSettingsDefinitions.forEach(x => {
            let index = _.findIndex(data, function(o) { return o.name === x.name; });
            if(index != -1) {
                result[x.name] = data[index].value;
            } else {
                result[x.name] = x.defaultValue;
            }
        });

        return result;
    };

    constructor(codeSetting: CodingWithSettingsDto, offspring: CodingWithSettingsDto[]) {
        this.codeSetting = codeSetting;
        this.offspring = offspring.filter(x => _.startsWith(x.codes.code, codeSetting.codes.code) && x.codes.code != codeSetting.codes.code);
    }
}

export class CodingWithSettingTreeObjectModel {
    codeSetting: CodingWithSettingsDto;
    offspring: { [key: string]: CodingWithSettingsDto };

    get children(): { [key: string]: CodingWithSettingTreeObjectModel } {
        let offspringList = _.values(this.offspring);
        let datas = this.codeSetting.codes.parentId == "" ?
            offspringList.filter(x => x.codes.definitionId == x.codes.parentId) :
            offspringList.filter(x => x.codes.parentId == this.codeSetting.codes.id);

        let result: { [key: string]: CodingWithSettingTreeObjectModel } = {};
        for(let key in datas) {
            let codeOffspringList = offspringList.filter(x => x.codes.parentId == datas[key].codes.id);
            let item = new CodingWithSettingTreeObjectModel(datas[key], codeOffspringList);
            result[datas[key].codes.id] = item;
        }

        return result;
    };

    get settingValues(): { [key: string]: string } {
        let result: { [key: string]: string };
        let data = this.codeSetting.settingValues;
        this.codeSetting.availableSettingsDefinitions.forEach(x => {
            let index = _.findIndex(data, function(o) { return o.name === x.name; });
            if(index != -1) {
                result[x.name] = data[index].value;
            } else {
                result[x.name] = x.defaultValue;
            }
        });

        return result;
    };

    constructor(codeSetting: CodingWithSettingsDto, offspringList: CodingWithSettingsDto[]) {
        this.codeSetting = codeSetting;
        this.offspring = {};
        for(let i = 0; i < offspringList.length; i++) {
            let key = offspringList[i].codes.id;
            if(!(_.startsWith(offspringList[i].codes.code, codeSetting.codes.code) && offspringList[i].codes.code != codeSetting.codes.code)) continue;
            
            this.offspring[key] = offspringList[i];
        }
    }
}

export class CodingsByDefinitionModel {
    rawDatas:{ [no: string]: CodingWithSettingsDto[] }

    get treeList(): { [key: string]: CodingWithSettingTreeModel[] }{
        let source = _.cloneDeep(this.rawDatas);
        let result: { [key: string]: CodingWithSettingTreeModel[] } = {};
        
        for (let sourceKey in source) {
            result[sourceKey] = [];
            let codeOffspring = source[sourceKey];
            let children = codeOffspring.filter(x => x.codes.parentId == x.codes.definitionId);
            for(let i = 0; i < children.length; i++) {
                let item = new CodingWithSettingTreeModel(children[i], codeOffspring);
                result[sourceKey].push(item);
            }
        }
        return result;
    }

    get treeObject(): { [key1: string]: {[key2: string]: CodingWithSettingTreeObjectModel} } {
        let source = _.cloneDeep(this.rawDatas);
        let result: { [key1: string]: {[key2: string]: CodingWithSettingTreeObjectModel} } = {};

        for (let sourceKey in source) {
            let data: { [key: string]: CodingWithSettingTreeObjectModel } = {};
            let codeOffspring = source[sourceKey];
            let children = codeOffspring.filter(x => x.codes.parentId == x.codes.definitionId);
            for(let i = 0; i < children.length; i++) {
                let item = new CodingWithSettingTreeObjectModel(children[i], codeOffspring);
                data[children[i].codes.id] = item;
            }

            result[sourceKey] = {};
            result[sourceKey] = data;
        }
        return result
    }
    
    constructor(rawDatas: { [no: string]: CodingWithSettingsDto[] }) {
        this.rawDatas = rawDatas;
    }

    addKeys(source: { [key: string]: CodingWithSettingsDto[] }) {
        let datas = _.cloneDeep(this.rawDatas);
        for (let sourceKey in source) {
            datas[sourceKey] = source[sourceKey];
        }

        this.rawDatas = datas;
    }
}
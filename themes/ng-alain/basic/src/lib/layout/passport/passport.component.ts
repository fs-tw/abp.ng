import { Component, OnInit } from '@angular/core';
import { eLayoutType, ConfigState } from '@abp/ng.core';
import { Store, Select } from '@ngxs/store';

@Component({
    selector: 'layout-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent implements OnInit {
    static type = eLayoutType.account;

    htmlDisplay = {
        title: "ng-alain",
        description: "武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫",
        footer: "Copyright<i nz-icon nzType='copyright'></i> 2017 <a href='//github.com/cipchk' target='_blank'>卡色</a>出品"
    };
    constructor(private store: Store) {
    }

    ngOnInit() {
        this.loadAndGetSetting();
    }

    loadAndGetSetting() {
        this.htmlDisplay.title = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.LoginPageOptions.Title"));
        this.htmlDisplay.description = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.LoginPageOptions.Description"));
        this.htmlDisplay.footer = this.store.selectSnapshot(ConfigState.getSetting("FS.Abp.Themes.Core.LoginPageOptions.Footer"));
    }
}

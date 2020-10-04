import { PersonalSettingsComponent as AbpPersonalSettingsComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
@Component({
    selector: 'ng-alain-personal-settings-form',
    templateUrl: './personal-settings.component.html',
    styleUrls: ['./personal-settings.component.less']
})
export class PersonalSettingsComponent extends AbpPersonalSettingsComponent implements OnInit {

    constructor(private _fb: FormBuilder, private _store: Store, private _toasterService: ToasterService) {
        super(_fb, _store, _toasterService);

    }

}

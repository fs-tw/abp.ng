import { Component } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';

@Component({
    selector: 'layout-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent {
    static type = eLayoutType.account;
    links = [
        {
            title: '帮助',
            href: '',
        },
        {
            title: '隐私',
            href: '',
        },
        {
            title: '条款',
            href: '',
        },
    ];
}

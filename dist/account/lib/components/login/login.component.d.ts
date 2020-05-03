import { AuthService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { eAccountComponents } from '../../enums/components';
export declare class LoginComponent implements OnInit {
    private fb;
    private oauthService;
    private store;
    private toasterService;
    private authService;
    form: FormGroup;
    inProgress: boolean;
    isSelfRegistrationEnabled: boolean;
    authWrapperKey: eAccountComponents;
    constructor(fb: FormBuilder, oauthService: OAuthService, store: Store, toasterService: ToasterService, authService: AuthService);
    ngOnInit(): void;
    onSubmit(): void;
}

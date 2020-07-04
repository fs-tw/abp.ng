import { __decorate, __metadata } from 'tslib';
import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, APP_INITIALIZER, NgModule } from '@angular/core';
import { takeUntilDestroy, ConfigState, AuthService, SessionState, SetLanguage, RoutesService, DomInsertionService, CONTENT_STRATEGY, AddReplaceableComponent, CoreModule } from '@abp/ng.core';
import { slideFromBottom, collapseWithMargin, NavItemsService, ThemeSharedModule } from '@abp/ng.theme.shared';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import snq from 'snq';
import { ValidationErrorComponent as ValidationErrorComponent$1, NgxValidateCoreModule } from '@ngx-validate/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

let AccountLayoutComponent = class AccountLayoutComponent {
};
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent = __decorate([
    Component({
        selector: 'abp-layout-account',
        template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `
    })
], AccountLayoutComponent);

let ApplicationLayoutComponent = class ApplicationLayoutComponent {
    constructor() {
        this.isCollapsed = true;
        this.logoComponentKey = "Theme.LogoComponent" /* Logo */;
        this.routesComponentKey = "Theme.RoutesComponent" /* Routes */;
        this.navItemsComponentKey = "Theme.NavItemsComponent" /* NavItems */;
    }
    checkWindowWidth() {
        setTimeout(() => {
            if (window.innerWidth < 992) {
                if (this.smallScreen === false) {
                    this.isCollapsed = false;
                    setTimeout(() => {
                        this.isCollapsed = true;
                    }, 100);
                }
                this.smallScreen = true;
            }
            else {
                this.smallScreen = false;
            }
        }, 0);
    }
    ngAfterViewInit() {
        this.checkWindowWidth();
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroy(this), debounceTime(150))
            .subscribe(() => {
            this.checkWindowWidth();
        });
    }
    ngOnDestroy() { }
};
// required for dynamic component
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent = __decorate([
    Component({
        selector: 'abp-layout-application',
        template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container\">\r\n    <abp-logo *abpReplaceableTemplate=\"{ componentKey: logoComponentKey }\"></abp-logo>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <abp-routes\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: routesComponentKey,\r\n            inputs: {\r\n              smallScreen: { value: smallScreen }\r\n            }\r\n          }\"\r\n          class=\"mx-auto\"\r\n          [smallScreen]=\"smallScreen\"\r\n        ></abp-routes>\r\n\r\n        <abp-nav-items\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: navItemsComponentKey\r\n          }\"\r\n        ></abp-nav-items>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- [@slideFromBottom]=\"outlet.isActivated && outlet.activatedRoute?.routeConfig?.path\" TODO: throws ExpressionChangedAfterItHasBeenCheck when animation is active. It should be fixed -->\r\n<div class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n",
        animations: [slideFromBottom, collapseWithMargin]
    })
], ApplicationLayoutComponent);

let EmptyLayoutComponent = class EmptyLayoutComponent {
};
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent = __decorate([
    Component({
        selector: 'abp-layout-empty',
        template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `
    })
], EmptyLayoutComponent);

let LogoComponent = class LogoComponent {
    constructor(store) {
        this.store = store;
    }
    get appInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
};
LogoComponent = __decorate([
    Component({
        selector: 'abp-logo',
        template: `
    <a class="navbar-brand" routerLink="/">
      <img
        *ngIf="appInfo.logoUrl; else appName"
        [src]="appInfo.logoUrl"
        [alt]="appInfo.name"
        width="100%"
        height="auto"
      />
    </a>

    <ng-template #appName>
      {{ appInfo.name }}
    </ng-template>
  `
    }),
    __metadata("design:paramtypes", [Store])
], LogoComponent);

let CurrentUserComponent = class CurrentUserComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    get smallScreen() {
        return window.innerWidth < 992;
    }
    ngOnInit() { }
    logout() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
};
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], CurrentUserComponent.prototype, "currentUser$", void 0);
CurrentUserComponent = __decorate([
    Component({
        selector: 'abp-current-user',
        // tslint:disable-next-line: component-max-inline-declarations
        template: `
    <ng-template #loginBtn>
      <a role="button" class="nav-link" routerLink="/account/login">{{
        'AbpAccount::Login' | abpLocalization
      }}</a>
    </ng-template>
    <div
      *ngIf="(currentUser$ | async)?.isAuthenticated; else loginBtn"
      ngbDropdown
      class="dropdown"
      #currentUserDropdown="ngbDropdown"
      display="static"
    >
      <a
        ngbDropdownToggle
        class="nav-link"
        href="javascript:void(0)"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ (currentUser$ | async)?.userName }}
      </a>
      <div
        class="dropdown-menu dropdown-menu-right border-0 shadow-sm"
        aria-labelledby="dropdownMenuLink"
        [class.d-block]="smallScreen && currentUserDropdown.isOpen()"
      >
        <a class="dropdown-item" routerLink="/account/manage-profile"
          ><i class="fa fa-cog mr-1"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}</a
        >
        <a class="dropdown-item" href="javascript:void(0)" (click)="logout()"
          ><i class="fa fa-power-off mr-1"></i>{{ 'AbpUi::Logout' | abpLocalization }}</a
        >
      </div>
    </div>
  `
    }),
    __metadata("design:paramtypes", [AuthService, Router])
], CurrentUserComponent);

let LanguagesComponent = class LanguagesComponent {
    constructor(store) {
        this.store = store;
    }
    get smallScreen() {
        return window.innerWidth < 992;
    }
    get defaultLanguage$() {
        return this.languages$.pipe(map(languages => snq(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), ''));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(map(languages => snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    ngOnInit() { }
    onChangeLang(cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
};
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], LanguagesComponent.prototype, "languages$", void 0);
LanguagesComponent = __decorate([
    Component({
        selector: 'abp-languages',
        // tslint:disable-next-line: component-max-inline-declarations
        template: `
    <div
      *ngIf="(dropdownLanguages$ | async)?.length > 0"
      class="dropdown"
      ngbDropdown
      #languageDropdown="ngbDropdown"
      display="static"
    >
      <a
        ngbDropdownToggle
        class="nav-link"
        href="javascript:void(0)"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ defaultLanguage$ | async }}
      </a>
      <div
        class="dropdown-menu dropdown-menu-right border-0 shadow-sm"
        aria-labelledby="dropdownMenuLink"
        [class.d-block]="smallScreen && languageDropdown.isOpen()"
      >
        <a
          *ngFor="let lang of dropdownLanguages$ | async"
          href="javascript:void(0)"
          class="dropdown-item"
          (click)="onChangeLang(lang.cultureName)"
          >{{ lang?.displayName }}</a
        >
      </div>
    </div>
  `
    }),
    __metadata("design:paramtypes", [Store])
], LanguagesComponent);

let NavItemsComponent = class NavItemsComponent {
    constructor(navItems) {
        this.navItems = navItems;
        this.trackByFn = (_, element) => element.id;
    }
};
NavItemsComponent = __decorate([
    Component({
        selector: 'abp-nav-items',
        template: "<ul class=\"navbar-nav\">\r\n  <li\r\n    class=\"nav-item d-flex align-items-center\"\r\n    *ngFor=\"let item of navItems.items$ | async; trackBy: trackByFn\"\r\n    [abpPermission]=\"item.requiredPolicy\"\r\n  >\r\n    <ng-container\r\n      *ngIf=\"item.component; else htmlTemplate\"\r\n      [ngComponentOutlet]=\"item.component\"\r\n    ></ng-container>\r\n\r\n    <ng-template #htmlTemplate>\r\n      <div [innerHTML]=\"item.html\" (click)=\"item.action ? item.action() : null\"></div>\r\n    </ng-template>\r\n  </li>\r\n</ul>\r\n"
    }),
    __metadata("design:paramtypes", [NavItemsService])
], NavItemsComponent);

let RoutesComponent = class RoutesComponent {
    constructor(routes) {
        this.routes = routes;
        this.trackByFn = (_, item) => item.name;
    }
    isDropdown(node) {
        return !node.isLeaf || this.routes.hasChildren(node.name);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], RoutesComponent.prototype, "smallScreen", void 0);
RoutesComponent = __decorate([
    Component({
        selector: 'abp-routes',
        template: "<ul class=\"navbar-nav\">\r\n  <ng-container\r\n    *ngFor=\"let route of routes.visible$ | async; trackBy: trackByFn\"\r\n    [ngTemplateOutlet]=\"isDropdown(route) ? dropdownLink : defaultLink\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-template #defaultLink let-route>\r\n    <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n      <a class=\"nav-link\" [routerLink]=\"[route.path]\"\r\n        ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}</a\r\n      >\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownLink let-route>\r\n    <li\r\n      #navbarRootDropdown\r\n      class=\"nav-item dropdown\"\r\n      display=\"static\"\r\n      *ngIf=\"route.children?.length\"\r\n      [abpPermission]=\"route.requiredPolicy\"\r\n      (click)=\"\r\n        navbarRootDropdown.expand\r\n          ? (navbarRootDropdown.expand = false)\r\n          : (navbarRootDropdown.expand = true)\r\n      \"\r\n    >\r\n      <a\r\n        class=\"nav-link dropdown-toggle\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        href=\"javascript:void(0)\"\r\n      >\r\n        <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}\r\n      </a>\r\n      <div\r\n        #routeContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n        [class.d-block]=\"smallScreen && navbarRootDropdown.expand\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"forTemplate; context: { $implicit: route }\"></ng-container>\r\n      </div>\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #forTemplate let-route>\r\n    <ng-container *ngFor=\"let child of route.children\">\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"child.children?.length ? dropdownChild : defaultChild\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n      ></ng-template>\r\n    </ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #defaultChild let-child>\r\n    <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n      <a class=\"dropdown-item\" [routerLink]=\"[child.path]\">\r\n        <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n        {{ child.name | abpLocalization }}</a\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownChild let-child>\r\n    <div\r\n      class=\"dropdown-submenu\"\r\n      ngbDropdown\r\n      #dropdownSubmenu=\"ngbDropdown\"\r\n      placement=\"right-top\"\r\n      [autoClose]=\"true\"\r\n      [abpPermission]=\"child.requiredPolicy\"\r\n    >\r\n      <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n        <a\r\n          abpEllipsis=\"210px\"\r\n          [abpEllipsisEnabled]=\"!smallScreen\"\r\n          role=\"button\"\r\n          class=\"btn d-block text-left dropdown-toggle\"\r\n        >\r\n          <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n          {{ child.name | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div\r\n        #childrenContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        [class.d-block]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"forTemplate; context: { $implicit: child }\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ul>\r\n"
    }),
    __metadata("design:paramtypes", [RoutesService])
], RoutesComponent);

let ValidationErrorComponent = class ValidationErrorComponent extends ValidationErrorComponent$1 {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign(Object.assign({}, error), { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
};
ValidationErrorComponent = __decorate([
    Component({
        selector: 'abp-validation-error',
        template: `
    <div class="invalid-feedback" *ngFor="let error of abpErrors; trackBy: trackByFn">
      {{ error.message | abpLocalization: error.interpoliteParams }}
    </div>
  `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
], ValidationErrorComponent);

const BASIC_THEME_NAV_ITEM_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureNavItems,
        deps: [NavItemsService],
        multi: true,
    },
];
function configureNavItems(navItems) {
    return () => {
        navItems.addItems([
            {
                id: "Theme.LanguagesComponent" /* Languages */,
                order: 100,
                component: LanguagesComponent,
            },
            {
                id: "Theme.CurrentUserComponent" /* CurrentUser */,
                order: 101,
                component: CurrentUserComponent,
            },
        ]);
    };
}

var styles = `
.content-header-title {
    font-size: 24px;
}
.entry-row {
    margin-bottom: 15px;
}
#main-navbar-tools a.dropdown-toggle {
    text-decoration: none;
    color: #fff;
}
.navbar .dropdown-submenu {
    position: relative;
}
.navbar .dropdown-menu {
    margin: 0;
    padding: 0;
}
.navbar .dropdown-menu a {
    font-size: .9em;
    padding: 10px 15px;
    display: block;
    min-width: 210px;
    text-align: left;
    border-radius: 0.25rem;
    min-height: 44px;
}
[dir=rtl] .navbar .dropdown-menu a {
    text-align: right!important;
}
.navbar .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 16px;
    top: 18px;
}
[dir=rtl] .navbar .dropdown-submenu a::after {
    transform: rotate(90deg);
    left: 16px;
    right: auto;
    top: 20px;
}
.navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
}
.card-header .btn {
    padding: 2px 6px;
}
.card-header h5 {
    margin: 0;
}
.container > .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
@media screen and (min-width: 992px) {
    .navbar .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .navbar .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
}
.input-validation-error {
    border-color: #dc3545;
}
.field-validation-error {
    font-size: 0.8em;
}
.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {
    border: 1px solid #c8c8c8;
  }
.abp-loading {
    background: rgba(0, 0, 0, 0.1);
}
.modal-backdrop {
background-color: rgba(0, 0, 0, 0.6);
}

.confirmation .confirmation-backdrop {
	 background: rgba(0, 0, 0, 0.7) !important;
}
 .confirmation .confirmation-dialog {
	 border: none;
	 border-radius: 10px;
	 background-color: #fff;
	 box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
}
 .confirmation .confirmation-dialog .icon-container .icon {
	 stroke: #fff;
	 color: #fff;
}
 .confirmation .confirmation-dialog .icon-container.info .icon {
	 stroke: #2f96b4;
	 color: #2f96b4;
}
 .confirmation .confirmation-dialog .icon-container.success .icon {
	 stroke: #51a351;
	 color: #51a351;
}
 .confirmation .confirmation-dialog .icon-container.warning .icon {
	 stroke: #f89406;
	 color: #f89406;
}
 .confirmation .confirmation-dialog .icon-container.error .icon {
	 stroke: #bd362f;
	 color: #bd362f;
}
 .confirmation .confirmation-dialog .content .title {
	 color: #222;
}
 .confirmation .confirmation-dialog .content .message {
	 color: #777;
}
 .confirmation .confirmation-dialog .footer {
	 background: transparent;
}
 .confirmation .confirmation-dialog .footer .confirmation-button {
	 background-color: #eee;
	 color: #777;
}
 .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {
	 background-color: #bbb;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm {
	 background-color: #2f96b4;
	 color: #fff;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {
	 background-color: #2e819b;
}
.ui-table .pagination-wrapper {
    background-color: #f4f4f4;
    border: 1px solid #c8c8c8;
}
.bordered .datatable-body-row {
    border-top: 1px solid #eee;
    margin-top: -1px;
}
`;

const BASIC_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [DomInsertionService, Store],
        multi: true,
    },
];
function configureStyles(domInsertion, store) {
    return () => {
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
            component: ApplicationLayoutComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.AccountLayoutComponent" /* AccountLayout */,
            component: AccountLayoutComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
            component: EmptyLayoutComponent,
        }),
    ]);
}

var ThemeBasicModule_1;
const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
let ThemeBasicModule = ThemeBasicModule_1 = class ThemeBasicModule {
    static forRoot() {
        return {
            ngModule: ThemeBasicModule_1,
            providers: [BASIC_THEME_NAV_ITEM_PROVIDERS, BASIC_THEME_STYLES_PROVIDERS],
        };
    }
};
ThemeBasicModule = ThemeBasicModule_1 = __decorate([
    NgModule({
        declarations: [
            ...LAYOUTS,
            ValidationErrorComponent,
            LogoComponent,
            NavItemsComponent,
            RoutesComponent,
            CurrentUserComponent,
            LanguagesComponent,
        ],
        exports: [
            ...LAYOUTS,
            ValidationErrorComponent,
            LogoComponent,
            NavItemsComponent,
            RoutesComponent,
            CurrentUserComponent,
            LanguagesComponent,
        ],
        imports: [
            CoreModule,
            ThemeSharedModule,
            NgbCollapseModule,
            NgbDropdownModule,
            NgxValidateCoreModule,
            NgxValidateCoreModule.forRoot({
                targetSelector: '.form-group',
                blueprints: {
                    creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                    email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                    invalid: 'AbpValidation::ThisFieldIsNotValid.',
                    max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                    min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                    ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                    passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                    range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    required: 'AbpValidation::ThisFieldIsRequired.',
                    url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                },
                errorTemplate: ValidationErrorComponent,
            }),
        ],
        entryComponents: [...LAYOUTS, ValidationErrorComponent, CurrentUserComponent, LanguagesComponent],
    })
], ThemeBasicModule);

/*
 * Public API Surface of theme-basic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccountLayoutComponent, ApplicationLayoutComponent, BASIC_THEME_NAV_ITEM_PROVIDERS, BASIC_THEME_STYLES_PROVIDERS, CurrentUserComponent, EmptyLayoutComponent, LAYOUTS, LanguagesComponent, LogoComponent, NavItemsComponent, RoutesComponent, ThemeBasicModule, ValidationErrorComponent, configureNavItems, configureStyles, ApplicationLayoutComponent as ɵa, AccountLayoutComponent as ɵb, EmptyLayoutComponent as ɵc, ValidationErrorComponent as ɵd, LogoComponent as ɵe, NavItemsComponent as ɵf, RoutesComponent as ɵg, CurrentUserComponent as ɵh, LanguagesComponent as ɵi, BASIC_THEME_NAV_ITEM_PROVIDERS as ɵj, configureNavItems as ɵk, BASIC_THEME_STYLES_PROVIDERS as ɵl, configureStyles as ɵm };
//# sourceMappingURL=abp-ng.theme.basic.js.map

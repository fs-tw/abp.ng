import { ApplicationConfiguration, AuthService } from '@abp/ng.core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
export declare class CurrentUserComponent implements OnInit {
    private authService;
    private router;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    get smallScreen(): boolean;
    constructor(authService: AuthService, router: Router);
    ngOnInit(): void;
    logout(): void;
}

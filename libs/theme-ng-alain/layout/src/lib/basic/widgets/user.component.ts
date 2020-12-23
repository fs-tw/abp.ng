import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigStateService,CurrentUserDto } from '@abp/ng.core';
import { AuthService } from '@abp/ng.account';
import { Observable } from 'rxjs';

@Component({
  selector: 'header-user',
  templateUrl: 'user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {
  currentUser$: Observable<CurrentUserDto> = this.configStateService.getOne$('currentUser');

  constructor(
    private authService: AuthService,
    private router: Router,
    private configStateService: ConfigStateService
  ) { }

  initLogin() {
    this.authService.initLogin();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
    });
  }
}

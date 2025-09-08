import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, ConfigStateService } from '@abp/ng.core';
import { Router } from '@angular/router';
import {  map } from 'rxjs';

@Component({
  selector: 'pb-auth',
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authService = inject(AuthService);
  configService = inject(ConfigStateService);
  router = inject(Router);

  // Observable 版本（無定時器）
  currentUser$ = this.configService.getDeep$('currentUser');
  
  authStatus$ = this.configService.getDeep$('currentUser').pipe(
    map(() => {
      const isAuthenticated = this.authService.isAuthenticated;
      return isAuthenticated
        ? { class: 'status-success', text: '✅ 已登入' }
        : { class: 'status-error', text: '❌ 未登入' };
    })
  );

  tokenStatus$ = this.configService.getDeep$('currentUser').pipe(
    map(() => {
      const accessToken = this.authService.getAccessToken();
      return accessToken
        ? { class: 'status-success', text: '✅ 有效' }
        : { class: 'status-error', text: '❌ 無 Token' };
    })
  );

  lastUpdate = new Date();

  refreshStatus() {
    this.lastUpdate = new Date();
    // 觸發狀態更新，Observable 會自動重新計算
    this.configService.refreshAppState();
  }

  testOAuthChallenge() {
    if (this.authService.isAuthenticated) {
      alert('✅ 您已經登入！');
      this.refreshStatus();
      return;
    }

    const returnUrl = this.router.url;
    this.authService.navigateToLogin({ returnUrl });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.refreshStatus();
    });
  }
}
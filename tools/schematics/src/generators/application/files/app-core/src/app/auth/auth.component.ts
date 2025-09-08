import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService, ConfigStateService, EnvironmentService } from '@abp/ng.core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'pb-auth',
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  // 注入 ABP 服務
  authService = inject(AuthService);
  configService = inject(ConfigStateService);
  environmentService = inject(EnvironmentService);
  router = inject(Router);
  httpClient = inject(HttpClient);
  
  // 使用 Observable + async pipe
  oAuthConfig$: Observable<any> = this.environmentService.getEnvironment$().pipe(
    map(env => env?.oAuthConfig || null)
  );
  currentUser$ = this.configService.getDeep$('currentUser');
  allConfig$ = this.configService.getAll$();
  
  // 狀態檢查的 Observable
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
      return accessToken && accessToken !== '' 
        ? { class: 'status-success', text: '✅ 有效' }
        : { class: 'status-error', text: '❌ 無 Token' };
    })
  );
  
  userStatus$ = this.currentUser$.pipe(
    map(user => user?.isAuthenticated 
      ? { class: 'status-success', text: '✅ 已載入' }
      : { class: 'status-error', text: '❌ 未載入' }
    )
  );
  
  backendStatus$ = this.allConfig$.pipe(
    map(config => config && Object.keys(config).length > 0 
      ? { class: 'status-success', text: '✅ 已連接' }
      : { class: 'status-error', text: '❌ 未連接' }
    )
  );
  
  lastUpdate = new Date();
  
  // 測試狀態
  discoveryStatus = { class: 'status-pending', text: '未測試' };
  configStatus = { class: 'status-pending', text: '未測試' };

  refreshStatus() {
    this.lastUpdate = new Date();
    // 狀態會透過 Observable 自動更新
  }

  testOAuthChallenge() {
    try {
      console.log('🚀 啟動 OAuth 挑戰流程...');
      
      if (this.authService.isAuthenticated) {
        console.log('✅ 用戶已認證，無需挑戰');
        alert('✅ 您已經登入！');
        this.refreshStatus();
        return;
      }

      const returnUrl = this.router.url;
      console.log('📍 儲存返回 URL:', returnUrl);
      this.authService.navigateToLogin({ returnUrl });
      
    } catch (error) {
      console.error('❌ OAuth 挑戰失敗:', error);
      alert('❌ OAuth 挑戰失敗: ' + error);
    }
  }

  logout() {
    try {
      console.log('🚪 登出...');
      this.authService.logout().subscribe({
        next: () => {
          console.log('✅ 登出完成');
          this.refreshStatus();
        },
        error: (error) => {
          console.error('❌ 登出失敗:', error);
        }
      });
    } catch (error) {
      console.error('❌ 登出失敗:', error);
    }
  }

  testDiscovery() {
    this.discoveryStatus = { class: 'status-pending', text: '測試中...' };
    
    // 從環境服務的 Observable 取得配置
    this.environmentService.getEnvironment$().subscribe(env => {
      const oAuthConfig = env?.oAuthConfig;
      
      if (!oAuthConfig?.issuer) {
        this.discoveryStatus = { class: 'status-error', text: '❌ 無 Issuer' };
        return;
      }

      const discoveryUrl = `${oAuthConfig.issuer.replace(/\/$/, '')}/.well-known/openid-configuration`;
      
      fetch(discoveryUrl)
        .then(response => {
          if (response.ok) {
            this.discoveryStatus = { class: 'status-success', text: '✅ 可連接' };
            console.log('✅ OIDC Discovery 成功');
            return response.json();
          } else {
            throw new Error(`HTTP ${response.status}`);
          }
        })
        .then(config => {
          console.log('🔍 OIDC 配置:', config);
        })
        .catch(error => {
          this.discoveryStatus = { class: 'status-error', text: '❌ 連接失敗' };
          console.error('❌ OIDC Discovery 失敗:', error);
        });
    }).unsubscribe(); // 取一次值就取消訂閱
  }

  testAppConfig() {
    this.configStatus = { class: 'status-pending', text: '測試中...' };
    
    try {
      const environment = this.environmentService.getEnvironment();
      const apiUrl = environment?.apis?.default?.url;
      
      if (!apiUrl) {
        this.configStatus = { class: 'status-error', text: '❌ 無 API URL' };
        return;
      }

      const configUrl = `${apiUrl}/api/abp/application-configuration`;
      
      fetch(configUrl)
        .then(response => {
          if (response.ok) {
            this.configStatus = { class: 'status-success', text: '✅ API 可用' };
            console.log('✅ 應用程式配置 API 可用');
            return response.json();
          } else {
            throw new Error(`HTTP ${response.status}`);
          }
        })
        .then(config => {
          console.log('🔍 應用程式配置:', config);
        })
        .catch(error => {
          this.configStatus = { class: 'status-error', text: '❌ API 無回應' };
          console.error('❌ 應用程式配置測試失敗:', error);
        });
        
    } catch (error) {
      this.configStatus = { class: 'status-error', text: '❌ 測試失敗' };
      console.error('❌ 測試應用程式配置失敗:', error);
    }
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pb-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Tourmap Public App</h1>
      <p class="text-lg mb-8">基於 ABP Framework 的公開網站基礎架構</p>

      <!-- 導航按鈕 -->
      <div class="mb-8">
        <a routerLink="/auth" class="btn btn-primary mr-4">🔍 ABP 功能驗證</a>
        <a routerLink="/demo" class="btn btn-secondary">🚀 Nx 演示</a>
      </div>

      <!-- 功能說明 -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">整合的 ABP 核心功能</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>OAuth 認證:</strong> 支援 OIDC 認證流程</li>
          <li><strong>配置管理:</strong> 自動載入應用配置 API</li>
          <li><strong>本地化:</strong> 多語言支援 (zh-Hant, en)</li>
          <li><strong>HTTP 攔截器:</strong> 自動處理認證標頭和錯誤</li>
          <li><strong>設定值讀取:</strong> 從後端動態載入設定</li>
          <li><strong>權限驗證:</strong> 基於角色和權限的存取控制</li>
        </ul>
        
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-2">開發說明</h3>
          <p class="text-gray-600">
            這個專案已經配置好 ABP 核心功能，包括環境配置、OAuth 設定和本地化支援。
            您可以在此基礎上開發銷售網站和官方網站功能。
          </p>
          <p class="text-blue-600 mt-2">
            <strong>點擊上方「ABP 功能驗證」按鈕可以檢查所有 ABP 功能是否正常運作。</strong>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
    }
    
    .btn {
      display: inline-block;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background-color: #3498db;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
    }
    
    .btn-secondary {
      background-color: #95a5a6;
      color: white;
    }
    
    .btn-secondary:hover {
      background-color: #7f8c8d;
      transform: translateY(-2px);
    }
  `]
})
export class HomeComponent {}
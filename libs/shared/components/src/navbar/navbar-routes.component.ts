import {
  Component,
  effect,
  inject,
  Injector,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { 
  GroupedNavbarItems, 
  LpxNavbarItem,
  getItemsFromGroup,
  RoutesService,
  LpxTranslateModule,
  LpxVisibleDirective,
  LpxNavbarModule,
  NavbarService
} from '@volo/ngx-lepton-x.core';

export type NavbarItemsType = LpxNavbarItem[] | null | undefined;
export type NavbarGroupItemsType = GroupedNavbarItems[] | null | undefined;

@Component({
  selector: 'lpx-navbar-routes',
  templateUrl: './navbar-routes.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    LpxTranslateModule,
    LpxVisibleDirective,
    LpxNavbarModule,
  ]
})
export class NavbarRoutesComponent {
  protected readonly injector = inject(Injector);
  protected readonly routesService = inject(RoutesService);
  protected readonly navbarService = inject(NavbarService);

  // 直接從 NavbarService 獲取數據並轉換為 signal
  groupedItems = toSignal(this.navbarService.groupedNavbarItems$);
  navbarItems = toSignal(this.navbarService.navbarItems$);

  constructor() {
    this.fixNavbarItemsByRouter();
  }

  private get itemsFromGroup(): LpxNavbarItem[] | undefined {
    const items = this.groupedItems();
    if (!items) {
      return undefined;
    }

    return getItemsFromGroup<GroupedNavbarItems, LpxNavbarItem>(
      items,
    );
  }

  private isExpandedOrSelected = (item: LpxNavbarItem): boolean =>
    !!(item.expanded || item.selected);

  onSubnavbarExpand(menuItem: LpxNavbarItem, menuItems: NavbarItemsType): void {
    if (menuItem.expanded) {
      const items = this.itemsFromGroup || menuItems;
      if (!items) {
        return;
      }

      items
        .filter((item) => item !== menuItem)
        .forEach((item) => (item.expanded = false));
    }
  }

  onRouteClick(menuItem: LpxNavbarItem, menuItems: NavbarItemsType): void {
    const expandedItems = menuItems?.filter(this.isExpandedOrSelected);
    const expandedGroupItems = this.itemsFromGroup?.filter(
      this.isExpandedOrSelected,
    );

    const items = expandedGroupItems || expandedItems;

    if (items) {
      items
        .filter((item) => item !== menuItem)
        .reduce<LpxNavbarItem[]>((acc, item) => {
          return [...acc, item, ...this.flatChildren(item.children || [])];
        }, [])
        ?.filter(
          (item) =>
            !this.checkChildrenIncludesItem(item, menuItem) &&
            item !== menuItem,
        )
        .forEach((item) => {
          item.selected = false;
          item.expanded = false;
        });
    }

    // 移除了 routeClick.emit - 讓 lpx-sub-navbar 自己處理路由
  }

  checkChildrenIncludesItem(
    item: LpxNavbarItem,
    menuItem: LpxNavbarItem,
  ): boolean {
    return (
      item.children?.reduce(
        (acc, child) =>
          acc ||
          child === menuItem ||
          this.checkChildrenIncludesItem(child, menuItem),
        false,
      ) || false
    );
  }

  flatChildren(menuItems: NavbarItemsType): LpxNavbarItem[] {
    return (
      menuItems?.reduce<LpxNavbarItem[]>((acc, item) => {
        return [...acc, item, ...this.flatChildren(item.children || [])];
      }, []) || []
    );
  }

  fixNavbarItemsByRouter() {
    effect(() => {
      const currentNavigation = this.routesService.currentNavigation();

      if (!currentNavigation) {
        return;
      }

      this.fixNavbarItems(
        currentNavigation,
        this.navbarItems() as LpxNavbarItem[],
      );
    });
  }

  fixNavbarItems(currentUrl: string, items: LpxNavbarItem[]): void {
    if (!items) {
      return;
    }

    // 首先清除所有選中狀態
    this.clearAllSelected(items);

    // 收集所有路由項目（包括子項目）
    const allItems = this.flattenAllItems(items);
    
    // 第一階段：尋找精確匹配
    const exactMatchItem = allItems.find(item => item.link && currentUrl === item.link);
    
    if (exactMatchItem) {
      // 找到精確匹配，只選中這個項目
      exactMatchItem.selected = true;
    } else {
      // 第二階段：沒有精確匹配時，尋找最長的前綴匹配
      const prefixMatches = allItems
        .filter(item => item.link && currentUrl.startsWith(item.link + '/'))
        .sort((a, b) => (b.link?.length || 0) - (a.link?.length || 0)); // 按路徑長度排序，最長的優先
      
      if (prefixMatches.length > 0) {
        prefixMatches[0].selected = true;
      }
    }

    // 設定展開狀態
    this.setExpandedState(items, currentUrl);
  }

  // 收集所有項目（扁平化）
  private flattenAllItems(items: LpxNavbarItem[]): LpxNavbarItem[] {
    const result: LpxNavbarItem[] = [];
    
    for (const item of items) {
      if (item.link) {
        result.push(item);
      }
      if (item.children?.length) {
        result.push(...this.flattenAllItems(item.children));
      }
    }
    
    return result;
  }

  // 設定展開狀態 - 只展開被選中項目的祖先路徑
  private setExpandedState(items: LpxNavbarItem[], currentUrl: string): void {
    for (const item of items) {
      if (item.children?.length) {
        // 檢查子項目中是否有被選中的項目
        item.expanded = this.hasSelectedInChildren(item);
        this.setExpandedState(item.children, currentUrl);
      }
    }
  }

  // 檢查子項目中是否有被選中的項目
  private hasSelectedInChildren(item: LpxNavbarItem): boolean {
    if (item.children) {
      for (const child of item.children) {
        // 如果子項目被選中，或者子項目的子項目中有被選中的
        if (child.selected || this.hasSelectedInChildren(child)) {
          return true;
        }
      }
    }
    return false;
  }

  // 新增方法：清除所有選中狀態
  private clearAllSelected(items: LpxNavbarItem[]): void {
    for (const item of items) {
      item.selected = false;
      if (item.children?.length) {
        this.clearAllSelected(item.children);
      }
    }
  }

  // 檢查子項目中是否有匹配的 URL（保留供其他地方使用）
  hasUrlInChildren(item: LpxNavbarItem, url: string): boolean {
    // 檢查當前項目是否精確匹配
    if (item.link && url === item.link) {
      return true;
    }
    
    // 檢查當前項目是否前綴匹配
    if (item.link && url.startsWith(item.link + '/')) {
      return true;
    }

    if (item.children) {
      for (const child of item.children) {
        const found = this.hasUrlInChildren(child, url);
        if (found) {
          return true;
        }
      }
    }

    return false;
  }
}

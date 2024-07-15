import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import {
  RoutesService,
  getItemsFromGroup,
  GroupedNavbarItems,
  LpxNavbarItem,
  LpxNavbarModule,
  NavbarService,
  LpxVisibleDirective,
  LpxTranslateModule,
} from '@volo/ngx-lepton-x.core';

export type NavbarItemsType = LpxNavbarItem[] | null | undefined;
export type NavbarGroupItemsType = GroupedNavbarItems[] | null | undefined;

@Component({
  selector: 'app-navbar-routes',
  templateUrl: './navbar-routes.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    LpxNavbarModule,
    LpxVisibleDirective,
    LpxTranslateModule,
  ],
})
export class NavbarRoutesComponent {
  protected readonly injector = inject(Injector);
  protected readonly routesService = inject(RoutesService);
  protected readonly router = inject(Router);
  protected readonly navbarService = inject(NavbarService);
  protected readonly activatedRoute = inject(ActivatedRoute);

  groupedItems = toSignal(this.navbarService.groupedNavbarItems$);

  navbarItems = toSignal(this.navbarService.navbarItems$);

  routerItem = input<boolean>();

  routeClick = output<LpxNavbarItem>();

  itemsFromGroup = computed(() => {
    if (!this.groupedItems) {
      return undefined;
    }

    return getItemsFromGroup<GroupedNavbarItems, LpxNavbarItem>(
      this.groupedItems() || []
    );
  });

  constructor() {
    this.fixNavbarItemsByRouter();
  }

  private isExpandedOrSelected = (item: LpxNavbarItem): boolean =>
    !!(item.expanded || item.selected);

  private isActive = (path: string) =>
    this.router?.isActive(
      this.router.createUrlTree([path], {
        relativeTo: this.activatedRoute,
      }),
      {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored',
      }
    );

  onSubnavbarExpand(menuItem: LpxNavbarItem, menuItems: NavbarItemsType): void {
    if (menuItem.expanded) {
      const items = this.itemsFromGroup() || menuItems;
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
    const expandedGroupItems = this.itemsFromGroup()?.filter(
      this.isExpandedOrSelected
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
            !this.checkChildrenIncludesItem(item, menuItem) && item !== menuItem
        )
        .forEach((item) => {
          item.selected = false;
          item.expanded = false;
        });
    }

    this.routeClick.emit(menuItem);
  }

  checkChildrenIncludesItem(
    item: LpxNavbarItem,
    menuItem: LpxNavbarItem
  ): boolean {
    return (
      item.children?.reduce(
        (acc, child) =>
          acc ||
          child === menuItem ||
          this.checkChildrenIncludesItem(child, menuItem),
        false
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
        this.navbarItems() as LpxNavbarItem[]
      );
    });
  }

  fixNavbarItems(currentUrl: string, items: LpxNavbarItem[]): void {
    items?.forEach((item) => {
      if (item.children?.length) {
        item.expanded = this.hasUrlInChildren(item, currentUrl);
        this.fixNavbarItems(currentUrl, item.children);
      } else if (item.link && item.link !== '/') {
        item.selected = this.isActive(item.link);
      } else {
        item.selected = item.link === currentUrl;
      }
    });
  }

  hasUrlInChildren(item: LpxNavbarItem, url: string): boolean {
    if (item.link && item.link === url) {
      return true;
    }

    if (item.link && item.link !== '/') {
      return this.isActive(item.link);
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

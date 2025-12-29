import { Directive, TemplateRef, inject } from '@angular/core';

/**
 * Filter section marker
 * Usage: <ng-template splitViewFilter>...</ng-template>
 *
 * Note: Must use ng-template instead of div,
 * because ng-content inside popover only projects once,
 * closing and reopening causes content to disappear.
 */
@Directive({
  selector: '[fsSplitViewFilter]',
  standalone: true,
})
export class SplitViewFilterDirective {
  readonly templateRef = inject(TemplateRef);
}

/**
 * Custom list item template marker
 * Usage: <ng-container fsSplitViewItem>...</ng-container>
 */
@Directive({
  selector: '[fsSplitViewItem]',
  standalone: true,
})
export class SplitViewItemDirective {}

/**
 * Detail section marker
 * Usage: <ng-container fsSplitViewDetail>...</ng-container>
 */
@Directive({
  selector: '[fsSplitViewDetail]',
  standalone: true,
})
export class SplitViewDetailDirective {}

/**
 * Top action area marker
 * Usage: <ng-container fsSplitViewActions>...</ng-container>
 */
@Directive({
  selector: '[fsSplitViewActions]',
  standalone: true,
})
export class SplitViewActionsDirective {}

/**
 * @fs-tw/ng.shared
 *
 * This is the main entry point that re-exports all features and components.
 * For tree-shaking optimization, consider importing directly from:
 * - @fs-tw/ng.shared/features - NgRx Signal Store features
 * - @fs-tw/ng.shared/components - UI Components and directives
 */

// Re-export all from features
export * from '../features/src/index';

// Re-export all from components
export * from '../components/src/index';

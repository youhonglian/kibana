/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

export interface EmbeddableApiContext {
  /**
   * TODO: once all actions are entirely decoupled from the embeddable system, this key should be renamed to "api"
   * to reflect the fact that this context could contain any api.
   */
  embeddable: unknown;
}

export {
  getInitialValuesFromComparators,
  getUnchangingComparator,
  runComparators,
  type ComparatorDefinition,
  type ComparatorFunction,
  type StateComparators,
} from './comparators';
export {
  apiCanAccessViewMode,
  getInheritedViewMode,
  getViewModeSubject,
  useInheritedViewMode,
  type CanAccessViewMode,
} from './interfaces/can_access_view_mode';
export {
  apiCanLockHoverActions,
  type CanLockHoverActions,
} from './interfaces/can_lock_hover_actions';
export { fetch$, useFetchContext, type FetchContext } from './interfaces/fetch/fetch';
export {
  initializeTimeRange,
  type SerializedTimeRange,
} from './interfaces/fetch/initialize_time_range';
export {
  apiPublishesFilters,
  apiPublishesPartialUnifiedSearch,
  apiPublishesTimeRange,
  apiPublishesTimeslice,
  apiPublishesUnifiedSearch,
  apiPublishesWritableUnifiedSearch,
  useSearchApi,
  type PublishesFilters,
  type PublishesTimeRange,
  type PublishesTimeslice,
  type PublishesUnifiedSearch,
  type PublishesWritableUnifiedSearch,
} from './interfaces/fetch/publishes_unified_search';
export {
  apiHasAppContext,
  type EmbeddableAppContext,
  type HasAppContext,
} from './interfaces/has_app_context';
export {
  apiHasDisableTriggers,
  areTriggersDisabled,
  type HasDisableTriggers,
} from './interfaces/has_disable_triggers';
export { hasEditCapabilities, type HasEditCapabilities } from './interfaces/has_edit_capabilities';
export {
  apiHasExecutionContext,
  type HasExecutionContext,
} from './interfaces/has_execution_context';
export {
  apiHasInPlaceLibraryTransforms,
  apiHasLegacyLibraryTransforms,
  apiHasLibraryTransforms,
  type HasInPlaceLibraryTransforms,
  type HasLegacyLibraryTransforms,
  type HasLibraryTransforms,
} from './interfaces/has_library_transforms';
export { apiHasParentApi, type HasParentApi } from './interfaces/has_parent_api';
export {
  apiHasSupportedTriggers,
  type HasSupportedTriggers,
} from './interfaces/has_supported_triggers';
export {
  apiHasType,
  apiIsOfType,
  type HasType,
  type HasTypeDisplayName,
} from './interfaces/has_type';
export { apiHasUniqueId, type HasUniqueId } from './interfaces/has_uuid';
export {
  apiPublishesBlockingError,
  hasBlockingError,
  type PublishesBlockingError,
} from './interfaces/publishes_blocking_error';
export {
  apiPublishesDataLoading,
  type PublishesDataLoading,
} from './interfaces/publishes_data_loading';
export {
  apiPublishesDataViews,
  type PublishesDataViews,
  type PublishesWritableDataViews,
} from './interfaces/publishes_data_views';
export {
  apiPublishesDisabledActionIds,
  type PublishesDisabledActionIds,
} from './interfaces/publishes_disabled_action_ids';
export {
  apiPublishesPhaseEvents,
  type PhaseEvent,
  type PhaseEventType,
  type PublishesPhaseEvents,
} from './interfaces/publishes_phase_events';
export { apiPublishesRendered, type PublishesRendered } from './interfaces/publishes_rendered';
export {
  apiPublishesSavedObjectId,
  type PublishesSavedObjectId,
} from './interfaces/publishes_saved_object_id';
export {
  apiPublishesUnsavedChanges,
  type PublishesUnsavedChanges,
} from './interfaces/publishes_unsaved_changes';
export {
  apiPublishesViewMode,
  apiPublishesWritableViewMode,
  type PublishesViewMode,
  type PublishesWritableViewMode,
  type ViewMode,
} from './interfaces/publishes_view_mode';
export {
  apiPublishesPanelDescription,
  apiPublishesWritablePanelDescription,
  getPanelDescription,
  type PublishesPanelDescription,
  type PublishesWritablePanelDescription,
} from './interfaces/titles/publishes_panel_description';
export {
  apiPublishesPanelTitle,
  apiPublishesWritablePanelTitle,
  getPanelTitle,
  type PublishesPanelTitle,
  type PublishesWritablePanelTitle,
} from './interfaces/titles/publishes_panel_title';
export {
  initializeTitles,
  stateHasTitles,
  type SerializedTitles,
} from './interfaces/titles/titles_api';
export {
  useBatchedOptionalPublishingSubjects,
  useBatchedPublishingSubjects,
  usePublishingSubject,
  useStateFromPublishingSubject,
  type PublishingSubject,
} from './publishing_subject';

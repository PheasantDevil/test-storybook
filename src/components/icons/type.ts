export const IconNameArrows = {
  IcnKbArrowUp: 'icn-kb_arrow_up',
  IcnKbArrowDown: 'icn-kb_arrow_down',
  IcnKbArrowRight: 'icn-kb_arrow_right',
  IcnKbArrowLeft: 'icn-kb_arrow_left',
  IcnTriangleUp: 'icn-triangle_up',
  IcnTriangleDown: 'icn-triangle_down',
  IcnTriangleRight: 'icn-triangle_right',
  IcnTriangleLeft: 'icn-triangle_left',
  IcnArrowUp: 'icn-arrow_up',
  IcnArrowDown: 'icn-arrow_down',
  IcnArrowRight: 'icn-arrow_right',
  IcnArrowLeft: 'icn-arrow_left',
} as const;
export type IconNameArrows = typeof IconNameArrows[keyof typeof IconNameArrows];

export const IconNameCommons = {
  IcnMoreH: 'icn-more_h',
  IcnMoreV: 'icn-more_v',
  IcnExpand: 'icn-expand',
  IcnDropdown: 'icn-dropdown',
  IcnCheck: 'icn-check',
  IcnLink: 'icn-link',
  IcnSlash: 'icn-slash',
  IcnHome: 'icn-home',
  IcnPhone: 'icn-phone',
  IcnDashboard: 'icn-dashboard',
  IcnCompany: 'icn-company',
  IcnChartpie: 'icn-chartPie',
  IcnChartline: 'icn-chartLine',
  IcnChartbar: 'icn-chartBar',
  IcnColor: 'icn-color',
  IcnKey: 'icn-key',
  IcnTimer: 'icn-timer',
  IcnNote: 'icn-note',
  IcnArticle: 'icn-article',
  IcnNew: 'icn-new',
  IcnSetting: 'icn-setting',
  IcnHistory: 'icn-history',
  IcnList: 'icn-list',
  IcnUser: 'icn-user',
  IcnAttach: 'icn-attach',
  IcnFilter: 'icn-filter',
  IcnTime: 'icn-time',
  IcnCalendar: 'icn-calendar',
  IcnNotifications: 'icn-notifications',
  IcnDragList: 'icn-drag_list',
  IcnBlock: 'icn-block',
  IcnEdit: 'icn-edit',
  IcnDragHandle: 'icn-drag_handle',
  IcnClose: 'icn-close',
  IcnDelete: 'icn-delete',
  IcnSearch: 'icn-search',
  IcnOpenWindow: 'icn-open_window',
  IcnApps: 'icn-apps',
  IcnMenu: 'icn-menu',
  IcnArrowUpward: 'icn-arrow_upward',
} as const;
export type IconNameCommons =
  typeof IconNameCommons[keyof typeof IconNameCommons];

export const IconNameToggles = {
  IcnBookmark: 'icn-bookmark',
  IcnBookmarkOutline: 'icn-bookmark_outline',
  IcnFavoriteOutline: 'icn-favorite_outline',
  IcnFavorite: 'icn-favorite',
  IcnComment: 'icn-comment',
  IcnCommentAdd: 'icn-comment_add',
  IcnFoldCircle: 'icn-fold_circle',
  IcnFold: 'icn-fold',
  IcnFoldOffCircle: 'icn-fold_off_circle',
  IcnFoldOff: 'icn-fold_off',
  IcnToggleOFF: 'icn-toggle_OFF',
  IcnRadio: 'icn-radio',
  IcnRadioON: 'icn-radio_ON',
  IcnVisibilityOFF: 'icn-visibility_OFF',
  IcnVisibilityON: 'icn-visibility_ON',
  IcnLockON: 'icn-lock_ON',
  IcnLockOFF: 'icn-lock_OFF',
  IcnSyncError: 'icn-sync_error',
  IcnSync: 'icn-sync',
  IcnStar: 'icn-star',
  IcnStarOutline: 'icn-star_outline',
  IcnUpload: 'icn-upload',
  IcnDownload: 'icn-download',
  IcnMailOpened: 'icn-mail_opened',
  IcnMailNew: 'icn-mail_new',
  IcnMail: 'icn-mail',
  IcnCheckbox: 'icn-checkbox',
  IcnCheckboxIndeterminate: 'icn-checkbox_indeterminate',
  IcnCheckboxON: 'icn-checkbox_ON',
  IcnToggleON: 'icn-toggle_ON',
} as const;
export type IconNameToggles =
  typeof IconNameToggles[keyof typeof IconNameToggles];

export const IconNameStatusesActions = {
  IcnAddOutline: 'icn-add_outline',
  IcnRemoveOutline: 'icn-remove_outline',
  IcnCancelOutline: 'icn-cancel_outline',
  IcnCancel: 'icn-cancel',
  IcnAdd: 'icn-add',
  IcnRemove: 'icn-remove',
  IcnHelp: 'icn-help',
  IcnInfo: 'icn-info',
  IcnWarning: 'icn-warning',
  IcnInfoOutline: 'icn-info_outline',
  IcnHelpOutline: 'icn-help_outline',
  IcnErrorOutline: 'icn-error_outline',
  IcnWarningOutline: 'icn-warning_outline',
  IcnError: 'icn-error',
  IcnSuccessOutline: 'icn-success_outline',
  IcnSuccess: 'icn-success',
} as const;
export type IconNameStatusesActions =
  typeof IconNameStatusesActions[keyof typeof IconNameStatusesActions];

export const IconNameCustoms = {
  IcnNotification: 'icn-notification',
  IcnPlay: 'icn-play',
  IcnPause: 'icn-pause',
} as const;
export type IconNameCustoms =
  typeof IconNameCustoms[keyof typeof IconNameCustoms];

export const IconSize = {
  Small: 's',
  Medium: 'm',
  Large: 'l',
  XLarge: 'xl',
  XXLarge: 'xxl',
  XXXLarge: 'xxxl',
} as const;
export type IconSize = typeof IconSize[keyof typeof IconSize];

export const IconName = {
  ...IconNameArrows,
  ...IconNameCommons,
  ...IconNameToggles,
  ...IconNameCustoms,
  ...IconNameStatusesActions,
} as const;
export type IconName = typeof IconName[keyof typeof IconName];

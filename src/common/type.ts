export const Colors = {
  GrayDark00: 'gdark-00',
  GrayDarkT2: 'gdark-t2',
  Action00: 'action-00',
  WhtWhite: 'wht-white',
  WarningS0: 'warning-s0',
  GrayLight00: 'glight-00',
  Danger00: 'danger-00',
} as const;
export type Colors = typeof Colors[keyof typeof Colors];

export const FontTypes = {
  TxDR: 'txd-r',
  TxNR: 'txn-r',
} as const;
export type FontTypes = typeof FontTypes[keyof typeof FontTypes];

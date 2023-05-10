import { Colors } from '../../common/type';
import { IconName, IconSize } from './type';
import { LitElement, html } from 'lit';
import { customElementWithCheck } from '../../common/custom-element-check';
import { iconsArrows } from './svg/arrows';
import { iconsCommons } from './svg/commons';
import { iconsCustoms } from './svg/customs';
import { iconsStatusesActions } from './svg/statuses-actions';
import { iconsToggles } from './svg/toggles';
import { property } from 'lit/decorators.js';
import style from './kaleid-icon.pcss';

const icons = Object.freeze(
  new Map([
    ...iconsArrows.entries(),
    ...iconsCommons.entries(),
    ...iconsToggles.entries(),
    ...iconsCustoms.entries(),
    ...iconsStatusesActions.entries(),
  ])
);

/**
 * URL: https://kaleid.poc-agdc.jp/design/icons/index.html
 */
@customElementWithCheck('kaleid-icon')
export class KaleidIcon extends LitElement {
  static override styles = [style];

  /**
   * アイコンの種類
   *
   * @defaultValue IconName.IcnArrowUpward
   *
   * @example
   * ```ts
   * <kaleid-icon .name=${IconName.IcnArrowUpward} />
   * ```
   */
  @property({ type: String })
  name: IconName = IconName.IcnArrowUpward;

  /**
   * アイコンのサイズ
   *
   * @defaultValue IconSize.Small
   *
   * @example
   * ```ts
   * <kaleid-icon .size=${IconSize.Small} />
   * ```
   */
  @property({ type: String })
  size: IconSize = IconSize.Small;

  /**
   * アイコンの色
   *
   * @defaultValue Colors.GrayDark00
   *
   * @example
   * ```ts
   * <kaleid-icon .color=${Colors.GrayDark00} />
   * ```
   */
  @property({ type: String })
  color: Colors = Colors.GrayDark00;

  override render() {
    return html` <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      class="${this.size} ${this.color}"
      viewBox="0 0 24 24"
    >
      ${icons.get(this.name)}
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kaleid-icon': KaleidIcon;
  }
}

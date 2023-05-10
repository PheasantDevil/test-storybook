import { IconNameArrows } from '@/src/icons/type';
import { TemplateResult, svg } from 'lit';

export const iconsArrows = Object.freeze(
  new Map<IconNameArrows, TemplateResult<2>>([
    [
      IconNameArrows.IcnKbArrowDown,
      svg`<path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"/>`,
    ],
    [
      IconNameArrows.IcnKbArrowUp,
      svg`<path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"/>`,
    ],
    [
      IconNameArrows.IcnKbArrowRight,
      svg`<path d="M8.59003 16.59L13.17 12L8.59003 7.41L10 6L16 12L10 18L8.59003 16.59Z"/>`,
    ],
    [
      IconNameArrows.IcnKbArrowLeft,
      svg`<path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"/>
      `,
    ],
    [IconNameArrows.IcnTriangleUp, svg`<path d="M7 14L12 9L17 14H7Z"/>`],
    [IconNameArrows.IcnTriangleDown, svg`<path d="M7 10L12 15L17 10H7Z"/>`],
    [IconNameArrows.IcnTriangleRight, svg`<path d="M10 17L15 12L10 7V17Z"/>`],
    [IconNameArrows.IcnTriangleLeft, svg`<path d="M14 7L9 12L14 17V7Z"/>`],
    [
      IconNameArrows.IcnArrowDown,
      svg`<path d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z"/>
      `,
    ],
    [
      IconNameArrows.IcnArrowUp,
      svg`<path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z"/>
      `,
    ],
    [
      IconNameArrows.IcnArrowRight,
      svg`<path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"/>
      `,
    ],
    [
      IconNameArrows.IcnArrowLeft,
      svg`<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
      `,
    ],
  ])
);

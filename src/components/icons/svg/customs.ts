import { IconNameCustoms } from '@/src/icons/type';
import { TemplateResult, svg } from 'lit';

export const iconsCustoms = Object.freeze(
  new Map<IconNameCustoms, TemplateResult<2>>([
    [
      IconNameCustoms.IcnNotification,
      svg`<circle cx="8" cy="8" r="4"/><circle cx="8" cy="8" r="5" stroke="white" stroke-opacity="0.73" stroke-width="2"/>`,
    ],
    [
      IconNameCustoms.IcnPlay,
      svg`<path d="M12 2.67993C6.48 2.67993 2 7.15993 2 12.6799C2 18.1999 6.48 22.6799 12 22.6799C17.52 22.6799 22 18.1999 22 12.6799C22 7.15993 17.52 2.67993 12 2.67993ZM12 20.6799C7.59 20.6799 4 17.0899 4 12.6799C4 8.26993 7.59 4.67993 12 4.67993C16.41 4.67993 20 8.26993 20 12.6799C20 17.0899 16.41 20.6799 12 20.6799ZM9.5 17.1799L16.5 12.6799L9.5 8.17993V17.1799Z"/>`,
    ],
    [
      IconNameCustoms.IcnPause,
      svg`<path d="M9 16.6799H11V8.67993H9V16.6799ZM12 2.67993C6.48 2.67993 2 7.15993 2 12.6799C2 18.1999 6.48 22.6799 12 22.6799C17.52 22.6799 22 18.1999 22 12.6799C22 7.15993 17.52 2.67993 12 2.67993ZM12 20.6799C7.59 20.6799 4 17.0899 4 12.6799C4 8.26993 7.59 4.67993 12 4.67993C16.41 4.67993 20 8.26993 20 12.6799C20 17.0899 16.41 20.6799 12 20.6799ZM13 16.6799H15V8.67993H13V16.6799Z"/>`,
    ],
  ])
);

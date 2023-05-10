import { LitElement } from 'lit';

export const moveFocus = (
  event: KeyboardEvent,
  elements: HTMLElement[],
  activeElement?: Element
) => {
  if (
    elements.length === 0 ||
    !(event.key === 'ArrowUp' || event.key === 'ArrowDown')
  ) {
    return;
  }

  let focusIndex = 0;
  if (activeElement) {
    const findIndex = elements.findIndex(el => el === activeElement);
    if (findIndex >= 0) {
      const direction = event.key === 'ArrowUp' ? -1 : 1;
      focusIndex = findIndex + direction;
      if (focusIndex < 0) {
        focusIndex = 0;
      } else if (focusIndex > elements.length - 1) {
        focusIndex = elements.length - 1;
      }
    } else if (event.key === 'ArrowUp') {
      focusIndex = elements.length - 1;
    }
  } else if (event.key === 'ArrowUp') {
    focusIndex = elements.length - 1;
  }
  elements[focusIndex].focus();
};

export const moveFocusWithItems = (
  event: KeyboardEvent,
  items: LitElement[],
  selector = 'button'
) => {
  let activeElement: Element | null = null;
  const elements = items.map(item => {
    const element = item.shadowRoot?.querySelector(selector) as HTMLElement;
    if (item.shadowRoot?.activeElement) {
      activeElement = item.shadowRoot?.activeElement;
    }
    return element;
  });
  moveFocus(event, elements, activeElement ?? undefined);
};

import { LitElement } from 'lit';
import { MixinEnterInterface } from './mixin-enter-interface';

type Constructor<T> = new (...args: any[]) => T;

export const MixinEnter = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class MixinEnterClass extends superClass {
    // eslint-disable-next-line class-methods-use-this
    protected keyDownHandler(htmlElement: HTMLElement, event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault();
        htmlElement.classList.add('active');
      }
    }

    // eslint-disable-next-line class-methods-use-this
    protected keyUpHandler(htmlElement: HTMLElement, event: KeyboardEvent) {
      htmlElement.classList.remove('active');
      if (event.key === 'Enter') {
        htmlElement.click();
      }
    }
  }

  return MixinEnterClass as unknown as Constructor<MixinEnterInterface> & T;
};

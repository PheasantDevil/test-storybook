import './kaleid-icon';
import { Colors } from '../../common/type';
import { IconName, IconSize } from './type';
import { KaleidIcon } from './kaleid-icon';
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

describe('kaleid-icon', () => {
  it('has a default properties', async () => {
    const el = await fixture<KaleidIcon>(html`<kaleid-icon></kaleid-icon>`);

    expect(el.name).to.equal(IconName.IcnArrowUpward);
    expect(el.size).to.equal(IconSize.Small);
    expect(el.color).to.equal(Colors.GrayDark00);
  });

  it('can override the properties via attribute', async () => {
    const el = await fixture<KaleidIcon>(
      html`<kaleid-icon
        name=${IconName.IcnClose}
        size=${IconSize.Large}
        color=${Colors.Action00}
      ></kaleid-icon>`
    );

    expect(el.name).to.equal(IconName.IcnClose);
    expect(el.shadowRoot?.querySelector('path')?.outerHTML).to.equal(
      `<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path>`
    );
    expect(el.size).to.equal(IconSize.Large);
    expect(el.color).to.equal(Colors.Action00);
  });

  it('Should display blank icon when passing wrong value of properties', async () => {
    const el = await fixture<KaleidIcon>(
      html`<kaleid-icon
        name="test"
        size=${IconSize.Large}
        color=${Colors.Action00}
      ></kaleid-icon>`
    );

    const path = el.shadowRoot?.querySelector('path');
    expect(path).to.equal(null);
  });
});

import '../../components/icons';
import { Colors } from '../../common/type';
import { IconName, IconSize } from '../../components/icons/type';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Icons/Kaleid Icon',
  component: 'kaleid-icon',
  argTypes: {
    name: {
      options: Object.values(IconName),
      control: 'select',
      defaultValue: IconName.IcnArrowUpward,
      type: 'enum',
    },
    size: {
      options: Object.values(IconSize),
      control: 'radio',
      defaultValue: IconSize.Small,
      type: 'enum',
    },
    color: {
      options: Object.values(Colors),
      control: 'radio',
      defaultValue: Colors.GrayDark00,
      type: 'enum',
    },
  },
  parameters: {
    assets: ['https://kaleid.poc-agdc.jp/design/icons/index.html'],
  },
};

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name: string;
  size: IconSize;
  color: Colors;
}

const Template: Story<ArgTypes> = ({
  name = IconName.IcnArrowUpward,
  size = IconSize.Small,
  color = Colors.GrayDark00,
}: ArgTypes) => html`
  <kaleid-icon name=${name} size=${size} color=${color}></kaleid-icon>
`;

const CatalogTemplate: Story<ArgTypes> = ({
  size = IconSize.Small,
  color = Colors.GrayDark00,
}: ArgTypes) => html`<div
  id="kaleid-icon-catalog"
  style="
display: flex;
flex-wrap: wrap;"
>
  ${Object.values(IconName).map(
    (icon) => html` <div
      style="padding:0.5em;
      box-sizing: border-box;
      width: 20%;
      border: 1px solid lightgray;"
    >
      <div>${icon}</div>
      <kaleid-icon name=${icon} size=${size} color=${color}></kaleid-icon>
    </div>`
  )}
</div>`;

export const KaleidIcon = Template.bind({});

export const KaleidIconCatalog = CatalogTemplate.bind({});

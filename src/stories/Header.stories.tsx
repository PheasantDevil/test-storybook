import React from 'react';

import { Header } from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <Header {...args} />;

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {};

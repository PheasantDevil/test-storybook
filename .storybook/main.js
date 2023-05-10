module.exports = {
  "stories": ["../src/**/*.stories.mdx",
  "../src/**/**/*.stories.mdx",
  "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  "../src/**/*.stories.@(js|jsx|ts|tsx)"
],
  "addons": ["@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/preset-create-react-app",
  {
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
      transcludeMarkdown: true,
    },
  },
  '@storybook/addon-postcss',
  '@storybook/addon-design-assets',
  "@storybook/addon-mdx-gfm"
],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
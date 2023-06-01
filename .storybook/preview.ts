import type { Preview } from "@storybook/react";
import '../src/styles/global.css';
import { themes } from '@storybook/theming';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;

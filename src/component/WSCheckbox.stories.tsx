import type { Meta, StoryObj } from '@storybook/react';

import { WSCheckbox } from './WSCheckbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/WSCheckbox',
  component: WSCheckbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { defaultValue: "Catch me if you can" },
    onChange: { defaultValue: undefined},
    
  },
} satisfies Meta<typeof WSCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Stop The Button",    
  },
};


export const WithFunction: Story = {
  args: {
    label: "Stop The Button",    
    onChange: (check: boolean) => alert(`checkbox is: ${check}`)
  },
};


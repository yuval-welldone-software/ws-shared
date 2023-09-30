import type { Meta, StoryObj } from '@storybook/react';

import { MoveButton } from './MoveButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/MoveButton',
  component: MoveButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    stopMove: { defaultValue: false },
    label: { defaultValue: "Catch me if you can" }
  },
} satisfies Meta<typeof MoveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    stopMove: true,   
    label: "Catch me if you can"
  },
};
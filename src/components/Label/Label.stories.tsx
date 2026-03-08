import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:    { control: 'color' },
    text:     { control: 'text' },
    fontSize: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story       = { args: { text: 'Form Label', disabled: false } };
export const Disabled: Story      = { args: { text: 'Disabled Label', disabled: true } };
export const WithBackground: Story = { args: { text: 'Highlighted', backgroundColor: '#4f46e5', color: '#ffffff', disabled: false } };

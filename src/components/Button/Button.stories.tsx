import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:    { control: 'color' },
    label:    { control: 'text' },
    disabled: { control: 'boolean' },
    size:     { control: 'select', options: ['small', 'medium', 'large'] },
    onClick:  { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story  = { args: { label: 'Click Me', backgroundColor: '#4f46e5', color: '#ffffff', disabled: false, size: 'medium' } };
export const Disabled: Story = { args: { label: 'Disabled Button', disabled: true } };
export const Small: Story    = { args: { label: 'Small', size: 'small' } };
export const Large: Story    = { args: { label: 'Large', size: 'large' } };

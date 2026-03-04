import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:       { control: 'color' },
    placeholder: { control: 'text' },
    disabled:    { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: { placeholder: 'Select a framework', disabled: false,
    options: [{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }, { value: 'angular', label: 'Angular' }] },
};
export const Disabled: Story = {
  args: { placeholder: 'Disabled dropdown', disabled: true, options: [{ value: 'react', label: 'React' }] },
};

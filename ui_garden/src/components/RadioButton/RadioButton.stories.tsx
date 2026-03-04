import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:    { control: 'color' },
    label:    { control: 'text' },
    checked:  { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story  = { args: { label: 'Option 1', name: 'demo', value: 'a', checked: false, disabled: false } };
export const Checked: Story  = { args: { label: 'Checked',  name: 'demo', value: 'a', checked: true,  disabled: false } };
export const Disabled: Story = { args: { label: 'Disabled', name: 'demo', value: 'b', checked: false, disabled: true  } };

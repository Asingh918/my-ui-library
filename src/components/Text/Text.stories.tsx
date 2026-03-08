import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:      { control: 'color' },
    content:    { control: 'text' },
    fontSize:   { control: 'text' },
    fontWeight: { control: 'text' },
    disabled:   { control: 'boolean' },
    as:         { control: 'select', options: ['p', 'span', 'h1', 'h2', 'h3', 'h4'] },
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story  = { args: { content: 'This is a text component.', disabled: false } };
export const Disabled: Story = { args: { content: 'This text is disabled.', disabled: true } };
export const Heading: Story  = { args: { content: 'This is a Heading', as: 'h2', fontWeight: '700', fontSize: '1.75rem' } };

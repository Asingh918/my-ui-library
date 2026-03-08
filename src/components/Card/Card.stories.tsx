import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:       { control: 'color' },
    title:       { control: 'text' },
    description: { control: 'text' },
    footerText:  { control: 'text' },
    imageSrc:    { control: 'text' },
    disabled:    { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story        = { args: { title: 'Beautiful Card', description: 'A sample card component.', footerText: 'Jan 2025', disabled: false } };
export const Disabled: Story       = { args: { title: 'Disabled Card', description: 'Not available.', footerText: 'N/A', disabled: true } };
export const CustomBackground: Story = { args: { title: 'Custom Card', description: 'Custom background color.', backgroundColor: '#ede9fe', footerText: 'Styled', disabled: false } };

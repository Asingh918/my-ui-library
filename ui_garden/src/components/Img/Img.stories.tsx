import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled:     { control: 'boolean' },
    src:          { control: 'text' },
    alt:          { control: 'text' },
    width:        { control: 'text' },
    height:       { control: 'text' },
    borderRadius: { control: 'text' },
    objectFit:    { control: 'select', options: ['cover', 'contain', 'fill', 'none'] },
  },
};
export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story  = { args: { src: 'https://placehold.co/400x250', alt: 'Sample', width: '400px', height: '250px', disabled: false } };
export const Disabled: Story = { args: { src: 'https://placehold.co/400x250', alt: 'Disabled', width: '400px', height: '250px', disabled: true } };

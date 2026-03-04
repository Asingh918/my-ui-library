import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:        { control: 'color' },
    overlayColor: { control: 'color' },
    title:    { control: 'text' },
    subtitle: { control: 'text' },
    src:      { control: 'text' },
    height:   { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story  = { args: { src: 'https://placehold.co/1200x420', title: 'Welcome', subtitle: 'Build great UIs', disabled: false, height: '420px' } };
export const Disabled: Story = { args: { src: 'https://placehold.co/1200x420', title: 'Disabled Hero', subtitle: 'Not available', disabled: true, height: '420px' } };
export const CustomOverlay: Story = { args: { src: 'https://placehold.co/1200x420', title: 'Custom Overlay', subtitle: 'Purple tint', overlayColor: 'rgba(79,70,229,0.6)', disabled: false, height: '420px' } };

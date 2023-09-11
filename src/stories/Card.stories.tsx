import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Cards/Card';

const meta = {
    title: "Library/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
      layout: 'centered'
    },
    args: {
        Title: 'Card Component',
        Subtitle: 'Card Subtitle',
        Description: 'Here is some text that is used for a brief description of this card',
        ImageSrc: 'https://source.unsplash.com/KsOWP1sH6W4',
        ImageCaption: 'A caption for your image',
        Buttons: false,
        ButtonLabel: ['button1', 'button2'],
        Size: 'medium',
    
    },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        CardStyle: 'standard'
    },
   };
export const Border: Story = {
    args: {
        CardStyle: 'border'
    },
}
export const Shadow: Story = {
    args: {
        CardStyle: 'shadow'
    },
};
export const Buttons: Story = {
    args: {
        Buttons: true,
        Style: 'solid',
        Color: 'indigo'
    }
}


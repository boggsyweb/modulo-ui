import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Buttons/Button';

const meta = {
    title: "Library/Buttons/Button",
    component: Button, 
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
      },
      args: {
        ButtonLabel: 'Button',
        Color: 'indigo',
        Icon: false,
        Disabled: false,
        Oval: false
      },
    } satisfies Meta<typeof Button>;
    export default meta;
    type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        Style: 'solid'
    },
};
export const Outline: Story = {
    args: {
        Style: 'outline'
    },
};
export const ghostHover: Story = {
    args: {
        Style: 'ghostHover'
    },
};
export const link: Story = {
    args: {
        Style: 'link'
    },
};


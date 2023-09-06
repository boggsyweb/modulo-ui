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
        label: 'Button',
        buttonColor: 'indigo',
        icon: false,
        disabled: false,
        oval: false
      },
    } satisfies Meta<typeof Button>;
    export default meta;
    type Story = StoryObj<typeof meta>;

export const Solid: Story = {
    args: {
        buttonStyle: 'solid'
    },
};
export const Outline: Story = {
    args: {
        buttonStyle: 'outline'
    },
};
export const ghostHover: Story = {
    args: {
        buttonStyle: 'ghostHover'
    },
};
export const link: Story = {
    args: {
        buttonStyle: 'link'
    },
};


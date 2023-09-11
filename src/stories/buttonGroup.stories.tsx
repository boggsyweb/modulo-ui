import type { Meta, StoryObj } from '@storybook/react';
import buttonGroup from '../components/Buttons/ButtonGroup';

const meta = {
    title: "Library/Buttons/ButtonGroup",
    component: buttonGroup,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        GroupLabel: ['Button1', 'Button2', 'Button3'],
        Color: 'indigo',
        Icon: false,
        Disabled: false,
        Oval: false,
        IconPosition: 'left'
    },
} satisfies Meta<typeof buttonGroup>;
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
export const Icon: Story = {
    args: {
        Icon: true
    },
};
export const Oval: Story = {
    args: {
        Oval: true
    },
};

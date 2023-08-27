import type { Meta, StoryObj } from '@storybook/react';
import buttonGroup from './ButtonGroup';

const meta = {
    title: "Library/Buttons/ButtonGroup",
    component: buttonGroup,
    tags: ["autodocs"],
    parameters: {
        layout: 'centered'
    },
    args: {
        labels: ['Button1', 'Button2', 'Button3'],
        groupLength: 3,
        buttonColor: 'indigo',
        icon: false,
        disabled: false,
        ovalEnds: false,
        iconPosition: 'first'
    },
} satisfies Meta<typeof buttonGroup>;
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
export const Icon: Story = {
    args: {
        icon: true
    },
};
export const Oval: Story = {
    args: {
        ovalEnds: true
    },
};
